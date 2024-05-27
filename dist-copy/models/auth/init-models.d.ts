import type { Sequelize } from "sequelize";
import { auth_group as _auth_group } from "./auth_group";
import type { auth_groupAttributes, auth_groupCreationAttributes } from "./auth_group";
import { auth_user as _auth_user } from "./auth_user";
import type { auth_userAttributes, auth_userCreationAttributes } from "./auth_user";
import { auth_user_groups as _auth_user_groups } from "./auth_user_groups";
import type { auth_user_groupsAttributes, auth_user_groupsCreationAttributes } from "./auth_user_groups";
import { authtoken_token as _authtoken_token } from "./authtoken_token";
import type { authtoken_tokenAttributes, authtoken_tokenCreationAttributes } from "./authtoken_token";
export { _auth_group as auth_group, _auth_user as auth_user, _auth_user_groups as auth_user_groups, _authtoken_token as authtoken_token, };
export type { auth_groupAttributes, auth_groupCreationAttributes, auth_userAttributes, auth_userCreationAttributes, auth_user_groupsAttributes, auth_user_groupsCreationAttributes, authtoken_tokenAttributes, authtoken_tokenCreationAttributes, };
export declare function initModels(sequelize: Sequelize): {
    auth_group: typeof _auth_group;
    auth_user: typeof _auth_user;
    auth_user_groups: typeof _auth_user_groups;
    authtoken_token: typeof _authtoken_token;
};
