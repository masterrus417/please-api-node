import type { Sequelize } from "sequelize";
import { entity as _entity } from "./entity";
import type { entityAttributes, entityCreationAttributes } from "./entity";
import { entity_attr as _entity_attr } from "./entity_attr";
import type { entity_attrAttributes, entity_attrCreationAttributes } from "./entity_attr";
import { entity_attr_log as _entity_attr_log } from "./entity_attr_log";
import type { entity_attr_logAttributes, entity_attr_logCreationAttributes } from "./entity_attr_log";
import { entity_entity as _entity_entity } from "./entity_entity";
import type { entity_entityAttributes, entity_entityCreationAttributes } from "./entity_entity";
import { entity_stage as _entity_stage } from "./entity_stage";
import type { entity_stageAttributes, entity_stageCreationAttributes } from "./entity_stage";
import { ref_action as _ref_action } from "./ref_action";
import type { ref_actionAttributes, ref_actionCreationAttributes } from "./ref_action";
import { ref_actor as _ref_actor } from "./ref_actor";
import type { ref_actorAttributes, ref_actorCreationAttributes } from "./ref_actor";
import { ref_attr as _ref_attr } from "./ref_attr";
import type { ref_attrAttributes, ref_attrCreationAttributes } from "./ref_attr";
import { ref_attr_actor as _ref_attr_actor } from "./ref_attr_actor";
import type { ref_attr_actorAttributes, ref_attr_actorCreationAttributes } from "./ref_attr_actor";
import { ref_attr_dict as _ref_attr_dict } from "./ref_attr_dict";
import type { ref_attr_dictAttributes, ref_attr_dictCreationAttributes } from "./ref_attr_dict";
import { ref_attr_group as _ref_attr_group } from "./ref_attr_group";
import type { ref_attr_groupAttributes, ref_attr_groupCreationAttributes } from "./ref_attr_group";
import { ref_attr_group_actor as _ref_attr_group_actor } from "./ref_attr_group_actor";
import type { ref_attr_group_actorAttributes, ref_attr_group_actorCreationAttributes } from "./ref_attr_group_actor";
import { ref_attr_outer as _ref_attr_outer } from "./ref_attr_outer";
import type { ref_attr_outerAttributes, ref_attr_outerCreationAttributes } from "./ref_attr_outer";
import { ref_entity_filter as _ref_entity_filter } from "./ref_entity_filter";
import type { ref_entity_filterAttributes, ref_entity_filterCreationAttributes } from "./ref_entity_filter";
import { ref_entity_filter_attr as _ref_entity_filter_attr } from "./ref_entity_filter_attr";
import type { ref_entity_filter_attrAttributes, ref_entity_filter_attrCreationAttributes } from "./ref_entity_filter_attr";
import { ref_entity_type as _ref_entity_type } from "./ref_entity_type";
import type { ref_entity_typeAttributes, ref_entity_typeCreationAttributes } from "./ref_entity_type";
import { ref_route as _ref_route } from "./ref_route";
import type { ref_routeAttributes, ref_routeCreationAttributes } from "./ref_route";
import { ref_stage as _ref_stage } from "./ref_stage";
import type { ref_stageAttributes, ref_stageCreationAttributes } from "./ref_stage";
import { ref_stage_action as _ref_stage_action } from "./ref_stage_action";
import type { ref_stage_actionAttributes, ref_stage_actionCreationAttributes } from "./ref_stage_action";
import { ref_stage_action_actor as _ref_stage_action_actor } from "./ref_stage_action_actor";
import type { ref_stage_action_actorAttributes, ref_stage_action_actorCreationAttributes } from "./ref_stage_action_actor";
import { ref_stage_action_stage as _ref_stage_action_stage } from "./ref_stage_action_stage";
import type { ref_stage_action_stageAttributes, ref_stage_action_stageCreationAttributes } from "./ref_stage_action_stage";

export {
  _entity as entity,
  _entity_attr as entity_attr,
  _entity_attr_log as entity_attr_log,
  _entity_entity as entity_entity,
  _entity_stage as entity_stage,
  _ref_action as ref_action,
  _ref_actor as ref_actor,
  _ref_attr as ref_attr,
  _ref_attr_actor as ref_attr_actor,
  _ref_attr_dict as ref_attr_dict,
  _ref_attr_group as ref_attr_group,
  _ref_attr_group_actor as ref_attr_group_actor,
  _ref_attr_outer as ref_attr_outer,
  _ref_entity_filter as ref_entity_filter,
  _ref_entity_filter_attr as ref_entity_filter_attr,
  _ref_entity_type as ref_entity_type,
  _ref_route as ref_route,
  _ref_stage as ref_stage,
  _ref_stage_action as ref_stage_action,
  _ref_stage_action_actor as ref_stage_action_actor,
  _ref_stage_action_stage as ref_stage_action_stage,
};

