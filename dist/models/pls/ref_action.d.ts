import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { entity_stage, entity_stageId } from './entity_stage';
import type { ref_stage_action, ref_stage_actionId } from './ref_stage_action';
export interface ref_actionAttributes {
    raction_id: number;
    raction_name?: string;
    raction_label?: string;
}
export type ref_actionPk = "raction_id";
export type ref_actionId = ref_action[ref_actionPk];
export type ref_actionOptionalAttributes = "raction_id" | "raction_name" | "raction_label";
export type ref_actionCreationAttributes = Optional<ref_actionAttributes, ref_actionOptionalAttributes>;
export declare class ref_action extends Model<ref_actionAttributes, ref_actionCreationAttributes> implements ref_actionAttributes {
    raction_id: number;
    raction_name?: string;
    raction_label?: string;
    entity_stages: entity_stage[];
    getEntity_stages: Sequelize.HasManyGetAssociationsMixin<entity_stage>;
    setEntity_stages: Sequelize.HasManySetAssociationsMixin<entity_stage, entity_stageId>;
    addEntity_stage: Sequelize.HasManyAddAssociationMixin<entity_stage, entity_stageId>;
    addEntity_stages: Sequelize.HasManyAddAssociationsMixin<entity_stage, entity_stageId>;
    createEntity_stage: Sequelize.HasManyCreateAssociationMixin<entity_stage>;
    removeEntity_stage: Sequelize.HasManyRemoveAssociationMixin<entity_stage, entity_stageId>;
    removeEntity_stages: Sequelize.HasManyRemoveAssociationsMixin<entity_stage, entity_stageId>;
    hasEntity_stage: Sequelize.HasManyHasAssociationMixin<entity_stage, entity_stageId>;
    hasEntity_stages: Sequelize.HasManyHasAssociationsMixin<entity_stage, entity_stageId>;
    countEntity_stages: Sequelize.HasManyCountAssociationsMixin;
    ref_stage_actions: ref_stage_action[];
    getRef_stage_actions: Sequelize.HasManyGetAssociationsMixin<ref_stage_action>;
    setRef_stage_actions: Sequelize.HasManySetAssociationsMixin<ref_stage_action, ref_stage_actionId>;
    addRef_stage_action: Sequelize.HasManyAddAssociationMixin<ref_stage_action, ref_stage_actionId>;
    addRef_stage_actions: Sequelize.HasManyAddAssociationsMixin<ref_stage_action, ref_stage_actionId>;
    createRef_stage_action: Sequelize.HasManyCreateAssociationMixin<ref_stage_action>;
    removeRef_stage_action: Sequelize.HasManyRemoveAssociationMixin<ref_stage_action, ref_stage_actionId>;
    removeRef_stage_actions: Sequelize.HasManyRemoveAssociationsMixin<ref_stage_action, ref_stage_actionId>;
    hasRef_stage_action: Sequelize.HasManyHasAssociationMixin<ref_stage_action, ref_stage_actionId>;
    hasRef_stage_actions: Sequelize.HasManyHasAssociationsMixin<ref_stage_action, ref_stage_actionId>;
    countRef_stage_actions: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_action;
}
