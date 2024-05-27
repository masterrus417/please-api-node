"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.ref_stage_action_stage = exports.ref_stage_action_actor = exports.ref_stage_action = exports.ref_stage = exports.ref_route = exports.ref_entity_type = exports.ref_entity_filter_attr = exports.ref_entity_filter = exports.ref_attr_outer = exports.ref_attr_group_actor = exports.ref_attr_group = exports.ref_attr_dict = exports.ref_attr_actor = exports.ref_attr = exports.ref_actor = exports.ref_action = exports.entity_stage = exports.entity_entity = exports.entity_attr_log = exports.entity_attr = exports.entity = void 0;
const entity_1 = require("./entity");
Object.defineProperty(exports, "entity", { enumerable: true, get: function () { return entity_1.entity; } });
const entity_attr_1 = require("./entity_attr");
Object.defineProperty(exports, "entity_attr", { enumerable: true, get: function () { return entity_attr_1.entity_attr; } });
const entity_attr_log_1 = require("./entity_attr_log");
Object.defineProperty(exports, "entity_attr_log", { enumerable: true, get: function () { return entity_attr_log_1.entity_attr_log; } });
const entity_entity_1 = require("./entity_entity");
Object.defineProperty(exports, "entity_entity", { enumerable: true, get: function () { return entity_entity_1.entity_entity; } });
const entity_stage_1 = require("./entity_stage");
Object.defineProperty(exports, "entity_stage", { enumerable: true, get: function () { return entity_stage_1.entity_stage; } });
const ref_action_1 = require("./ref_action");
Object.defineProperty(exports, "ref_action", { enumerable: true, get: function () { return ref_action_1.ref_action; } });
const ref_actor_1 = require("./ref_actor");
Object.defineProperty(exports, "ref_actor", { enumerable: true, get: function () { return ref_actor_1.ref_actor; } });
const ref_attr_1 = require("./ref_attr");
Object.defineProperty(exports, "ref_attr", { enumerable: true, get: function () { return ref_attr_1.ref_attr; } });
const ref_attr_actor_1 = require("./ref_attr_actor");
Object.defineProperty(exports, "ref_attr_actor", { enumerable: true, get: function () { return ref_attr_actor_1.ref_attr_actor; } });
const ref_attr_dict_1 = require("./ref_attr_dict");
Object.defineProperty(exports, "ref_attr_dict", { enumerable: true, get: function () { return ref_attr_dict_1.ref_attr_dict; } });
const ref_attr_group_1 = require("./ref_attr_group");
Object.defineProperty(exports, "ref_attr_group", { enumerable: true, get: function () { return ref_attr_group_1.ref_attr_group; } });
const ref_attr_group_actor_1 = require("./ref_attr_group_actor");
Object.defineProperty(exports, "ref_attr_group_actor", { enumerable: true, get: function () { return ref_attr_group_actor_1.ref_attr_group_actor; } });
const ref_attr_outer_1 = require("./ref_attr_outer");
Object.defineProperty(exports, "ref_attr_outer", { enumerable: true, get: function () { return ref_attr_outer_1.ref_attr_outer; } });
const ref_entity_filter_1 = require("./ref_entity_filter");
Object.defineProperty(exports, "ref_entity_filter", { enumerable: true, get: function () { return ref_entity_filter_1.ref_entity_filter; } });
const ref_entity_filter_attr_1 = require("./ref_entity_filter_attr");
Object.defineProperty(exports, "ref_entity_filter_attr", { enumerable: true, get: function () { return ref_entity_filter_attr_1.ref_entity_filter_attr; } });
const ref_entity_type_1 = require("./ref_entity_type");
Object.defineProperty(exports, "ref_entity_type", { enumerable: true, get: function () { return ref_entity_type_1.ref_entity_type; } });
const ref_route_1 = require("./ref_route");
Object.defineProperty(exports, "ref_route", { enumerable: true, get: function () { return ref_route_1.ref_route; } });
const ref_stage_1 = require("./ref_stage");
Object.defineProperty(exports, "ref_stage", { enumerable: true, get: function () { return ref_stage_1.ref_stage; } });
const ref_stage_action_1 = require("./ref_stage_action");
Object.defineProperty(exports, "ref_stage_action", { enumerable: true, get: function () { return ref_stage_action_1.ref_stage_action; } });
const ref_stage_action_actor_1 = require("./ref_stage_action_actor");
Object.defineProperty(exports, "ref_stage_action_actor", { enumerable: true, get: function () { return ref_stage_action_actor_1.ref_stage_action_actor; } });
const ref_stage_action_stage_1 = require("./ref_stage_action_stage");
Object.defineProperty(exports, "ref_stage_action_stage", { enumerable: true, get: function () { return ref_stage_action_stage_1.ref_stage_action_stage; } });
function initModels(sequelize) {
    const entity = entity_1.entity.initModel(sequelize);
    const entity_attr = entity_attr_1.entity_attr.initModel(sequelize);
    const entity_attr_log = entity_attr_log_1.entity_attr_log.initModel(sequelize);
    const entity_entity = entity_entity_1.entity_entity.initModel(sequelize);
    const entity_stage = entity_stage_1.entity_stage.initModel(sequelize);
    const ref_action = ref_action_1.ref_action.initModel(sequelize);
    const ref_actor = ref_actor_1.ref_actor.initModel(sequelize);
    const ref_attr = ref_attr_1.ref_attr.initModel(sequelize);
    const ref_attr_actor = ref_attr_actor_1.ref_attr_actor.initModel(sequelize);
    const ref_attr_dict = ref_attr_dict_1.ref_attr_dict.initModel(sequelize);
    const ref_attr_group = ref_attr_group_1.ref_attr_group.initModel(sequelize);
    const ref_attr_group_actor = ref_attr_group_actor_1.ref_attr_group_actor.initModel(sequelize);
    const ref_attr_outer = ref_attr_outer_1.ref_attr_outer.initModel(sequelize);
    const ref_entity_filter = ref_entity_filter_1.ref_entity_filter.initModel(sequelize);
    const ref_entity_filter_attr = ref_entity_filter_attr_1.ref_entity_filter_attr.initModel(sequelize);
    const ref_entity_type = ref_entity_type_1.ref_entity_type.initModel(sequelize);
    const ref_route = ref_route_1.ref_route.initModel(sequelize);
    const ref_stage = ref_stage_1.ref_stage.initModel(sequelize);
    const ref_stage_action = ref_stage_action_1.ref_stage_action.initModel(sequelize);
    const ref_stage_action_actor = ref_stage_action_actor_1.ref_stage_action_actor.initModel(sequelize);
    const ref_stage_action_stage = ref_stage_action_stage_1.ref_stage_action_stage.initModel(sequelize);
    entity_attr.belongsTo(entity, { as: "entity", foreignKey: "entity_id" });
    entity.hasMany(entity_attr, { as: "entity_attrs", foreignKey: "entity_id" });
    entity_attr_log.belongsTo(entity, { as: "entity", foreignKey: "entity_id" });
    entity.hasMany(entity_attr_log, { as: "entity_attr_logs", foreignKey: "entity_id" });
    entity_entity.belongsTo(entity, { as: "entity", foreignKey: "entity_id" });
    entity.hasMany(entity_entity, { as: "entity_entities", foreignKey: "entity_id" });
    entity_entity.belongsTo(entity, { as: "entity_id_link_entity", foreignKey: "entity_id_link" });
    entity.hasMany(entity_entity, { as: "entity_id_link_entity_entities", foreignKey: "entity_id_link" });
    entity_stage.belongsTo(entity, { as: "entity", foreignKey: "entity_id" });
    entity.hasMany(entity_stage, { as: "entity_stages", foreignKey: "entity_id" });
    entity_stage.belongsTo(ref_action, { as: "raction", foreignKey: "raction_id" });
    ref_action.hasMany(entity_stage, { as: "entity_stages", foreignKey: "raction_id" });
    ref_stage_action.belongsTo(ref_action, { as: "raction", foreignKey: "raction_id" });
    ref_action.hasMany(ref_stage_action, { as: "ref_stage_actions", foreignKey: "raction_id" });
    ref_attr_actor.belongsTo(ref_actor, { as: "ractor", foreignKey: "ractor_id" });
    ref_actor.hasMany(ref_attr_actor, { as: "ref_attr_actors", foreignKey: "ractor_id" });
    ref_attr_group_actor.belongsTo(ref_actor, { as: "ractor", foreignKey: "ractor_id" });
    ref_actor.hasMany(ref_attr_group_actor, { as: "ref_attr_group_actors", foreignKey: "ractor_id" });
    ref_stage_action_actor.belongsTo(ref_actor, { as: "ractor", foreignKey: "ractor_id" });
    ref_actor.hasMany(ref_stage_action_actor, { as: "ref_stage_action_actors", foreignKey: "ractor_id" });
    entity_attr.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id" });
    ref_attr.hasMany(entity_attr, { as: "entity_attrs", foreignKey: "rattr_id" });
    entity_attr_log.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id" });
    ref_attr.hasMany(entity_attr_log, { as: "entity_attr_logs", foreignKey: "rattr_id" });
    ref_attr_actor.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id" });
    ref_attr.hasMany(ref_attr_actor, { as: "ref_attr_actors", foreignKey: "rattr_id" });
    ref_entity_filter_attr.belongsTo(ref_attr, { as: "rattr", foreignKey: "rattr_id" });
    ref_attr.hasMany(ref_entity_filter_attr, { as: "ref_entity_filter_attrs", foreignKey: "rattr_id" });
    ref_attr.belongsTo(ref_attr_group, { as: "rattr_group", foreignKey: "rattr_group_id" });
    ref_attr_group.hasMany(ref_attr, { as: "ref_attrs", foreignKey: "rattr_group_id" });
    ref_attr_group_actor.belongsTo(ref_attr_group, { as: "rattr_group", foreignKey: "rattr_group_id" });
    ref_attr_group.hasMany(ref_attr_group_actor, { as: "ref_attr_group_actors", foreignKey: "rattr_group_id" });
    ref_entity_filter_attr.belongsTo(ref_entity_filter, { as: "rentity_filter", foreignKey: "rentity_filter_id" });
    ref_entity_filter.hasMany(ref_entity_filter_attr, { as: "ref_entity_filter_attrs", foreignKey: "rentity_filter_id" });
    entity.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id" });
    ref_entity_type.hasMany(entity, { as: "entities", foreignKey: "rentity_type_id" });
    ref_attr_group.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id" });
    ref_entity_type.hasMany(ref_attr_group, { as: "ref_attr_groups", foreignKey: "rentity_type_id" });
    ref_entity_filter.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id" });
    ref_entity_type.hasMany(ref_entity_filter, { as: "ref_entity_filters", foreignKey: "rentity_type_id" });
    ref_stage.belongsTo(ref_entity_type, { as: "rentity_type", foreignKey: "rentity_type_id" });
    ref_entity_type.hasMany(ref_stage, { as: "ref_stages", foreignKey: "rentity_type_id" });
    ref_entity_type.belongsTo(ref_route, { as: "rroute", foreignKey: "rroute_id" });
    ref_route.hasMany(ref_entity_type, { as: "ref_entity_types", foreignKey: "rroute_id" });
    ref_stage.belongsTo(ref_route, { as: "rroute", foreignKey: "rroute_id" });
    -ref_route.hasMany(ref_stage, { as: "ref_stages", foreignKey: "rroute_id" });
    entity_stage.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id" });
    ref_stage.hasMany(entity_stage, { as: "entity_stages", foreignKey: "rstage_id" });
    ref_attr_actor.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id" });
    ref_stage.hasMany(ref_attr_actor, { as: "ref_attr_actors", foreignKey: "rstage_id" });
    ref_route.belongsTo(ref_stage, { as: "rstage_id_start_ref_stage", foreignKey: "rstage_id_start" });
    ref_stage.hasMany(ref_route, { as: "ref_routes", foreignKey: "rstage_id_start" });
    ref_stage_action.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id" });
    ref_stage.hasMany(ref_stage_action, { as: "ref_stage_actions", foreignKey: "rstage_id" });
    ref_stage_action_stage.belongsTo(ref_stage, { as: "rstage", foreignKey: "rstage_id" });
    ref_stage.hasMany(ref_stage_action_stage, { as: "ref_stage_action_stages", foreignKey: "rstage_id" });
    ref_stage_action_actor.belongsTo(ref_stage_action, { as: "rstage_action", foreignKey: "rstage_action_id" });
    ref_stage_action.hasMany(ref_stage_action_actor, { as: "ref_stage_action_actors", foreignKey: "rstage_action_id" });
    ref_stage_action_stage.belongsTo(ref_stage_action, { as: "rstage_action", foreignKey: "rstage_action_id" });
    ref_stage_action.hasMany(ref_stage_action_stage, { as: "ref_stage_action_stages", foreignKey: "rstage_action_id" });
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
exports.initModels = initModels;
