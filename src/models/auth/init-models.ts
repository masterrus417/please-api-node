import type { Sequelize } from "sequelize";
import { auth_group as _auth_group } from "./auth_group";
import type { auth_groupAttributes, auth_groupCreationAttributes } from "./auth_group";
import { auth_user as _auth_user } from "./auth_user";
import type { auth_userAttributes, auth_userCreationAttributes } from "./auth_user";
import { auth_user_groups as _auth_user_groups } from "./auth_user_groups";
import type { auth_user_groupsAttributes, auth_user_groupsCreationAttributes } from "./auth_user_groups";
import { authtoken_token as _authtoken_token } from "./authtoken_token";
import type { authtoken_tokenAttributes, authtoken_tokenCreationAttributes } from "./authtoken_token";


export {
  _auth_group as auth_group,
  _auth_user as auth_user,
  _auth_user_groups as auth_user_groups,
  _authtoken_token as authtoken_token,
};

export type {
  auth_groupAttributes,
  auth_groupCreationAttributes,
  auth_userAttributes,
  auth_userCreationAttributes,
  auth_user_groupsAttributes,
  auth_user_groupsCreationAttributes,
  authtoken_tokenAttributes,
  authtoken_tokenCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const auth_group = _auth_group.initModel(sequelize);
  const auth_user = _auth_user.initModel(sequelize);
  const auth_user_groups = _auth_user_groups.initModel(sequelize);
  const authtoken_token = _authtoken_token.initModel(sequelize);


  auth_user_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_user_groups, { as: "auth_user_groups", foreignKey: "group_id"});


  return {
    auth_group: auth_group,
    auth_user: auth_user,
    auth_user_groups: auth_user_groups,
    authtoken_token: authtoken_token,
  };
}
