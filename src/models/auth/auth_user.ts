import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcryptjs';

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

export class auth_user extends Model<auth_userAttributes, auth_userCreationAttributes> implements auth_userAttributes {
  id!: number;
  password!: string;
  last_login?: Date;
  is_superuser!: boolean;
  username!: string;
  first_name!: string;
  last_name!: string;
  email!: string;
  is_staff!: boolean;
  is_active!: boolean;
  date_joined!: Date;
  where_come!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof auth_user {
    return auth_user.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      is_superuser: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: "auth_user_username_key"
      },
      first_name: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(254),
        allowNull: false
      },
      is_staff: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      date_joined: {
        type: DataTypes.DATE,
        allowNull: false
      },
      where_come: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'auth_user',
      schema: 'auth',
      timestamps: false,
      indexes: [
        {
          name: "auth_user_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "auth_user_username_6821ab7c_like",
          fields: [
            { name: "username" },
          ]
        },
        {
          name: "auth_user_username_key",
          unique: true,
          fields: [
            { name: "username" },
          ]
        },
      ],
      hooks: {
        beforeCreate: async (user: auth_user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
        beforeUpdate: async (user: auth_user) => {
          if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        }
      }
    });
  }
}
