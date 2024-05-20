import { Request, Response } from 'express';
import { modelsPls } from '../config/database';
import { literal , Op} from 'sequelize';


const { entity_entity, entity, ref_entity_type } = modelsPls;


export const getEntityLinks = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const links = await entity_entity.findAll({
        where: { entity_id: id && literal('entity_entity.ts_deleted IS NULL')},
        attributes: ['ent_ent_id','ts_created','user_created'],
        include: [
          {
            model: entity,
            attributes: ['entity_id'],
            as: 'entity',
            include: [{
              model: ref_entity_type,
              as: 'rentity_type',
              attributes : ['rentity_type_name', 'rentity_type_label']
            }]
          },
          {
            model: entity,
            as: 'entity_id_link_entity',
            attributes: ['entity_id'],
            include: [{
              model: ref_entity_type,
              as: 'rentity_type',
              attributes : ['rentity_type_name', 'rentity_type_label']
            }]
          }

        ]

      });

      res.status(200).json({ links });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

export const createEntityLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, id_link } = req.body;
    const link = await entity_entity.create({
      entity_id:id,
      entity_id_link:id_link,
      ts_created: new Date(),
      user_created: req.user?.username
    });
    res.status(200).json({ message: 'Link created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const deleteEntityLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, id_link } = req.params;
    await entity_entity.destroy({ where: { entity_id: id, entity_id_link: id_link} });
    res.status(200).json({ message: 'Link deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}