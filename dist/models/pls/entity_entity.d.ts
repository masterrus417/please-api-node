import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { entity, entityId } from './entity';
export interface entity_entityAttributes {
    ent_ent_id: number;
    entity_id?: number;
    entity_id_link?: number;
    ts_created?: Date;
    ts_deleted?: Date;
    user_created?: string;
    user_deleted?: string;
}
export type entity_entityPk = "ent_ent_id";
export type entity_entityId = entity_entity[entity_entityPk];
export type entity_entityOptionalAttributes = "ent_ent_id" | "entity_id" | "entity_id_link" | "ts_created" | "ts_deleted" | "user_created" | "user_deleted";
export type entity_entityCreationAttributes = Optional<entity_entityAttributes, entity_entityOptionalAttributes>;
export declare class entity_entity extends Model<entity_entityAttributes, entity_entityCreationAttributes> implements entity_entityAttributes {
    ent_ent_id: number;
    entity_id?: number;
    entity_id_link?: number;
    ts_created?: Date;
    ts_deleted?: Date;
    user_created?: string;
    user_deleted?: string;
    entity: entity;
    getEntity: Sequelize.BelongsToGetAssociationMixin<entity>;
    setEntity: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
    createEntity: Sequelize.BelongsToCreateAssociationMixin<entity>;
    entity_id_link_entity: entity;
    getEntity_id_link_entity: Sequelize.BelongsToGetAssociationMixin<entity>;
    setEntity_id_link_entity: Sequelize.BelongsToSetAssociationMixin<entity, entityId>;
    createEntity_id_link_entity: Sequelize.BelongsToCreateAssociationMixin<entity>;
    static initModel(sequelize: Sequelize.Sequelize): typeof entity_entity;
}
