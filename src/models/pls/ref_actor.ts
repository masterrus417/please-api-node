import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_attr_actor, ref_attr_actorId } from './ref_attr_actor';
import type { ref_attr_group_actor, ref_attr_group_actorId } from './ref_attr_group_actor';
import type { ref_stage_action_actor, ref_stage_action_actorId } from './ref_stage_action_actor';

export interface ref_actorAttributes {
  ractor_id: number;
  ractor_auth_group_name?: string;
  ractor_label?: string;
  ractor_name?: string;
}

export type ref_actorPk = "ractor_id";
export type ref_actorId = ref_actor[ref_actorPk];
export type ref_actorOptionalAttributes = "ractor_id" | "ractor_auth_group_name" | "ractor_label" | "ractor_name";
export type ref_actorCreationAttributes = Optional<ref_actorAttributes, ref_actorOptionalAttributes>;

export class ref_actor extends Model<ref_actorAttributes, ref_actorCreationAttributes> implements ref_actorAttributes {
  ractor_id!: number;
  ractor_auth_group_name?: string;
  ractor_label?: string;
  ractor_name?: string;

  // ref_actor hasMany ref_attr_actor via ractor_id
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
  // ref_actor hasMany ref_attr_group_actor via ractor_id
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
  // ref_actor hasMany ref_stage_action_actor via ractor_id
  ref_stage_action_actors!: ref_stage_action_actor[];
  getRef_stage_action_actors!: Sequelize.HasManyGetAssociationsMixin<ref_stage_action_actor>;
  setRef_stage_action_actors!: Sequelize.HasManySetAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  addRef_stage_action_actor!: Sequelize.HasManyAddAssociationMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  addRef_stage_action_actors!: Sequelize.HasManyAddAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  createRef_stage_action_actor!: Sequelize.HasManyCreateAssociationMixin<ref_stage_action_actor>;
  removeRef_stage_action_actor!: Sequelize.HasManyRemoveAssociationMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  removeRef_stage_action_actors!: Sequelize.HasManyRemoveAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  hasRef_stage_action_actor!: Sequelize.HasManyHasAssociationMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  hasRef_stage_action_actors!: Sequelize.HasManyHasAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
  countRef_stage_action_actors!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_actor {
    return ref_actor.init({
    ractor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ractor_auth_group_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "соответствие auth.auth_groups.name"
    },
    ractor_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ractor_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ref_actor',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_actor_idx",
        fields: [
          { name: "ractor_auth_group_name" },
        ]
      },
      {
        name: "ref_actor_pkey",
        unique: true,
        fields: [
          { name: "ractor_id" },
        ]
      },
    ]
  });
  }
}
