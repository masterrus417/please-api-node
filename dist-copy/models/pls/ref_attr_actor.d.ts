import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ref_actor, ref_actorId } from './ref_actor';
import type { ref_attr, ref_attrId } from './ref_attr';
import type { ref_stage, ref_stageId } from './ref_stage';
export interface ref_attr_actorAttributes {
    rattr_actor_id: number;
    rattr_id?: number;
    ractor_id?: number;
    rstage_id?: number;
}
export type ref_attr_actorPk = "rattr_actor_id";
export type ref_attr_actorId = ref_attr_actor[ref_attr_actorPk];
export type ref_attr_actorOptionalAttributes = "rattr_actor_id" | "rattr_id" | "ractor_id" | "rstage_id";
export type ref_attr_actorCreationAttributes = Optional<ref_attr_actorAttributes, ref_attr_actorOptionalAttributes>;
export declare class ref_attr_actor extends Model<ref_attr_actorAttributes, ref_attr_actorCreationAttributes> implements ref_attr_actorAttributes {
    rattr_actor_id: number;
    rattr_id?: number;
    ractor_id?: number;
    rstage_id?: number;
    ractor: ref_actor;
    getRactor: Sequelize.BelongsToGetAssociationMixin<ref_actor>;
    setRactor: Sequelize.BelongsToSetAssociationMixin<ref_actor, ref_actorId>;
    createRactor: Sequelize.BelongsToCreateAssociationMixin<ref_actor>;
    rattr: ref_attr;
    getRattr: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
    setRattr: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
    createRattr: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;
    rstage: ref_stage;
    getRstage: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
    setRstage: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
    createRstage: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_actor;
}
