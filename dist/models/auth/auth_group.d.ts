import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { auth_user_groups, auth_user_groupsId } from './auth_user_groups';
export interface auth_groupAttributes {
    id: number;
    name: string;
}
export type auth_groupPk = "id";
export type auth_groupId = auth_group[auth_groupPk];
export type auth_groupOptionalAttributes = "id";
export type auth_groupCreationAttributes = Optional<auth_groupAttributes, auth_groupOptionalAttributes>;
export declare class auth_group extends Model<auth_groupAttributes, auth_groupCreationAttributes> implements auth_groupAttributes {
    id: number;
    name: string;
    auth_user_groups: auth_user_groups[];
    getAuth_user_groups: Sequelize.HasManyGetAssociationsMixin<auth_user_groups>;
    setAuth_user_groups: Sequelize.HasManySetAssociationsMixin<auth_user_groups, auth_user_groupsId>;
    addAuth_user_group: Sequelize.HasManyAddAssociationMixin<auth_user_groups, auth_user_groupsId>;
    addAuth_user_groups: Sequelize.HasManyAddAssociationsMixin<auth_user_groups, auth_user_groupsId>;
    createAuth_user_group: Sequelize.HasManyCreateAssociationMixin<auth_user_groups>;
    removeAuth_user_group: Sequelize.HasManyRemoveAssociationMixin<auth_user_groups, auth_user_groupsId>;
    removeAuth_user_groups: Sequelize.HasManyRemoveAssociationsMixin<auth_user_groups, auth_user_groupsId>;
    hasAuth_user_group: Sequelize.HasManyHasAssociationMixin<auth_user_groups, auth_user_groupsId>;
    hasAuth_user_groups: Sequelize.HasManyHasAssociationsMixin<auth_user_groups, auth_user_groupsId>;
    countAuth_user_groups: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof auth_group;
}