export type {
  entityAttributes,
  entityCreationAttributes,
  entity_attrAttributes,
  entity_attrCreationAttributes,
  entity_attr_logAttributes,
  entity_attr_logCreationAttributes,
  entity_entityAttributes,
  entity_entityCreationAttributes,
  entity_stageAttributes,
  entity_stageCreationAttributes,
  ref_actionAttributes,
  ref_actionCreationAttributes,
  ref_actorAttributes,
  ref_actorCreationAttributes,
  ref_attrAttributes,
  ref_attrCreationAttributes,
  ref_attr_actorAttributes,
  ref_attr_actorCreationAttributes,
  ref_attr_dictAttributes,
  ref_attr_dictCreationAttributes,
  ref_attr_groupAttributes,
  ref_attr_groupCreationAttributes,
  ref_attr_group_actorAttributes,
  ref_attr_group_actorCreationAttributes,
  ref_attr_outerAttributes,
  ref_attr_outerCreationAttributes,
  ref_entity_filterAttributes,
  ref_entity_filterCreationAttributes,
  ref_entity_filter_attrAttributes,
  ref_entity_filter_attrCreationAttributes,
  ref_entity_typeAttributes,
  ref_entity_typeCreationAttributes,
  ref_routeAttributes,
  ref_routeCreationAttributes,
  ref_stageAttributes,
  ref_stageCreationAttributes,
  ref_stage_actionAttributes,
  ref_stage_actionCreationAttributes,
  ref_stage_action_actorAttributes,
  ref_stage_action_actorCreationAttributes,
  ref_stage_action_stageAttributes,
  ref_stage_action_stageCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const entity = _entity.initModel(sequelize);
  const entity_attr = _entity_attr.initModel(sequelize);
  const entity_attr_log = _entity_attr_log.initModel(sequelize);
  const entity_entity = _entity_entity.initModel(sequelize);
  const entity_stage = _entity_stage.initModel(sequelize);
  const ref_action = _ref_action.initModel(sequelize);
  const ref_actor = _ref_actor.initModel(sequelize);
  const ref_attr = _ref_attr.initModel(sequelize);
  const ref_attr_actor = _ref_attr_actor.initModel(sequelize);
  const ref_attr_dict = _ref_attr_dict.initModel(sequelize);
  const ref_attr_group = _ref_attr_group.initModel(sequelize);
  const ref_attr_group_actor = _ref_attr_group_actor.initModel(sequelize);
  const ref_attr_outer = _ref_attr_outer.initModel(sequelize);
  const ref_entity_filter = _ref_entity_filter.initModel(sequelize);
  const ref_entity_filter_attr = _ref_entity_filter_attr.initModel(sequelize);
  const ref_entity_type = _ref_entity_type.initModel(sequelize);
  const ref_route = _ref_route.initModel(sequelize);
  const ref_stage = _ref_stage.initModel(sequelize);
  const ref_stage_action = _ref_stage_action.initModel(sequelize);
  const ref_stage_action_actor = _ref_stage_action_actor.initModel(sequelize);
  const ref_stage_action_stage = _ref_stage_action_stage.initModel(sequelize);

  entity_attr.belongsTo(entity, { as: "entity", foreignKey: "entity_id"});
  entity.hasMany(entity_attr, { as: "entity_attrs", foreignKey: "entity_id"});
  entity_attr_log.belongsTo(entity, { as: "entity", foreignKey: "entity_id"});
  entity.hasMany(entity_attr_log, { as: "entity_attr_logs", foreignKey: "entity_id"});
  entity_entity.belongsTo(entity, { as: "entity", foreignKey: "entity_id"});
  entity.hasMany(entity_entity, { as: "entity_entities", foreignKey: "entity_id"});
  entity_entity.belongsTo(entity, { as: "entity_id_link_entity", foreignKey: "entity_id_link"});
  entity.hasMany(entity_entity, { as: "entity_id_link_entity_entities", foreignKey: "entity_id_link"});
  entity_stage.belongsTo(entity, { as: "entity", foreignKey: "entity_id"});
  entity.hasMany(entity_stage, { as: "entity_stages", foreignKey: "entity_id"});
  entity_stage.belongsTo(ref_action, { as: "raction", foreignKey: "raction_id"});
  ref_action.hasMany(entity_stage, { as: "entity_stages", foreignKey: "raction_id"});
  ref_stage_action.belongsTo(ref_action, { as: "raction", foreignKey: "raction_id"});
  ref_action.hasMany(ref_stage_action, { as: "ref_stage_actions", foreignKey: "raction_id"});
  ref_attr_actor.belongsTo(ref_actor, { as: "ractor", foreignKey: "ractor_id"});
  ref_actor.hasMany(ref_attr_actor, { as: "ref_attr_actors", foreignKey: "ractor_id"});
  ref_attr_group_actor.belongsTo(ref_actor, { as: "ractor", foreignKey: "ractor_id"});
  ref_actor.hasMany(ref_attr_group_actor, { as: "ref_attr_group_actors", foreignKey: "ractor_id"});
  ref_stage_action_actor.belongsTo(ref_actor, { as: "ractor", foreignKey: "ractor_id"});
  ref_actor.hasMany(ref_stage_action_actor, { as: "ref_stage_action_actors", foreignKey: "ractor_id"});
  entity_attr.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id"});
  ref_attr.hasMany(entity_attr, { as: "entity_attrs", foreignKey: "rattr_id"});
  entity_attr_log.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id"});
  ref_attr.hasMany(entity_attr_log, { as: "entity_attr_logs", foreignKey: "rattr_id"});
  ref_attr_actor.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id"});
  ref_attr.hasMany(ref_attr_actor, { as: "ref_attr_actors", foreignKey: "rattr_id"});
  ref_entity_filter_attr.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id"});
  ref_attr.hasMany(ref_entity_filter_attr, { as: "ref_entity_filter_attrs", foreignKey: "rattr_id"});
  ref_attr.belongsTo(ref_attr_group, { as: "rattr_group", foreignKey: "rattr_group_id"});
  ref_attr_group.hasMany(ref_attr, { as: "ref_attrs", foreignKey: "rattr_group_id"});
  ref_attr_group_actor.belongsTo(ref_attr_group, { as: "rattr_group", foreignKey: "rattr_group_id"});
  ref_attr_group.hasMany(ref_attr_group_actor, { as: "ref_attr_group_actors", foreignKey: "rattr_group_id"});
  ref_entity_filter_attr.belongsTo(ref_entity_filter, { as: "rentity_filter", foreignKey: "rentity_filter_id"});
  ref_entity_filter.hasMany(ref_entity_filter_attr, { as: "ref_entity_filter_attrs", foreignKey: "rentity_filter_id"});
  entity.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id"});
  ref_entity_type.hasMany(entity, { as: "entities", foreignKey: "rentity_type_id"});
  ref_attr_group.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id"});
  ref_entity_type.hasMany(ref_attr_group, { as: "ref_attr_groups", foreignKey: "rentity_type_id"});
  ref_entity_filter.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id"});
  ref_entity_type.hasMany(ref_entity_filter, { as: "ref_entity_filters", foreignKey: "rentity_type_id"});
  ref_stage.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id"});
  ref_entity_type.hasMany(ref_stage, { as: "ref_stages", foreignKey: "rentity_type_id"});
  ref_entity_type.belongsTo(ref_route, { as: "rroute", foreignKey: "rroute_id"});
  ref_route.hasMany(ref_entity_type, { as: "ref_entity_types", foreignKey: "rroute_id"});
  ref_stage.belongsTo(ref_route, { as: "rroute", foreignKey: "rroute_id"});
  ref_route.hasMany(ref_stage, { as: "ref_stages", foreignKey: "rroute_id"});
  entity_stage.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id"});
  ref_stage.hasMany(entity_stage, { as: "entity_stages", foreignKey: "rstage_id"});
  ref_attr_actor.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id"});
  ref_stage.hasMany(ref_attr_actor, { as: "ref_attr_actors", foreignKey: "rstage_id"});
  ref_route.belongsTo(ref_stage, { as: "rstage_id_start_ref_stage", foreignKey: "rstage_id_start"});
  ref_stage.hasMany(ref_route, { as: "ref_routes", foreignKey: "rstage_id_start"});
  ref_stage_action.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id"});
  ref_stage.hasMany(ref_stage_action, { as: "ref_stage_actions", foreignKey: "rstage_id"});
  ref_stage_action_stage.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id"});
  ref_stage.hasMany(ref_stage_action_stage, { as: "ref_stage_action_stages", foreignKey: "rstage_id"});
  ref_stage_action_actor.belongsTo(ref_stage_action, { as: "rstage_action", foreignKey: "rstage_action_id"});
  ref_stage_action.hasMany(ref_stage_action_actor, { as: "ref_stage_action_actors", foreignKey: "rstage_action_id"});
  ref_stage_action_stage.belongsTo(ref_stage_action, { as: "rstage_action", foreignKey: "rstage_action_id"});
  ref_stage_action.hasMany(ref_stage_action_stage, { as: "ref_stage_action_stages", foreignKey: "rstage_action_id"});

  return {
    entity: entity,
    entity_attr: entity_attr,
    entity_attr_log: entity_attr_log,
    entity_entity: entity_entity,
    entity_stage: entity_stage,
    ref_action: ref_action,
    ref_actor: ref_actor,
    ref_attr: ref_attr,
    ref_attr_actor: ref_attr_actor,
    ref_attr_dict: ref_attr_dict,
    ref_attr_group: ref_attr_group,
    ref_attr_group_actor: ref_attr_group_actor,
    ref_attr_outer: ref_attr_outer,
    ref_entity_filter: ref_entity_filter,
    ref_entity_filter_attr: ref_entity_filter_attr,
    ref_entity_type: ref_entity_type,
    ref_route: ref_route,
    ref_stage: ref_stage,
    ref_stage_action: ref_stage_action,
    ref_stage_action_actor: ref_stage_action_actor,
    ref_stage_action_stage: ref_stage_action_stage,
  };
}
