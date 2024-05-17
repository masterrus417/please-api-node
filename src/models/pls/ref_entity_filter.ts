import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_entity_filter_attr, ref_entity_filter_attrId } from './ref_entity_filter_attr';
import type { ref_entity_type, ref_entity_typeId } from './ref_entity_type';

export interface ref_entity_filterAttributes {
  rentity_filter_id: number;
  rentity_type_id?: number;
  rentity_filter_name?: string;
  rentity_filter_label?: string;
}

export type ref_entity_filterPk = "rentity_filter_id";
export type ref_entity_filterId = ref_entity_filter[ref_entity_filterPk];
export type ref_entity_filterOptionalAttributes = "rentity_filter_id" | "rentity_type_id" | "rentity_filter_name" | "rentity_filter_label";
export type ref_entity_filterCreationAttributes = Optional<ref_entity_filterAttributes, ref_entity_filterOptionalAttributes>;

export class ref_entity_filter extends Model<ref_entity_filterAttributes, ref_entity_filterCreationAttributes> implements ref_entity_filterAttributes {
  rentity_filter_id!: number;
  rentity_type_id?: number;
  rentity_filter_name?: string;
  rentity_filter_label?: string;

  // ref_entity_filter hasMany ref_entity_filter_attr via rentity_filter_id
  ref_entity_filter_attrs!: ref_entity_filter_attr[];
  getRef_entity_filter_attrs!: Sequelize.HasManyGetAssociationsMixin<ref_entity_filter_attr>;
  setRef_entity_filter_attrs!: Sequelize.HasManySetAssociationsMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  addRef_entity_filter_attr!: Sequelize.HasManyAddAssociationMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  addRef_entity_filter_attrs!: Sequelize.HasManyAddAssociationsMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  createRef_entity_filter_attr!: Sequelize.HasManyCreateAssociationMixin<ref_entity_filter_attr>;
  removeRef_entity_filter_attr!: Sequelize.HasManyRemoveAssociationMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  removeRef_entity_filter_attrs!: Sequelize.HasManyRemoveAssociationsMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  hasRef_entity_filter_attr!: Sequelize.HasManyHasAssociationMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  hasRef_entity_filter_attrs!: Sequelize.HasManyHasAssociationsMixin<ref_entity_filter_attr, ref_entity_filter_attrId>;
  countRef_entity_filter_attrs!: Sequelize.HasManyCountAssociationsMixin;
  // ref_entity_filter belongsTo ref_entity_type via rentity_type_id
  rentity_type!: ref_entity_type;
  getRentity_type!: Sequelize.BelongsToGetAssociationMixin<ref_entity_type>;
  setRentity_type!: Sequelize.BelongsToSetAssociationMixin<ref_entity_type, ref_entity_typeId>;
  createRentity_type!: Sequelize.BelongsToCreateAssociationMixin<ref_entity_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_entity_filter {
    return ref_entity_filter.init({
    rentity_filter_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rentity_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "у какого сущности",
      references: {
        model: 'ref_entity_type',
        key: 'rentity_type_id'
      }
    },
    rentity_filter_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rentity_filter_label: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ref_entity_filter',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_entity_filter_idx",
        fields: [
          { name: "rentity_type_id" },
        ]
      },
      {
        name: "ref_entity_filter_pkey",
        unique: true,
        fields: [
          { name: "rentity_filter_id" },
        ]
      },
    ]
  });
  }
}
