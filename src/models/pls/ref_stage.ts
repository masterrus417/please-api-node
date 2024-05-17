import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entity_stage, entity_stageId } from './entity_stage';
import type { ref_attr_actor, ref_attr_actorId } from './ref_attr_actor';
import type { ref_entity_type, ref_entity_typeId } from './ref_entity_type';
import type { ref_route, ref_routeId } from './ref_route';
import type { ref_stage_action, ref_stage_actionId } from './ref_stage_action';
import type { ref_stage_action_stage, ref_stage_action_stageId } from './ref_stage_action_stage';

export interface ref_stageAttributes {
  rstage_id: number;
  rstage_name?: string;
  rstage_label?: string;
  rstage_wait_others?: boolean;
  rroute_id: number;
  rentity_type_id?: number;
}

export type ref_stagePk = "rstage_id";
export type ref_stageId = ref_stage[ref_stagePk];
export type ref_stageOptionalAttributes = "rstage_id" | "rstage_name" | "rstage_label" | "rstage_wait_others" | "rentity_type_id";
export type ref_stageCreationAttributes = Optional<ref_stageAttributes, ref_stageOptionalAttributes>;

export class ref_stage extends Model<ref_stageAttributes, ref_stageCreationAttributes> implements ref_stageAttributes {
  rstage_id!: number;
  rstage_name?: string;
  rstage_label?: string;
  rstage_wait_others?: boolean;
  rroute_id!: number;
  rentity_type_id?: number;

  // ref_stage belongsTo ref_entity_type via rentity_type_id
  rentity_type!: ref_entity_type;
  getRentity_type!: Sequelize.BelongsToGetAssociationMixin<ref_entity_type>;
  setRentity_type!: Sequelize.BelongsToSetAssociationMixin<ref_entity_type, ref_entity_typeId>;
  createRentity_type!: Sequelize.BelongsToCreateAssociationMixin<ref_entity_type>;
  // ref_stage belongsTo ref_route via rroute_id
  rroute!: ref_route;
  getRroute!: Sequelize.BelongsToGetAssociationMixin<ref_route>;
  setRroute!: Sequelize.BelongsToSetAssociationMixin<ref_route, ref_routeId>;
  createRroute!: Sequelize.BelongsToCreateAssociationMixin<ref_route>;
  // ref_stage hasMany entity_stage via rstage_id
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
  // ref_stage hasMany ref_attr_actor via rstage_id
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
  // ref_stage hasMany ref_route via rstage_id_start
  ref_routes!: ref_route[];
  getRef_routes!: Sequelize.HasManyGetAssociationsMixin<ref_route>;
  setRef_routes!: Sequelize.HasManySetAssociationsMixin<ref_route, ref_routeId>;
  addRef_route!: Sequelize.HasManyAddAssociationMixin<ref_route, ref_routeId>;
  addRef_routes!: Sequelize.HasManyAddAssociationsMixin<ref_route, ref_routeId>;
  createRef_route!: Sequelize.HasManyCreateAssociationMixin<ref_route>;
  removeRef_route!: Sequelize.HasManyRemoveAssociationMixin<ref_route, ref_routeId>;
  removeRef_routes!: Sequelize.HasManyRemoveAssociationsMixin<ref_route, ref_routeId>;
  hasRef_route!: Sequelize.HasManyHasAssociationMixin<ref_route, ref_routeId>;
  hasRef_routes!: Sequelize.HasManyHasAssociationsMixin<ref_route, ref_routeId>;
  countRef_routes!: Sequelize.HasManyCountAssociationsMixin;
  // ref_stage hasMany ref_stage_action via rstage_id
  ref_stage_actions!: ref_stage_action[];
  getRef_stage_actions!: Sequelize.HasManyGetAssociationsMixin<ref_stage_action>;
  setRef_stage_actions!: Sequelize.HasManySetAssociationsMixin<ref_stage_action, ref_stage_actionId>;
  addRef_stage_action!: Sequelize.HasManyAddAssociationMixin<ref_stage_action, ref_stage_actionId>;
  addRef_stage_actions!: Sequelize.HasManyAddAssociationsMixin<ref_stage_action, ref_stage_actionId>;
  createRef_stage_action!: Sequelize.HasManyCreateAssociationMixin<ref_stage_action>;
  removeRef_stage_action!: Sequelize.HasManyRemoveAssociationMixin<ref_stage_action, ref_stage_actionId>;
  removeRef_stage_actions!: Sequelize.HasManyRemoveAssociationsMixin<ref_stage_action, ref_stage_actionId>;
  hasRef_stage_action!: Sequelize.HasManyHasAssociationMixin<ref_stage_action, ref_stage_actionId>;
  hasRef_stage_actions!: Sequelize.HasManyHasAssociationsMixin<ref_stage_action, ref_stage_actionId>;
  countRef_stage_actions!: Sequelize.HasManyCountAssociationsMixin;
  // ref_stage hasMany ref_stage_action_stage via rstage_id
  ref_stage_action_stages!: ref_stage_action_stage[];
  getRef_stage_action_stages!: Sequelize.HasManyGetAssociationsMixin<ref_stage_action_stage>;
  setRef_stage_action_stages!: Sequelize.HasManySetAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  addRef_stage_action_stage!: Sequelize.HasManyAddAssociationMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  addRef_stage_action_stages!: Sequelize.HasManyAddAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  createRef_stage_action_stage!: Sequelize.HasManyCreateAssociationMixin<ref_stage_action_stage>;
  removeRef_stage_action_stage!: Sequelize.HasManyRemoveAssociationMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  removeRef_stage_action_stages!: Sequelize.HasManyRemoveAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  hasRef_stage_action_stage!: Sequelize.HasManyHasAssociationMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  hasRef_stage_action_stages!: Sequelize.HasManyHasAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
  countRef_stage_action_stages!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_stage {
    return ref_stage.init({
    rstage_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rstage_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rstage_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rstage_wait_others: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "когда этап переходит на этот, если True, то всегда проверяет, есть ли потенциальные другие этапы, которые в этот переходят. Если такие есть - ждет. Если таких нет (или они закончились и перешли в этот), то включает этот этап."
    },
    rroute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "маршрут, который объединяет все этапы",
      references: {
        model: 'ref_route',
        key: 'rroute_id'
      }
    },
    rentity_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "тип сущности, которая должна создаваться при этом этапе",
      references: {
        model: 'ref_entity_type',
        key: 'rentity_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_stage',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_stage_idx",
        fields: [
          { name: "rroute_id" },
        ]
      },
      {
        name: "ref_stage_pkey",
        unique: true,
        fields: [
          { name: "rstage_id" },
        ]
      },
    ]
  });
  }
}
