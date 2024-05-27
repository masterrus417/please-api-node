"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.authtoken_token = exports.auth_user_groups = exports.auth_user = exports.auth_group = void 0;
const auth_group_1 = require("./auth_group");
Object.defineProperty(exports, "auth_group", { enumerable: true, get: function () { return auth_group_1.auth_group; } });
const auth_user_1 = require("./auth_user");
Object.defineProperty(exports, "auth_user", { enumerable: true, get: function () { return auth_user_1.auth_user; } });
const auth_user_groups_1 = require("./auth_user_groups");
Object.defineProperty(exports, "auth_user_groups", { enumerable: true, get: function () { return auth_user_groups_1.auth_user_groups; } });
const authtoken_token_1 = require("./authtoken_token");
Object.defineProperty(exports, "authtoken_token", { enumerable: true, get: function () { return authtoken_token_1.authtoken_token; } });
function initModels(sequelize) {
    const auth_group = auth_group_1.auth_group.initModel(sequelize);
    const auth_user = auth_user_1.auth_user.initModel(sequelize);
    const auth_user_groups = auth_user_groups_1.auth_user_groups.initModel(sequelize);
    const authtoken_token = authtoken_token_1.authtoken_token.initModel(sequelize);
    auth_user_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id" });
    auth_group.hasMany(auth_user_groups, { as: "auth_user_groups", foreignKey: "group_id" });
    return {
        auth_group: auth_group,
        auth_user: auth_user,
        auth_user_groups: auth_user_groups,
        authtoken_token: authtoken_token,
    };
}
exports.initModels = initModels;
