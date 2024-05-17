import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_stage, ref_stageId } from './ref_stage';
import type { ref_stage_action, ref_stage_actionId } from './ref_stage_action';

export interface ref_stage_action_stageAttributes {
  rstage_action_stage_id: number;
  rstage_action_id?: number;
  rstage_id?: number;
}

export type ref_stage_action_stagePk = "rstage_action_stage_id";
export type ref_stage_action_stageId = ref_stage_action_stage[ref_stage_action_stagePk];
export type ref_stage_action_stageOptionalAttributes = "rstage_action_stage_id" | "rstage_action_id" | "rstage_id";
export type ref_stage_action_stageCreationAttributes = Optional<ref_stage_action_stageAttributes, ref_stage_action_stageOptionalAttributes>;

export class ref_stage_action_stage extends Model<ref_stage_action_stageAttributes, ref_stage_action_stageCreationAttributes> implements ref_stage_action_stageAttributes {
  rstage_action_stage_id!: number;
  rstage_action_id?: number;
  rstage_id?: number;

  // ref_stage_action_stage belongsTo ref_stage via rstage_id
  rstage!: ref_stage;
  getRstage!: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
  setRstage!: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
  createRstage!: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;
  // ref_stage_action_stage belongsTo ref_stage_action via rstage_action_id
  rstage_action!: ref_stage_action;
  getRstage_action!: Sequelize.BelongsToGetAssociationMixin<ref_stage_action>;
  setRstage_action!: Sequelize.BelongsToSetAssociationMixin<ref_stage_action, ref_stage_actionId>;
  createRstage_action!: Sequelize.BelongsToCreateAssociationMixin<ref_stage_action>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_stage_action_stage {
    return ref_stage_action_stage.init({
    rstage_action_stage_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rstage_action_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "после какого действия другого этапа",
      references: {
        model: 'ref_stage_action',
        key: 'rstage_action_id'
      }
    },
    rstage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какие новые этапы начинаются (возможна развилка и распаллеливание)",
      references: {
        model: 'ref_stage',
        key: 'rstage_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_stage_action_stage',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_stage_action_stage_idx",
        fields: [
          { name: "rstage_action_id" },
        ]
      },
      {
        name: "ref_stage_action_stage_idx1",
        fields: [
          { name: "rstage_id" },
        ]
      },
      {
        name: "ref_stage_actor_stage_pkey",
        unique: true,
        fields: [
          { name: "rstage_action_stage_id" },
        ]
      },
    ]
  });
  }
}
