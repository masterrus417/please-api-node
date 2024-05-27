import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
import type { ref_attr, ref_attrId } from './ref_attr';
export interface entity_attr_logAttributes {
    entity_attr_log_id: number;
    rattr_id?: number;
    entity_id?: number;
    entity_attr_value?: string;
    ts_change?: Date;
    user_change?: string;
}
export type entity_attr_logPk = "entity_attr_log_id";
export type entity_attr_logId = entity_attr_log[entity_attr_logPk];
export type entity_attr_logOptionalAttributes = "entity_attr_log_id" | "rattr_id" | "entity_id" | "entity_attr_value" | "ts_change" | "user_change";
export type entity_attr_logCreationAttributes = Optional<entity_attr_logAttributes, entity_attr_logOptionalAttributes>;
export declare class entity_attr_log extends Model<entity_attr_logAttributes, entity_attr_logCreationAttributes> implements entity_attr_logAttributes {
    entity_attr_log_id: number;
    rattr_id?: number;
    entity_id?: number;
    entity_attr_value?: string;
    ts_change?: Date;
    user_change?: string;
    entity: entity;
    getEntity: Sequelize.BelongsToGetAssociationMixin<entity>;
    setEntity: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
    createEntity: Sequelize.BelongsToCreateAssociationMixin<entity>;
    rattr: ref_attr;
    getRattr: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
    setRattr: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
    createRattr: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;
    static initModel(sequelize: Sequelize.Sequelize): typeof entity_attr_log;
}
