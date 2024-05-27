import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_action, ref_actionId } from './ref_action';
import type { ref_stage, ref_stageId } from './ref_stage';
export interface entity_stageAttributes {
    entity_stage_id: number;
    rstage_id?: number;
    entity_id?: number;
    ts_action?: Date;
    raction_id?: number;
    user_action?: string;
    ts_created?: Date;
    user_created?: string;
}
export type entity_stagePk = "entity_stage_id";
export type entity_stageId = entity_stage[entity_stagePk];
export type entity_stageOptionalAttributes = "entity_stage_id" | "rstage_id" | "entity_id" | "ts_action" | "raction_id" | "user_action" | "ts_created" | "user_created";
export type entity_stageCreationAttributes = Optional<entity_stageAttributes, entity_stageOptionalAttributes>;
export declare class entity_stage extends Model<entity_stageAttributes, entity_stageCreationAttributes> implements entity_stageAttributes {
    entity_stage_id: number;
    rstage_id?: number;
    entity_id?: number;
    ts_action?: Date;
    raction_id?: number;
    user_action?: string;
    ts_created?: Date;
    user_created?: string;
    entity: entity;
    getEntity: Sequelize.BelongsToGetAssociationMixin<entity>;
    setEntity: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
    createEntity: Sequelize.BelongsToCreateAssociationMixin<entity>;
    raction: ref_action;
    getRaction: Sequelize.BelongsToGetAssociationMixin<ref_action>;
    setRaction: Sequelize.BelongsToSetAssociationMixin<ref_action, ref_actionId>;
    createRaction: Sequelize.BelongsToCreateAssociationMixin<ref_action>;
    rstage: ref_stage;
    getRstage: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
    setRstage: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
    createRstage: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;
    static initModel(sequelize: Sequelize.Sequelize): typeof entity_stage;
}
