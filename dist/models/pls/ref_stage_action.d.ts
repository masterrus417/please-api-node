import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ref_action, ref_actionId } from './ref_action';
import type { ref_stage, ref_stageId } from './ref_stage';
import type { ref_stage_action_actor, ref_stage_action_actorId } from './ref_stage_action_actor';
import type { ref_stage_action_stage, ref_stage_action_stageId } from './ref_stage_action_stage';
export interface ref_stage_actionAttributes {
    rstage_action_id: number;
    rstage_id?: number;
    raction_id?: number;
}
export type ref_stage_actionPk = "rstage_action_id";
export type ref_stage_actionId = ref_stage_action[ref_stage_actionPk];
export type ref_stage_actionOptionalAttributes = "rstage_action_id" | "rstage_id" | "raction_id";
export type ref_stage_actionCreationAttributes = Optional<ref_stage_actionAttributes, ref_stage_actionOptionalAttributes>;
export declare class ref_stage_action extends Model<ref_stage_actionAttributes, ref_stage_actionCreationAttributes> implements ref_stage_actionAttributes {
    rstage_action_id: number;
    rstage_id?: number;
    raction_id?: number;
    raction: ref_action;
    getRaction: Sequelize.BelongsToGetAssociationMixin<ref_action>;
    setRaction: Sequelize.BelongsToSetAssociationMixin<ref_action, ref_actionId>;
    createRaction: Sequelize.BelongsToCreateAssociationMixin<ref_action>;
    rstage: ref_stage;
    getRstage: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
    setRstage: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
    createRstage: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;
    ref_stage_action_actors: ref_stage_action_actor[];
    getRef_stage_action_actors: Sequelize.HasManyGetAssociationsMixin<ref_stage_action_actor>;
    setRef_stage_action_actors: Sequelize.HasManySetAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    addRef_stage_action_actor: Sequelize.HasManyAddAssociationMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    addRef_stage_action_actors: Sequelize.HasManyAddAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    createRef_stage_action_actor: Sequelize.HasManyCreateAssociationMixin<ref_stage_action_actor>;
    removeRef_stage_action_actor: Sequelize.HasManyRemoveAssociationMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    removeRef_stage_action_actors: Sequelize.HasManyRemoveAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    hasRef_stage_action_actor: Sequelize.HasManyHasAssociationMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    hasRef_stage_action_actors: Sequelize.HasManyHasAssociationsMixin<ref_stage_action_actor, ref_stage_action_actorId>;
    countRef_stage_action_actors: Sequelize.HasManyCountAssociationsMixin;
    ref_stage_action_stages: ref_stage_action_stage[];
    getRef_stage_action_stages: Sequelize.HasManyGetAssociationsMixin<ref_stage_action_stage>;
    setRef_stage_action_stages: Sequelize.HasManySetAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    addRef_stage_action_stage: Sequelize.HasManyAddAssociationMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    addRef_stage_action_stages: Sequelize.HasManyAddAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    createRef_stage_action_stage: Sequelize.HasManyCreateAssociationMixin<ref_stage_action_stage>;
    removeRef_stage_action_stage: Sequelize.HasManyRemoveAssociationMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    removeRef_stage_action_stages: Sequelize.HasManyRemoveAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    hasRef_stage_action_stage: Sequelize.HasManyHasAssociationMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    hasRef_stage_action_stages: Sequelize.HasManyHasAssociationsMixin<ref_stage_action_stage, ref_stage_action_stageId>;
    countRef_stage_action_stages: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_stage_action;
}
