import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
export interface authtoken_tokenAttributes {
    user_id?: number;
    key: string;
    created?: Date;
}
export type authtoken_tokenPk = "key";
export type authtoken_tokenId = authtoken_token[authtoken_tokenPk];
export type authtoken_tokenOptionalAttributes = "user_id" | "created";
export type authtoken_tokenCreationAttributes = Optional<authtoken_tokenAttributes, authtoken_tokenOptionalAttributes>;
export declare class authtoken_token extends Model<authtoken_tokenAttributes, authtoken_tokenCreationAttributes> implements authtoken_tokenAttributes {
    user_id?: number;
    key: string;
    created?: Date;
    static initModel(sequelize: Sequelize.Sequelize): typeof authtoken_token;
}
