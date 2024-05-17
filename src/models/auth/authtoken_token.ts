import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional} from 'sequelize';

export interface authtoken_tokenAttributes {
  user_id?: number;
  key: string;
  created?: Date;
}

export type authtoken_tokenPk = "key";
export type authtoken_tokenId = authtoken_token[authtoken_tokenPk];
export type authtoken_tokenOptionalAttributes = "user_id" | "created";
export type authtoken_tokenCreationAttributes = Optional<authtoken_tokenAttributes, authtoken_tokenOptionalAttributes>;

export class authtoken_token extends Model<authtoken_tokenAttributes, authtoken_tokenCreationAttributes> implements authtoken_tokenAttributes {
  user_id?: number;
  key!: string;
  created?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof authtoken_token {
    return authtoken_token.init({
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    key: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'authtoken_token',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "authtoken_token_pkey",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
    ]
  });
  }
}
