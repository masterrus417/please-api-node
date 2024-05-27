import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_attr, ref_attrId } from './ref_attr';

export interface ref_attr_dictAttributes {
  rattr_dict_id: number;
  rattr_id?: number;
  rattr_dict_no?: number;
  rattr_dict_name?: string;
  rattr_dict_label?: string;
}

export type ref_attr_dictPk = "rattr_dict_id";
export type ref_attr_dictId = ref_attr_dict[ref_attr_dictPk];
export type ref_attr_dictOptionalAttributes = "rattr_dict_id" | "rattr_id" | "rattr_dict_no" | "rattr_dict_name" | "rattr_dict_label";
export type ref_attr_dictCreationAttributes = Optional<ref_attr_dictAttributes, ref_attr_dictOptionalAttributes>;

export class ref_attr_dict extends Model<ref_attr_dictAttributes, ref_attr_dictCreationAttributes> implements ref_attr_dictAttributes {
  rattr_dict_id!: number;
  rattr_id?: number;
  rattr_dict_no?: number;
  rattr_dict_name?: string;
  rattr_dict_label?: string;

  // ref_attr_dict belongsTo ref_attr via rattr_id
  rattr!: ref_attr;
  getRattr!: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
  setRattr!: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
  createRattr!: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_dict {
    return ref_attr_dict.init({
    rattr_dict_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ref_attr',
        key: 'rattr_id'
      }
    },
    rattr_dict_no: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "порядковый номер при отображении"
    },
    rattr_dict_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "!! После использования нельзя редактировать. Именно это поле записывается в значения атрибутов"
    },
    rattr_dict_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Отображаемый текст варианта выбора"
    }
  }, {
    sequelize,
    tableName: 'ref_attr_dict',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_attr_dict_pkey",
        unique: true,
        fields: [
          { name: "rattr_dict_id" },
        ]
      },
    ]
  });
  }
}
