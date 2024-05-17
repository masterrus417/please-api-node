import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_action, ref_actionId } from './ref_action';
import type { ref_stage, ref_stageId } from './ref_stage';

export interface entity_stageAttributes {
  entity_stage_id: number;
  rstage_id?: number;
  entity_id?: number;
  ts_action?: Date;
  raction_id?: number;
  user_action?: string;
  ts_created?: Date;
  user_created?: string;
}

export type entity_stagePk = "entity_stage_id";
export type entity_stageId = entity_stage[entity_stagePk];
export type entity_stageOptionalAttributes = "entity_stage_id" | "rstage_id" | "entity_id" | "ts_action" | "raction_id" | "user_action" | "ts_created" | "user_created";
export type entity_stageCreationAttributes = Optional<entity_stageAttributes, entity_stageOptionalAttributes>;

export class entity_stage extends Model<entity_stageAttributes, entity_stageCreationAttributes> implements entity_stageAttributes {
  entity_stage_id!: number;
  rstage_id?: number;
  entity_id?: number;
  ts_action?: Date;
  raction_id?: number;
  user_action?: string;
  ts_created?: Date;
  user_created?: string;

  // entity_stage belongsTo entity via entity_id
  entity!: entity;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<entity>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<entity>;
  // entity_stage belongsTo ref_action via raction_id
  raction!: ref_action;
  getRaction!: Sequelize.BelongsToGetAssociationMixin<ref_action>;
  setRaction!: Sequelize.BelongsToSetAssociationMixin<ref_action, ref_actionId>;
  createRaction!: Sequelize.BelongsToCreateAssociationMixin<ref_action>;
  // entity_stage belongsTo ref_stage via rstage_id
  rstage!: ref_stage;
  getRstage!: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
  setRstage!: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
  createRstage!: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entity_stage {
    return entity_stage.init({
    entity_stage_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rstage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "из справочника этапов",
      references: {
        model: 'ref_stage',
        key: 'rstage_id'
      }
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какая сущность соединена с этим этапом",
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    ts_action: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "метка времени выполнения действия"
    },
    raction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какое действие было выбрано на этом этапе",
      references: {
        model: 'ref_action',
        key: 'raction_id'
      }
    },
    user_action: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "какой пользователь  djnago_auth выбрал действие"
    },
    ts_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_created: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entity_stage',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "entity_stage_idx",
        fields: [
          { name: "rstage_id" },
        ]
      },
      {
        name: "entity_stage_idx1",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "entity_stage_idx2",
        fields: [
          { name: "raction_id" },
        ]
      },
      {
        name: "entity_stage_pkey",
        unique: true,
        fields: [
          { name: "entity_stage_id" },
        ]
      },
    ]
  });
  }
}
