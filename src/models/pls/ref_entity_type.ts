import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_attr_group, ref_attr_groupId } from './ref_attr_group';
import type { ref_entity_filter, ref_entity_filterId } from './ref_entity_filter';
import type { ref_route, ref_routeId } from './ref_route';
import type { ref_stage, ref_stageId } from './ref_stage';

export interface ref_entity_typeAttributes {
  rentity_type_id: number;
  rentity_type_name?: string;
  rentity_type_label?: string;
  rroute_id?: number;
}

export type ref_entity_typePk = "rentity_type_id";
export type ref_entity_typeId = ref_entity_type[ref_entity_typePk];
export type ref_entity_typeOptionalAttributes = "rentity_type_id" | "rentity_type_name" | "rentity_type_label" | "rroute_id";
export type ref_entity_typeCreationAttributes = Optional<ref_entity_typeAttributes, ref_entity_typeOptionalAttributes>;

export class ref_entity_type extends Model<ref_entity_typeAttributes, ref_entity_typeCreationAttributes> implements ref_entity_typeAttributes {
  rentity_type_id!: number;
  rentity_type_name?: string;
  rentity_type_label?: string;
  rroute_id?: number;

  // ref_entity_type hasMany entity via rentity_type_id
  entities!: entity[];
  getEntities!: Sequelize.HasManyGetAssociationsMixin<entity>;
  setEntities!: Sequelize.HasManySetAssociationsMixin<entity, entityId>;
  addEntity!: Sequelize.HasManyAddAssociationMixin<entity, entityId>;
  addEntities!: Sequelize.HasManyAddAssociationsMixin<entity, entityId>;
  createEntity!: Sequelize.HasManyCreateAssociationMixin<entity>;
  removeEntity!: Sequelize.HasManyRemoveAssociationMixin<entity, entityId>;
  removeEntities!: Sequelize.HasManyRemoveAssociationsMixin<entity, entityId>;
  hasEntity!: Sequelize.HasManyHasAssociationMixin<entity, entityId>;
  hasEntities!: Sequelize.HasManyHasAssociationsMixin<entity, entityId>;
  countEntities!: Sequelize.HasManyCountAssociationsMixin;
  // ref_entity_type hasMany ref_attr_group via rentity_type_id
  ref_attr_groups!: ref_attr_group[];
  getRef_attr_groups!: Sequelize.HasManyGetAssociationsMixin<ref_attr_group>;
  setRef_attr_groups!: Sequelize.HasManySetAssociationsMixin<ref_attr_group, ref_attr_groupId>;
  addRef_attr_group!: Sequelize.HasManyAddAssociationMixin<ref_attr_group, ref_attr_groupId>;
  addRef_attr_groups!: Sequelize.HasManyAddAssociationsMixin<ref_attr_group, ref_attr_groupId>;
  createRef_attr_group!: Sequelize.HasManyCreateAssociationMixin<ref_attr_group>;
  removeRef_attr_group!: Sequelize.HasManyRemoveAssociationMixin<ref_attr_group, ref_attr_groupId>;
  removeRef_attr_groups!: Sequelize.HasManyRemoveAssociationsMixin<ref_attr_group, ref_attr_groupId>;
  hasRef_attr_group!: Sequelize.HasManyHasAssociationMixin<ref_attr_group, ref_attr_groupId>;
  hasRef_attr_groups!: Sequelize.HasManyHasAssociationsMixin<ref_attr_group, ref_attr_groupId>;
  countRef_attr_groups!: Sequelize.HasManyCountAssociationsMixin;
  // ref_entity_type hasMany ref_entity_filter via rentity_type_id
  ref_entity_filters!: ref_entity_filter[];
  getRef_entity_filters!: Sequelize.HasManyGetAssociationsMixin<ref_entity_filter>;
  setRef_entity_filters!: Sequelize.HasManySetAssociationsMixin<ref_entity_filter, ref_entity_filterId>;
  addRef_entity_filter!: Sequelize.HasManyAddAssociationMixin<ref_entity_filter, ref_entity_filterId>;
  addRef_entity_filters!: Sequelize.HasManyAddAssociationsMixin<ref_entity_filter, ref_entity_filterId>;
  createRef_entity_filter!: Sequelize.HasManyCreateAssociationMixin<ref_entity_filter>;
  removeRef_entity_filter!: Sequelize.HasManyRemoveAssociationMixin<ref_entity_filter, ref_entity_filterId>;
  removeRef_entity_filters!: Sequelize.HasManyRemoveAssociationsMixin<ref_entity_filter, ref_entity_filterId>;
  hasRef_entity_filter!: Sequelize.HasManyHasAssociationMixin<ref_entity_filter, ref_entity_filterId>;
  hasRef_entity_filters!: Sequelize.HasManyHasAssociationsMixin<ref_entity_filter, ref_entity_filterId>;
  countRef_entity_filters!: Sequelize.HasManyCountAssociationsMixin;
  // ref_entity_type hasMany ref_stage via rentity_type_id
  ref_stages!: ref_stage[];
  getRef_stages!: Sequelize.HasManyGetAssociationsMixin<ref_stage>;
  setRef_stages!: Sequelize.HasManySetAssociationsMixin<ref_stage, ref_stageId>;
  addRef_stage!: Sequelize.HasManyAddAssociationMixin<ref_stage, ref_stageId>;
  addRef_stages!: Sequelize.HasManyAddAssociationsMixin<ref_stage, ref_stageId>;
  createRef_stage!: Sequelize.HasManyCreateAssociationMixin<ref_stage>;
  removeRef_stage!: Sequelize.HasManyRemoveAssociationMixin<ref_stage, ref_stageId>;
  removeRef_stages!: Sequelize.HasManyRemoveAssociationsMixin<ref_stage, ref_stageId>;
  hasRef_stage!: Sequelize.HasManyHasAssociationMixin<ref_stage, ref_stageId>;
  hasRef_stages!: Sequelize.HasManyHasAssociationsMixin<ref_stage, ref_stageId>;
  countRef_stages!: Sequelize.HasManyCountAssociationsMixin;
  // ref_entity_type belongsTo ref_route via rroute_id
  rroute!: ref_route;
  getRroute!: Sequelize.BelongsToGetAssociationMixin<ref_route>;
  setRroute!: Sequelize.BelongsToSetAssociationMixin<ref_route, ref_routeId>;
  createRroute!: Sequelize.BelongsToCreateAssociationMixin<ref_route>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_entity_type {
    return ref_entity_type.init({
    rentity_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rentity_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rentity_type_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rroute_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "указатель маршрута, там будет с какого этапа начинается",
      references: {
        model: 'ref_route',
        key: 'rroute_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_entity_type',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "entity_types_pkey",
        unique: true,
        fields: [
          { name: "rentity_type_id" },
        ]
      },
      {
        name: "ref_entity_type_idx",
        fields: [
          { name: "rroute_id" },
        ]
      },
    ]
  });
  }
}
