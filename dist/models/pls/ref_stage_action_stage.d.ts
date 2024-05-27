import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ref_stage, ref_stageId } from './ref_stage';
import type { ref_stage_action, ref_stage_actionId } from './ref_stage_action';
export interface ref_stage_action_stageAttributes {
    rstage_action_stage_id: number;
    rstage_action_id?: number;
    rstage_id?: number;
}
export type ref_stage_action_stagePk = "rstage_action_stage_id";
export type ref_stage_action_stageId = ref_stage_action_stage[ref_stage_action_stagePk];
export type ref_stage_action_stageOptionalAttributes = "rstage_action_stage_id" | "rstage_action_id" | "rstage_id";
export type ref_stage_action_stageCreationAttributes = Optional<ref_stage_action_stageAttributes, ref_stage_action_stageOptionalAttributes>;
export declare class ref_stage_action_stage extends Model<ref_stage_action_stageAttributes, ref_stage_action_stageCreationAttributes> implements ref_stage_action_stageAttributes {
    rstage_action_stage_id: number;
    rstage_action_id?: number;
    rstage_id?: number;
    rstage: ref_stage;
    getRstage: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
    setRstage: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
    createRstage: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;
    rstage_action: ref_stage_action;
    getRstage_action: Sequelize.BelongsToGetAssociationMixin<ref_stage_action>;
    setRstage_action: Sequelize.BelongsToSetAssociationMixin<ref_stage_action, ref_stage_actionId>;
    createRstage_action: Sequelize.BelongsToCreateAssociationMixin<ref_stage_action>;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_stage_action_stage;
}
