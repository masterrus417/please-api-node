import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ref_actor, ref_actorId } from './ref_actor';
import type { ref_attr_group, ref_attr_groupId } from './ref_attr_group';
export interface ref_attr_group_actorAttributes {
    rattr_group_actor_id: number;
    rattr_group_id?: number;
    ractor_id?: number;
    can_edit?: boolean;
    can_read?: boolean;
}
export type ref_attr_group_actorPk = "rattr_group_actor_id";
export type ref_attr_group_actorId = ref_attr_group_actor[ref_attr_group_actorPk];
export type ref_attr_group_actorOptionalAttributes = "rattr_group_actor_id" | "rattr_group_id" | "ractor_id" | "can_edit" | "can_read";
export type ref_attr_group_actorCreationAttributes = Optional<ref_attr_group_actorAttributes, ref_attr_group_actorOptionalAttributes>;
export declare class ref_attr_group_actor extends Model<ref_attr_group_actorAttributes, ref_attr_group_actorCreationAttributes> implements ref_attr_group_actorAttributes {
    rattr_group_actor_id: number;
    rattr_group_id?: number;
    ractor_id?: number;
    can_edit?: boolean;
    can_read?: boolean;
    ractor: ref_actor;
    getRactor: Sequelize.BelongsToGetAssociationMixin<ref_actor>;
    setRactor: Sequelize.BelongsToSetAssociationMixin<ref_actor, ref_actorId>;
    createRactor: Sequelize.BelongsToCreateAssociationMixin<ref_actor>;
    rattr_group: ref_attr_group;
    getRattr_group: Sequelize.BelongsToGetAssociationMixin<ref_attr_group>;
    setRattr_group: Sequelize.BelongsToSetAssociationMixin<ref_attr_group, ref_attr_groupId>;
    createRattr_group: Sequelize.BelongsToCreateAssociationMixin<ref_attr_group>;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_group_actor;
}
