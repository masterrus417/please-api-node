import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_attr, ref_attrId } from './ref_attr';

export interface entity_attrAttributes {
  entity_attr_id: number;
  rattr_id?: number;
  entity_id?: number;
  entity_attr_value?: string;
}

export type entity_attrPk = "entity_attr_id";
export type entity_attrId = entity_attr[entity_attrPk];
export type entity_attrOptionalAttributes = "entity_attr_id" | "rattr_id" | "entity_id" | "entity_attr_value";
export type entity_attrCreationAttributes = Optional<entity_attrAttributes, entity_attrOptionalAttributes>;

export class entity_attr extends Model<entity_attrAttributes, entity_attrCreationAttributes> implements entity_attrAttributes {
  entity_attr_id!: number;
  rattr_id?: number;
  entity_id?: number;
  entity_attr_value?: string;

  // entity_attr belongsTo entity via entity_id
  entity!: entity;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<entity>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<entity>;
  // entity_attr belongsTo ref_attr via rattr_id
  rattr!: ref_attr;
  getRattr!: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
  setRattr!: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
  createRattr!: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entity_attr {
    return entity_attr.init({
    entity_attr_id: {
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entity_attr',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "entity_attr_idx",
        fields: [
          { name: "rattr_id" },
        ]
      },
      {
        name: "entity_attr_idx1",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "entity_attr_pkey",
        unique: true,
        fields: [
          { name: "entity_attr_id" },
        ]
      },
    ]
  });
  }
}
