import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_attr, ref_attrId } from './ref_attr';
import type { ref_entity_filter, ref_entity_filterId } from './ref_entity_filter';

export interface ref_entity_filter_attrAttributes {
  ref_entity_filter_attr_id: number;
  rattr_id?: number;
  rentity_filter_id?: number;
}

export type ref_entity_filter_attrPk = "ref_entity_filter_attr_id";
export type ref_entity_filter_attrId = ref_entity_filter_attr[ref_entity_filter_attrPk];
export type ref_entity_filter_attrOptionalAttributes = "ref_entity_filter_attr_id" | "rattr_id" | "rentity_filter_id";
export type ref_entity_filter_attrCreationAttributes = Optional<ref_entity_filter_attrAttributes, ref_entity_filter_attrOptionalAttributes>;

export class ref_entity_filter_attr extends Model<ref_entity_filter_attrAttributes, ref_entity_filter_attrCreationAttributes> implements ref_entity_filter_attrAttributes {
  ref_entity_filter_attr_id!: number;
  rattr_id?: number;
  rentity_filter_id?: number;

  // ref_entity_filter_attr belongsTo ref_attr via rattr_id
  rattr!: ref_attr;
  getRattr!: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
  setRattr!: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
  createRattr!: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;
  // ref_entity_filter_attr belongsTo ref_entity_filter via rentity_filter_id
  rentity_filter!: ref_entity_filter;
  getRentity_filter!: Sequelize.BelongsToGetAssociationMixin<ref_entity_filter>;
  setRentity_filter!: Sequelize.BelongsToSetAssociationMixin<ref_entity_filter, ref_entity_filterId>;
  createRentity_filter!: Sequelize.BelongsToCreateAssociationMixin<ref_entity_filter>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_entity_filter_attr {
    return ref_entity_filter_attr.init({
    ref_entity_filter_attr_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rattr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какой атрибут",
      references: {
        model: 'ref_attr',
        key: 'rattr_id'
      }
    },
    rentity_filter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "к какому набору фильтров",
      references: {
        model: 'ref_entity_filter',
        key: 'rentity_filter_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_entity_filter_attr',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_entity_filter_attr_idx",
        fields: [
          { name: "rattr_id" },
        ]
      },
      {
        name: "ref_entity_filter_attr_idx1",
        fields: [
          { name: "rentity_filter_id" },
        ]
      },
      {
        name: "ref_entity_filter_attr_pkey",
        unique: true,
        fields: [
          { name: "ref_entity_filter_attr_id" },
        ]
      },
    ]
  });
  }
}
