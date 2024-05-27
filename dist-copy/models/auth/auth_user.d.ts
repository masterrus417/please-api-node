import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
export interface auth_userAttributes {
    id: number;
    password: string;
    last_login?: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    where_come: string;
}
export type auth_userPk = "id";
export type auth_userId = auth_user[auth_userPk];
export type auth_userOptionalAttributes = "id" | "last_login";
export type auth_userCreationAttributes = Optional<auth_userAttributes, auth_userOptionalAttributes>;
export declare class auth_user extends Model<auth_userAttributes, auth_userCreationAttributes> implements auth_userAttributes {
    id: number;
    password: string;
    last_login?: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    where_come: string;
    static initModel(sequelize: Sequelize.Sequelize): typeof auth_user;
}
