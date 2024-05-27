import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_attr, ref_attrId } from './ref_attr';
export interface entity_attrAttributes {
    entity_attr_id: number;
    rattr_id?: number;
    entity_id?: number;
    entity_attr_value?: string;
}
export type entity_attrPk = "entity_attr_id";
export type entity_attrId = entity_attr[entity_attrPk];
export type entity_attrOptionalAttributes = "entity_attr_id" | "rattr_id" | "entity_id" | "entity_attr_value";
export type entity_attrCreationAttributes = Optional<entity_attrAttributes, entity_attrOptionalAttributes>;
export declare class entity_attr extends Model<entity_attrAttributes, entity_attrCreationAttributes> implements entity_attrAttributes {
    entity_attr_id: number;
    rattr_id?: number;
    entity_id?: number;
    entity_attr_value?: string;
    entity: entity;
    getEntity: Sequelize.BelongsToGetAssociationMixin<entity>;
    setEntity: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
    createEntity: Sequelize.BelongsToCreateAssociationMixin<entity>;
    rattr: ref_attr;
    getRattr: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
    setRattr: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
    createRattr: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;
    static initModel(sequelize: Sequelize.Sequelize): typeof entity_attr;
}
