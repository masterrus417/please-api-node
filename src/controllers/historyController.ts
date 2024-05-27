import { Request, Response } from "express";
import { modelsPls } from "../config/database";
import { EventList, EventType } from "../interface/bodyHistory";
import { sequelize } from "../config/database";

const {
  ref_stage,
  entity_stage,
  entity_entity,
  entity,
  ref_entity_type,
  entity_attr_log,
  ref_attr,
  entity_attr,
} = modelsPls;

//получение истории
export const getHistory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    //создаем список событий
    const eventList = new EventList();

    //получаем сущность
    const currentEntity = await entity.findOne({
      where: { entity_id: id },
      order: [
        ["entity_attr_logs", "rattr_id", "ASC"],
        ["entity_attr_logs", "ts_change", "DESC"],
      ],
      include: [
        {
          model: ref_entity_type,
          as: "rentity_type",
          required: false,
          attributes: [
            "rentity_type_id",
            "rentity_type_name",
            "rentity_type_label",
            "rroute_id",
          ],
        },
        {
          model: entity_attr_log,
          as: "entity_attr_logs",
          required: false,
          attributes: [
            "rattr_id",
            "entity_attr_value",
            "ts_change",
            "user_change",
          ],
          include: [
            {
              model: ref_attr,
              as: "rattr",
              required: false,
              attributes: ["rattr_name", "rattr_label"],
            },
          ],
        },
        {
          model: entity_attr,
          as: "entity_attrs",
          required: true,
          attributes: ["entity_attr_id", "rattr_id", "entity_attr_value"],
        },
        {
          model: entity_entity,
          as: "entity_entities",
          required: false,
        },
        {
          model: entity_stage,
          as: "entity_stages",
          required: false,
          include: [
            {
              model: ref_stage,
              as: "rstage",
              required: false,
              attributes: ["rstage_id", "rstage_name", "rstage_label"],
            },
          ],
        },
      ],
    });

    //получаем все связные этапы
    const entity_stages = currentEntity?.entity_stages;
    entity_stages?.forEach((item) => {
      //добавляем старты этапов
      if (item.ts_created) {
        eventList.addEvent({
          event_type: "stage-started",
          event_type_name: EventType.stageStarted,
          event_description: `Этап [${item.rstage?.rstage_label}] создан`,
          event_date: item.ts_created,
          event_user: item.user_created!,
        });
      }

      //добавляем выполненые этапы
      if (item.ts_action) {
        eventList.addEvent({
          event_type: "stage-passed",
          event_type_name: EventType.stagePassed,
          event_description: `Этап [${item.rstage?.rstage_label}] выполнен`,
          event_date: item.ts_action,
          event_user: item.user_action!,
        });
      }
    });

    //получаем связанные сущности
    const entity_entits = currentEntity?.entity_entities;

    if (entity_entits) {
      const rez = entity_entits?.map((item) => ({
        entity_id: item.entity_id,
        entity_id_link: item.entity_id_link,
        ts_created: item.ts_created,
        user_created: item.user_created,
        ts_deleted: item.ts_deleted,
        user_deleted: item.user_deleted,
      }));

      interface EntityView {
        entity_id: number;
        attr_value_txt: string;
      }

      if (rez.length > 0) {
        const [results, metadata] = await sequelize.query(
          `SELECT evl.entity_id , evl.attr_value_txt  from pls.entity_view_list evl where evl.entity_id in (${rez
            ?.map((item) => item.entity_id_link)
            .join(",")})`
        );
        const typedResults = results as EntityView[];

        rez.forEach((item) => {
          const entity_id_link = item.entity_id_link;
          const ts_created = item.ts_created;
          const user_created = item.user_created;
          const ts_deleted = item.ts_deleted;
          const user_deleted = item.user_deleted;
          let attr_value_txt = "";

          const foundItem = typedResults.find(
            (result: any) => result?.entity_id == entity_id_link
          );

          if (foundItem) {
            attr_value_txt = foundItem?.attr_value_txt!;
          } else {
            attr_value_txt = "";
          }

          //создаем эвент на создание связи
          if (ts_created) {
            eventList.addEvent({
              event_type: "link-added",
              event_type_name: EventType.attributeChanged,
              event_description: `Добавлена свзязь с [${attr_value_txt}]`,
              event_date: ts_created,
              event_user: user_created!,
            });
          }
          //создаем эвент на удаение связи
          if (ts_deleted) {
            eventList.addEvent({
              event_type: "link-deleted",
              event_type_name: EventType.attributeChanged,
              event_description: `Удалена свзязь с [${attr_value_txt}]`,
              event_date: ts_deleted,
              event_user: user_deleted!,
            });
          }
        });
      }
    }

    const entity_attrs = currentEntity?.entity_attrs;
    const entity_attr_logs = currentEntity?.entity_attr_logs;

    let currentVal: string = "";
    let nextVal: string = "";
    let currentRattrID: number = 0;

    if (entity_attr_logs) {
      for (const rez of entity_attr_logs) {
        if (rez.entity_attr_value != null) {
          if (currentRattrID != rez.rattr_id) {
            currentRattrID = rez.rattr_id || 0;
            let result = entity_attrs?.filter(
              (item) => item.rattr_id == currentRattrID
            );

            if (result && result.length > 0) {
              currentVal = rez.entity_attr_value || ""; // первое изменение
              nextVal = result[0].entity_attr_value || ""; // текущее значение в базе
            } else {
              currentVal = "";
              nextVal = "";
            }

            eventList.addEvent({
              event_type: "attribute-changed",
              event_type_name: EventType.attributeChanged,
              event_description: `Изменение атрибута [${rez.rattr.rattr_label}] с [${currentVal}] на [${nextVal}]`,
              event_date: rez.ts_change!,
              event_user: rez.user_change!,
            });

            nextVal = currentVal;
          } else {
            currentVal = rez.entity_attr_value || "";
            eventList.addEvent({
              event_type: "attribute-changed",
              event_type_name: EventType.attributeChanged,
              event_description: `Изменение атрибута [${rez.rattr.rattr_label}] с [${currentVal}] на [${nextVal}]`,
              event_date: rez.ts_change!,
              event_user: rez.user_change!,
            });

            nextVal = rez.entity_attr_value || "";
          }
        }
      }
    }

    //добавляем событие создания
    if (currentEntity?.ts_created != null) {
      eventList.addEvent({
        event_type: "entity-created",
        event_type_name: EventType.entityCreated,
        event_description: `Создание сущности [${currentEntity.rentity_type.rentity_type_label}]`,
        event_date: currentEntity.ts_created,
        event_user: currentEntity.user_created!,
      });
    }
    //добавляем собыие удаления
    if (currentEntity?.ts_deleted != null) {
      eventList.addEvent({
        event_type: "entity-deleted",
        event_type_name: EventType.entityDeleted,
        event_description: `Удаление сущности [${currentEntity.rentity_type.rentity_type_label}]`,
        event_date: currentEntity.ts_deleted,
        event_user: currentEntity.user_deleted!,
      });
    }

    eventList.sortEvents();
    res.status(200).json({
      entity_id: currentEntity?.entity_id,
      history: eventList.toJSON(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
