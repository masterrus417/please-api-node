import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_attr, ref_attrId } from './ref_attr';

export interface entity_attr_logAttributes {
  entity_attr_log_id: number;
  rattr_id?: number;
  entity_id?: number;
  entity_attr_value?: string;
  ts_change?: Date;
  user_change?: string;
}

export type entity_attr_logPk = "entity_attr_log_id";
export type entity_attr_logId = entity_attr_log[entity_attr_logPk];
export type entity_attr_logOptionalAttributes = "entity_attr_log_id" | "rattr_id" | "entity_id" | "entity_attr_value" | "ts_change" | "user_change";
export type entity_attr_logCreationAttributes = Optional<entity_attr_logAttributes, entity_attr_logOptionalAttributes>;

export class entity_attr_log extends Model<entity_attr_logAttributes, entity_attr_logCreationAttributes> implements entity_attr_logAttributes {
  entity_attr_log_id!: number;
  rattr_id?: number;
  entity_id?: number;
  entity_attr_value?: string;
  ts_change?: Date;
  user_change?: string;

  // entity_attr_log belongsTo entity via entity_id
  entity!: entity;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<entity>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<entity>;
  // entity_attr_log belongsTo ref_attr via rattr_id
  rattr!: ref_attr;
  getRattr!: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
  setRattr!: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
  createRattr!: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entity_attr_log {
    return entity_attr_log.init({
    entity_attr_log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ref_attr',
        key: 'rattr_id'
      }
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    entity_attr_value: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "предыдущее (до обновления) значение атрибута"
    },
    ts_change: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_change: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entity_attr_log',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "entity_attr_log_pkey",
        unique: true,
        fields: [
          { name: "entity_attr_log_id" },
        ]
      },
    ]
  });
  }
}
