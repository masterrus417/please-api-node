import { Sequelize } from 'sequelize';
declare const sequelize: Sequelize;
declare const modelsAuth: {
    auth_group: typeof import("../models/auth/auth_group").auth_group;
    auth_user: typeof import("../models/auth/auth_user").auth_user;
    auth_user_groups: typeof import("../models/auth/auth_user_groups").auth_user_groups;
    authtoken_token: typeof import("../models/auth/authtoken_token").authtoken_token;
};
declare const modelsPls: {
    entity: typeof import("../models/pls/entity").entity;
    entity_attr: typeof import("../models/pls/entity_attr").entity_attr;
    entity_attr_log: typeof import("../models/pls/entity_attr_log").entity_attr_log;
    entity_entity: typeof import("../models/pls/entity_entity").entity_entity;
    entity_stage: typeof import("../models/pls/entity_stage").entity_stage;
    ref_action: typeof import("../models/pls/ref_action").ref_action;
    ref_actor: typeof import("../models/pls/ref_actor").ref_actor;
    ref_attr: typeof import("../models/pls/ref_attr").ref_attr;
    ref_attr_actor: typeof import("../models/pls/ref_attr_actor").ref_attr_actor;
    ref_attr_dict: typeof import("../models/pls/ref_attr_dict").ref_attr_dict;
    ref_attr_group: typeof import("../models/pls/ref_attr_group").ref_attr_group;
    ref_attr_group_actor: typeof import("../models/pls/ref_attr_group_actor").ref_attr_group_actor;
    ref_attr_outer: typeof import("../models/pls/ref_attr_outer").ref_attr_outer;
    ref_entity_filter: typeof import("../models/pls/ref_entity_filter").ref_entity_filter;
    ref_entity_filter_attr: typeof import("../models/pls/ref_entity_filter_attr").ref_entity_filter_attr;
    ref_entity_type: typeof import("../models/pls/ref_entity_type").ref_entity_type;
    ref_route: typeof import("../models/pls/ref_route").ref_route;
    ref_stage: typeof import("../models/pls/ref_stage").ref_stage;
    ref_stage_action: typeof import("../models/pls/ref_stage_action").ref_stage_action;
    ref_stage_action_actor: typeof import("../models/pls/ref_stage_action_actor").ref_stage_action_actor;
    ref_stage_action_stage: typeof import("../models/pls/ref_stage_action_stage").ref_stage_action_stage;
};
export { sequelize, modelsAuth, modelsPls };
