import { Request, Response } from 'express';
import { modelsPls } from '../config/database';
import { literal } from 'sequelize';


const { ref_stage, entity_stage, ref_action } = modelsPls;

export const getStageByEntityID = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const stages = await entity_stage.findAll({
      where: {
        entity_id: id && literal('ts_action IS NULL'),
      },
      attributes: ['entity_stage_id', 'rstage_id', 'entity_id', 'ts_created', 'user_created'],
      include: [{
        model:ref_stage,
        as: 'rstage',
        attributes: ['rstage_name', 'rstage_label'],
      }
      ]
    });

    const formattedData = stages.map((stage) => {
      return {
        entity_stage_id: stage.entity_stage_id,
        rstage_id: stage.rstage_id,
        rstage_name: stage.rstage.rstage_name,
        rstage_label: stage.rstage.rstage_label,
        entity_id: stage.entity_id,
        ts_created: stage.ts_created,
        user_created: stage.user_created
      };
    });

    res.status(200).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


