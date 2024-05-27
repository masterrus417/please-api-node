import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
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
export declare class ref_attr_outer extends Model<ref_attr_outerAttributes, ref_attr_outerCreationAttributes> implements ref_attr_outerAttributes {
    rattr_outer_id: number;
    rattr_id?: number;
    rattr_outer_name?: string;
    rattr_outer_label?: string;
    rattr_outer_fields?: string;
    rattr_outer_path?: string;
    rattr_outer_key?: string;
    rattr_outer_sort?: string;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_outer;
}
