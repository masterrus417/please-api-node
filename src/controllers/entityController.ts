import { Request, Response } from 'express';
import { entity } from '../models/pls/entity';
import { modelsPls } from '../config/database';

const { ref_entity_type, ref_attr, ref_attr_group, entity_attr } = modelsPls;

//получаем список сущностей
export const getEntity = async (req: Request, res: Response): Promise<void> => {
  try {
    const listEntity = await entity.findAll();
    res.status(200).json(listEntity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
//получаем сущность по идентификатору
export const getEntityById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const oneEntity = await entity.findByPk(id);
    res.status(200).json(oneEntity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
//создаем сущность по типу
export const createEntity = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rentity_type_name } = req.params;
    // Проверка наличия типа сущности
    const currentType = await ref_entity_type.findOne({ where: { rentity_type_name : rentity_type_name } });

    if (currentType == null) {
      res.status(400).json({ message: 'Тип сущности не найден' });
      return;
    }
    // Создание новой сущности
    const newEntity = await entity.create({
      rentity_type_id: currentType.rentity_type_id,
      ts_created: new Date(),
      user_created: req.user?.username,
    });

    // Ищем группу атрибутов для текущего типа сущности
    const currentGroupAttr = await ref_attr_group.findOne({ where: { rentity_type_id: currentType?.rentity_type_id } });
    // Ищем все атрибуты для данной группы
    const currentAttr = await ref_attr.findAll({ where: { rattr_group_id: currentGroupAttr?.rattr_group_id } });
    // Собираем атрибуты в пакет для вставки
    const insertData = currentAttr.map((attr) => {
      return {
        entity_id: newEntity.entity_id,
        rattr_id: attr.rattr_id,
        entity_attr_value: '',
      }
    });
    //вставка пакета атрибутов
    await entity_attr.bulkCreate(insertData);

    res.status(201).json(newEntity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


export const getEntityByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rentity_type_name } = req.params;
    console.log(1);
    const listEntity = await entity.findAll({
      include: [{
        model: entity_attr,
        as:'entity_attrs',
        required: true
      }]
    });

    res.status(200).json(listEntity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
