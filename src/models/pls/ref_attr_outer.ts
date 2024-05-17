import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ref_attr_outerAttributes {
  rattr_outer_id: number;
  rattr_id?: number;
  rattr_outer_name?: string;
  rattr_outer_label?: string;
  rattr_outer_fields?: string;
  rattr_outer_path?: string;
  rattr_outer_key?: string;
  rattr_outer_sort?: string;
}

export type ref_attr_outerPk = "rattr_outer_id";
export type ref_attr_outerId = ref_attr_outer[ref_attr_outerPk];
export type ref_attr_outerOptionalAttributes = "rattr_outer_id" | "rattr_id" | "rattr_outer_name" | "rattr_outer_label" | "rattr_outer_fields" | "rattr_outer_path" | "rattr_outer_key" | "rattr_outer_sort";
export type ref_attr_outerCreationAttributes = Optional<ref_attr_outerAttributes, ref_attr_outerOptionalAttributes>;

export class ref_attr_outer extends Model<ref_attr_outerAttributes, ref_attr_outerCreationAttributes> implements ref_attr_outerAttributes {
  rattr_outer_id!: number;
  rattr_id?: number;
  rattr_outer_name?: string;
  rattr_outer_label?: string;
  rattr_outer_fields?: string;
  rattr_outer_path?: string;
  rattr_outer_key?: string;
  rattr_outer_sort?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_outer {
    return ref_attr_outer.init({
    rattr_outer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rattr_outer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rattr_outer_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rattr_outer_fields: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "какие поля показывать при выборе из справочника"
    },
    rattr_outer_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "где находится этот справочник"
    },
    rattr_outer_key: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "какое поле записывается в значение атрибута"
    },
    rattr_outer_sort: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "по каким полям сортируется при отображении справочника"
    }
  }, {
    sequelize,
    tableName: 'ref_attr_outer',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_attr_outer_pkey",
        unique: true,
        fields: [
          { name: "rattr_outer_id" },
        ]
      },
    ]
  });
  }
}
