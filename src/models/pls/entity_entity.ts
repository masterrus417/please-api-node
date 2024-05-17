import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';

export interface entity_entityAttributes {
  ent_ent_id: number;
  entity_id?: number;
  entity_id_link?: number;
  ts_created?: Date;
  ts_deleted?: Date;
  user_created?: string;
  user_deleted?: string;
}

export type entity_entityPk = "ent_ent_id";
export type entity_entityId = entity_entity[entity_entityPk];
export type entity_entityOptionalAttributes = "ent_ent_id" | "entity_id" | "entity_id_link" | "ts_created" | "ts_deleted" | "user_created" | "user_deleted";
export type entity_entityCreationAttributes = Optional<entity_entityAttributes, entity_entityOptionalAttributes>;

export class entity_entity extends Model<entity_entityAttributes, entity_entityCreationAttributes> implements entity_entityAttributes {
  ent_ent_id!: number;
  entity_id?: number;
  entity_id_link?: number;
  ts_created?: Date;
  ts_deleted?: Date;
  user_created?: string;
  user_deleted?: string;

  // entity_entity belongsTo entity via entity_id
  entity!: entity;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<entity>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<entity>;
  // entity_entity belongsTo entity via entity_id_link
  entity_id_link_entity!: entity;
  getEntity_id_link_entity!: Sequelize.BelongsToGetAssociationMixin<entity>;
  setEntity_id_link_entity!: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
  createEntity_id_link_entity!: Sequelize.BelongsToCreateAssociationMixin<entity>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entity_entity {
    return entity_entity.init({
    ent_ent_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "уникальный ключ связки",
      primaryKey: true
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "сущность_родитель",
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    entity_id_link: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "сущность_дитя",
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    ts_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ts_deleted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_created: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_deleted: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entity_entity',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "entity_entity_pkey",
        unique: true,
        fields: [
          { name: "ent_ent_id" },
        ]
      },
    ]
  });
  }
}
