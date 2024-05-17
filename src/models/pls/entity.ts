import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity_attr, entity_attrId } from './entity_attr';
import type { entity_attr_log, entity_attr_logId } from './entity_attr_log';
import type { entity_entity, entity_entityId } from './entity_entity';
import type { entity_stage, entity_stageId } from './entity_stage';
import type { ref_entity_type, ref_entity_typeId } from './ref_entity_type';

export interface entityAttributes {
  entity_id: number;
  rentity_type_id?: number;
  ts_deleted?: Date;
  user_deleted?: string;
  chatroom_uuid?: string;
  ts_created?: Date;
  user_created?: string;
}

export type entityPk = "entity_id";
export type entityId = entity[entityPk];
export type entityOptionalAttributes = "entity_id" | "rentity_type_id" | "ts_deleted" | "user_deleted" | "chatroom_uuid" | "ts_created" | "user_created";
export type entityCreationAttributes = Optional<entityAttributes, entityOptionalAttributes>;

export class entity extends Model<entityAttributes, entityCreationAttributes> implements entityAttributes {
  entity_id!: number;
  rentity_type_id?: number;
  ts_deleted?: Date;
  user_deleted?: string;
  chatroom_uuid?: string;
  ts_created?: Date;
  user_created?: string;

  // entity hasMany entity_attr via entity_id
  entity_attrs!: entity_attr[];
  getEntity_attrs!: Sequelize.HasManyGetAssociationsMixin<entity_attr>;
  setEntity_attrs!: Sequelize.HasManySetAssociationsMixin<entity_attr, entity_attrId>;
  addEntity_attr!: Sequelize.HasManyAddAssociationMixin<entity_attr, entity_attrId>;
  addEntity_attrs!: Sequelize.HasManyAddAssociationsMixin<entity_attr, entity_attrId>;
  createEntity_attr!: Sequelize.HasManyCreateAssociationMixin<entity_attr>;
  removeEntity_attr!: Sequelize.HasManyRemoveAssociationMixin<entity_attr, entity_attrId>;
  removeEntity_attrs!: Sequelize.HasManyRemoveAssociationsMixin<entity_attr, entity_attrId>;
  hasEntity_attr!: Sequelize.HasManyHasAssociationMixin<entity_attr, entity_attrId>;
  hasEntity_attrs!: Sequelize.HasManyHasAssociationsMixin<entity_attr, entity_attrId>;
  countEntity_attrs!: Sequelize.HasManyCountAssociationsMixin;
  // entity hasMany entity_attr_log via entity_id
  entity_attr_logs!: entity_attr_log[];
  getEntity_attr_logs!: Sequelize.HasManyGetAssociationsMixin<entity_attr_log>;
  setEntity_attr_logs!: Sequelize.HasManySetAssociationsMixin<entity_attr_log, entity_attr_logId>;
  addEntity_attr_log!: Sequelize.HasManyAddAssociationMixin<entity_attr_log, entity_attr_logId>;
  addEntity_attr_logs!: Sequelize.HasManyAddAssociationsMixin<entity_attr_log, entity_attr_logId>;
  createEntity_attr_log!: Sequelize.HasManyCreateAssociationMixin<entity_attr_log>;
  removeEntity_attr_log!: Sequelize.HasManyRemoveAssociationMixin<entity_attr_log, entity_attr_logId>;
  removeEntity_attr_logs!: Sequelize.HasManyRemoveAssociationsMixin<entity_attr_log, entity_attr_logId>;
  hasEntity_attr_log!: Sequelize.HasManyHasAssociationMixin<entity_attr_log, entity_attr_logId>;
  hasEntity_attr_logs!: Sequelize.HasManyHasAssociationsMixin<entity_attr_log, entity_attr_logId>;
  countEntity_attr_logs!: Sequelize.HasManyCountAssociationsMixin;
  // entity hasMany entity_entity via entity_id
  entity_entities!: entity_entity[];
  getEntity_entities!: Sequelize.HasManyGetAssociationsMixin<entity_entity>;
  setEntity_entities!: Sequelize.HasManySetAssociationsMixin<entity_entity, entity_entityId>;
  addEntity_entity!: Sequelize.HasManyAddAssociationMixin<entity_entity, entity_entityId>;
  addEntity_entities!: Sequelize.HasManyAddAssociationsMixin<entity_entity, entity_entityId>;
  createEntity_entity!: Sequelize.HasManyCreateAssociationMixin<entity_entity>;
  removeEntity_entity!: Sequelize.HasManyRemoveAssociationMixin<entity_entity, entity_entityId>;
  removeEntity_entities!: Sequelize.HasManyRemoveAssociationsMixin<entity_entity, entity_entityId>;
  hasEntity_entity!: Sequelize.HasManyHasAssociationMixin<entity_entity, entity_entityId>;
  hasEntity_entities!: Sequelize.HasManyHasAssociationsMixin<entity_entity, entity_entityId>;
  countEntity_entities!: Sequelize.HasManyCountAssociationsMixin;
  // entity hasMany entity_entity via entity_id_link
  entity_id_link_entity_entities!: entity_entity[];
  getEntity_id_link_entity_entities!: Sequelize.HasManyGetAssociationsMixin<entity_entity>;
  setEntity_id_link_entity_entities!: Sequelize.HasManySetAssociationsMixin<entity_entity, entity_entityId>;
  addEntity_id_link_entity_entity!: Sequelize.HasManyAddAssociationMixin<entity_entity, entity_entityId>;
  addEntity_id_link_entity_entities!: Sequelize.HasManyAddAssociationsMixin<entity_entity, entity_entityId>;
  createEntity_id_link_entity_entity!: Sequelize.HasManyCreateAssociationMixin<entity_entity>;
  removeEntity_id_link_entity_entity!: Sequelize.HasManyRemoveAssociationMixin<entity_entity, entity_entityId>;
  removeEntity_id_link_entity_entities!: Sequelize.HasManyRemoveAssociationsMixin<entity_entity, entity_entityId>;
  hasEntity_id_link_entity_entity!: Sequelize.HasManyHasAssociationMixin<entity_entity, entity_entityId>;
  hasEntity_id_link_entity_entities!: Sequelize.HasManyHasAssociationsMixin<entity_entity, entity_entityId>;
  countEntity_id_link_entity_entities!: Sequelize.HasManyCountAssociationsMixin;
  // entity hasMany entity_stage via entity_id
  entity_stages!: entity_stage[];
  getEntity_stages!: Sequelize.HasManyGetAssociationsMixin<entity_stage>;
  setEntity_stages!: Sequelize.HasManySetAssociationsMixin<entity_stage, entity_stageId>;
  addEntity_stage!: Sequelize.HasManyAddAssociationMixin<entity_stage, entity_stageId>;
  addEntity_stages!: Sequelize.HasManyAddAssociationsMixin<entity_stage, entity_stageId>;
  createEntity_stage!: Sequelize.HasManyCreateAssociationMixin<entity_stage>;
  removeEntity_stage!: Sequelize.HasManyRemoveAssociationMixin<entity_stage, entity_stageId>;
  removeEntity_stages!: Sequelize.HasManyRemoveAssociationsMixin<entity_stage, entity_stageId>;
  hasEntity_stage!: Sequelize.HasManyHasAssociationMixin<entity_stage, entity_stageId>;
  hasEntity_stages!: Sequelize.HasManyHasAssociationsMixin<entity_stage, entity_stageId>;
  countEntity_stages!: Sequelize.HasManyCountAssociationsMixin;
  // entity belongsTo ref_entity_type via rentity_type_id
  rentity_type!: ref_entity_type;
  getRentity_type!: Sequelize.BelongsToGetAssociationMixin<ref_entity_type>;
  setRentity_type!: Sequelize.BelongsToSetAssociationMixin<ref_entity_type, ref_entity_typeId>;
  createRentity_type!: Sequelize.BelongsToCreateAssociationMixin<ref_entity_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entity {
    return entity.init({
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rentity_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ref_entity_type",
      references: {
        model: 'ref_entity_type',
        key: 'rentity_type_id'
      }
    },
    ts_deleted: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "пометка, что сущность удалена в корзину"
    },
    user_deleted: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chatroom_uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ссылка на чат в мессенджере"
    },
    ts_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_created: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entity',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "entity_idx",
        fields: [
          { name: "rentity_type_id" },
        ]
      },
      {
        name: "entity_pkey",
        unique: true,
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
