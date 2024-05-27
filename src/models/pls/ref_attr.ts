import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity_attr, entity_attrId } from './entity_attr';
import type { entity_attr_log, entity_attr_logId } from './entity_attr_log';
import type { ref_attr_actor, ref_attr_actorId } from './ref_attr_actor';
import type { ref_attr_dict, ref_attr_dictId } from './ref_attr_dict';
import type { ref_attr_group, ref_attr_groupId } from './ref_attr_group';
import type { ref_entity_filter_attr, ref_entity_filter_attrId } from './ref_entity_filter_attr';

export interface ref_attrAttributes {
  rattr_id: number;
  rattr_name?: string;
  rattr_type?: "string" | "date" | "number" | "dict" | "outer" | "longstring" | "bool" | "file";
  rattr_label?: string;
  rattr_required?: boolean;
  rattr_system?: boolean;
  rattr_group_id?: number;
  rattr_no?: number;
  rattr_view?: boolean;
  rattr_multilple?: boolean;
}

export type ref_attrPk = "rattr_id";
export type ref_attrId = ref_attr[ref_attrPk];
export type ref_attrOptionalAttributes = "rattr_id" | "rattr_name" | "rattr_type" | "rattr_label" | "rattr_required" | "rattr_system" | "rattr_group_id" | "rattr_no" | "rattr_view" | "rattr_multilple";
export type ref_attrCreationAttributes = Optional<ref_attrAttributes, ref_attrOptionalAttributes>;

export class ref_attr extends Model<ref_attrAttributes, ref_attrCreationAttributes> implements ref_attrAttributes {
  rattr_id!: number;
  rattr_name?: string;
  rattr_type?: "string" | "date" | "number" | "dict" | "outer" | "longstring" | "bool" | "file";
  rattr_label?: string;
  rattr_required?: boolean;
  rattr_system?: boolean;
  rattr_group_id?: number;
  rattr_no?: number;
  rattr_view?: boolean;
  rattr_multilple?: boolean;

  // ref_attr hasMany entity_attr via rattr_id
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
  // ref_attr hasMany entity_attr_log via rattr_id
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
  // ref_attr hasMany ref_attr_actor via rattr_id
  ref_attr_actors!: ref_attr_actor[];
  getRef_attr_actors!: Sequelize.HasManyGetAssociationsMixin<ref_attr_actor>;
  setRef_attr_actors!: Sequelize.HasManySetAssociationsMixin<ref_attr_actor, ref_attr_actorId>;
  addRef_attr_actor!: Sequelize.HasManyAddAssociationMixin<ref_attr_actor, ref_attr_actorId>;
  addRef_attr_actors!: Sequelize.HasManyAddAssociationsMixin<ref_attr_actor, ref_attr_actorId>;
  createRef_attr_actor!: Sequelize.HasManyCreateAssociationMixin<ref_attr_actor>;
  removeRef_attr_actor!: Sequelize.HasManyRemoveAssociationMixin<ref_attr_actor, ref_attr_actorId>;
  removeRef_attr_actors!: Sequelize.HasManyRemoveAssociationsMixin<ref_attr_actor, ref_attr_actorId>;
  hasRef_attr_actor!: Sequelize.HasManyHasAssociationMixin<ref_attr_actor, ref_attr_actorId>;
  hasRef_attr_actors!: Sequelize.HasManyHasAssociationsMixin<ref_attr_actor, ref_attr_actorId>;
  countRef_attr_actors!: Sequelize.HasManyCountAssociationsMixin;
  // ref_attr hasMany ref_attr_dict via rattr_id
  ref_attr_dicts!: ref_attr_dict[];
  getRef_attr_dicts!: Sequelize.HasManyGetAssociationsMixin<ref_attr_dict>;
  setRef_attr_dicts!: Sequelize.HasManySetAssociationsMixin<ref_attr_dict, ref_attr_dictId>;
  addRef_attr_dict!: Sequelize.HasManyAddAssociationMixin<ref_attr_dict, ref_attr_dictId>;
  addRef_attr_dicts!: Sequelize.HasManyAddAssociationsMixin<ref_attr_dict, ref_attr_dictId>;
  createRef_attr_dict!: Sequelize.HasManyCreateAssociationMixin<ref_attr_dict>;
  removeRef_attr_dict!: Sequelize.HasManyRemoveAssociationMixin<ref_attr_dict, ref_attr_dictId>;
  removeRef_attr_dicts!: Sequelize.HasManyRemoveAssociationsMixin<ref_attr_dict, ref_attr_dictId>;
  hasRef_attr_dict!: Sequelize.HasManyHasAssociationMixin<ref_attr_dict, ref_attr_dictId>;
  hasRef_attr_dicts!: Sequelize.HasManyHasAssociationsMixin<ref_attr_dict, ref_attr_dictId>;
  countRef_attr_dicts!: Sequelize.HasManyCountAssociationsMixin;
  // ref_attr hasMany ref_entity_filter_attr via rattr_id
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
  // ref_attr belongsTo ref_attr_group via rattr_group_id
  rattr_group!: ref_attr_group;
  getRattr_group!: Sequelize.BelongsToGetAssociationMixin<ref_attr_group>;
  setRattr_group!: Sequelize.BelongsToSetAssociationMixin<ref_attr_group, ref_attr_groupId>;
  createRattr_group!: Sequelize.BelongsToCreateAssociationMixin<ref_attr_group>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr {
    return ref_attr.init({
    rattr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rattr_type: {
      type: DataTypes.ENUM("string","date","number","dict","outer","longstring","bool","file"),
      allowNull: true
    },
    rattr_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "отображаемое имя"
    },
    rattr_required: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "обязательный"
    },
    rattr_system: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "служебный"
    },
    rattr_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "группа атрибутов",
      references: {
        model: 'ref_attr_group',
        key: 'rattr_group_id'
      }
    },
    rattr_no: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "порядковый номер"
    },
    rattr_view: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "это атрибут используется для отображения и идентификации сущности"
    },
    rattr_multilple: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "сущность может иметь несколько значений (копий) этого атрибута. Например, у укандидата несколько образований."
    }
  }, {
    sequelize,
    tableName: 'ref_attr',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_attr_pkey",
        unique: true,
        fields: [
          { name: "rattr_id" },
        ]
      },
    ]
  });
  }
}
