import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
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
export declare class ref_attr_dict extends Model<ref_attr_dictAttributes, ref_attr_dictCreationAttributes> implements ref_attr_dictAttributes {
    rattr_dict_id: number;
    rattr_id?: number;
    rattr_dict_no?: number;
    rattr_dict_name?: string;
    rattr_dict_label?: string;
    rattr: ref_attr;
    getRattr: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
    setRattr: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
    createRattr: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;
    static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_dict;
}
