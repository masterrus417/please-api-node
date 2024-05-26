import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { auth_group, auth_groupId } from './auth_group';
export interface auth_user_groupsAttributes {
    id: number;
    user_id: number;
    group_id: number;
}
export type auth_user_groupsPk = "id";
export type auth_user_groupsId = auth_user_groups[auth_user_groupsPk];
export type auth_user_groupsOptionalAttributes = "id";
export type auth_user_groupsCreationAttributes = Optional<auth_user_groupsAttributes, auth_user_groupsOptionalAttributes>;
export declare class auth_user_groups extends Model<auth_user_groupsAttributes, auth_user_groupsCreationAttributes> implements auth_user_groupsAttributes {
    id: number;
    user_id: number;
    group_id: number;
    group: auth_group;
    getGroup: Sequelize.BelongsToGetAssociationMixin<auth_group>;
    setGroup: Sequelize.BelongsToSetAssociationMixin<auth_group, auth_groupId>;
    createGroup: Sequelize.BelongsToCreateAssociationMixin<auth_group>;
    static initModel(sequelize: Sequelize.Sequelize): typeof auth_user_groups;
}
