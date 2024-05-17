import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_attr, ref_attrId } from './ref_attr';
import type { ref_attr_group_actor, ref_attr_group_actorId } from './ref_attr_group_actor';
import type { ref_entity_type, ref_entity_typeId } from './ref_entity_type';

export interface ref_attr_groupAttributes {
  rattr_group_id: number;
  rattr_group_name?: string;
  rattr_group_label?: string;
  rattr_group_no?: number;
  rentity_type_id?: number;
}

export type ref_attr_groupPk = "rattr_group_id";
export type ref_attr_groupId = ref_attr_group[ref_attr_groupPk];
export type ref_attr_groupOptionalAttributes = "rattr_group_id" | "rattr_group_name" | "rattr_group_label" | "rattr_group_no" | "rentity_type_id";
export type ref_attr_groupCreationAttributes = Optional<ref_attr_groupAttributes, ref_attr_groupOptionalAttributes>;

export class ref_attr_group extends Model<ref_attr_groupAttributes, ref_attr_groupCreationAttributes> implements ref_attr_groupAttributes {
  rattr_group_id!: number;
  rattr_group_name?: string;
  rattr_group_label?: string;
  rattr_group_no?: number;
  rentity_type_id?: number;

  // ref_attr_group hasMany ref_attr via rattr_group_id
  ref_attrs!: ref_attr[];
  getRef_attrs!: Sequelize.HasManyGetAssociationsMixin<ref_attr>;
  setRef_attrs!: Sequelize.HasManySetAssociationsMixin<ref_attr, ref_attrId>;
  addRef_attr!: Sequelize.HasManyAddAssociationMixin<ref_attr, ref_attrId>;
  addRef_attrs!: Sequelize.HasManyAddAssociationsMixin<ref_attr, ref_attrId>;
  createRef_attr!: Sequelize.HasManyCreateAssociationMixin<ref_attr>;
  removeRef_attr!: Sequelize.HasManyRemoveAssociationMixin<ref_attr, ref_attrId>;
  removeRef_attrs!: Sequelize.HasManyRemoveAssociationsMixin<ref_attr, ref_attrId>;
  hasRef_attr!: Sequelize.HasManyHasAssociationMixin<ref_attr, ref_attrId>;
  hasRef_attrs!: Sequelize.HasManyHasAssociationsMixin<ref_attr, ref_attrId>;
  countRef_attrs!: Sequelize.HasManyCountAssociationsMixin;
  // ref_attr_group hasMany ref_attr_group_actor via rattr_group_id
  ref_attr_group_actors!: ref_attr_group_actor[];
  getRef_attr_group_actors!: Sequelize.HasManyGetAssociationsMixin<ref_attr_group_actor>;
  setRef_attr_group_actors!: Sequelize.HasManySetAssociationsMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  addRef_attr_group_actor!: Sequelize.HasManyAddAssociationMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  addRef_attr_group_actors!: Sequelize.HasManyAddAssociationsMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  createRef_attr_group_actor!: Sequelize.HasManyCreateAssociationMixin<ref_attr_group_actor>;
  removeRef_attr_group_actor!: Sequelize.HasManyRemoveAssociationMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  removeRef_attr_group_actors!: Sequelize.HasManyRemoveAssociationsMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  hasRef_attr_group_actor!: Sequelize.HasManyHasAssociationMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  hasRef_attr_group_actors!: Sequelize.HasManyHasAssociationsMixin<ref_attr_group_actor, ref_attr_group_actorId>;
  countRef_attr_group_actors!: Sequelize.HasManyCountAssociationsMixin;
  // ref_attr_group belongsTo ref_entity_type via rentity_type_id
  rentity_type!: ref_entity_type;
  getRentity_type!: Sequelize.BelongsToGetAssociationMixin<ref_entity_type>;
  setRentity_type!: Sequelize.BelongsToSetAssociationMixin<ref_entity_type, ref_entity_typeId>;
  createRentity_type!: Sequelize.BelongsToCreateAssociationMixin<ref_entity_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_group {
    return ref_attr_group.init({
    rattr_group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_group_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rattr_group_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rattr_group_no: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "порядковый номер для отображения"
    },
    rentity_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "указатель какой тип сущности обладает этой группа атрибутов",
      references: {
        model: 'ref_entity_type',
        key: 'rentity_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_attr_group',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_attr_group_pkey",
        unique: true,
        fields: [
          { name: "rattr_group_id" },
        ]
      },
    ]
  });
  }
}
