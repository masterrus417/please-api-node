import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_actor, ref_actorId } from './ref_actor';
import type { ref_attr_group, ref_attr_groupId } from './ref_attr_group';

export interface ref_attr_group_actorAttributes {
  rattr_group_actor_id: number;
  rattr_group_id?: number;
  ractor_id?: number;
  can_edit?: boolean;
  can_read?: boolean;
}

export type ref_attr_group_actorPk = "rattr_group_actor_id";
export type ref_attr_group_actorId = ref_attr_group_actor[ref_attr_group_actorPk];
export type ref_attr_group_actorOptionalAttributes = "rattr_group_actor_id" | "rattr_group_id" | "ractor_id" | "can_edit" | "can_read";
export type ref_attr_group_actorCreationAttributes = Optional<ref_attr_group_actorAttributes, ref_attr_group_actorOptionalAttributes>;

export class ref_attr_group_actor extends Model<ref_attr_group_actorAttributes, ref_attr_group_actorCreationAttributes> implements ref_attr_group_actorAttributes {
  rattr_group_actor_id!: number;
  rattr_group_id?: number;
  ractor_id?: number;
  can_edit?: boolean;
  can_read?: boolean;

  // ref_attr_group_actor belongsTo ref_actor via ractor_id
  ractor!: ref_actor;
  getRactor!: Sequelize.BelongsToGetAssociationMixin<ref_actor>;
  setRactor!: Sequelize.BelongsToSetAssociationMixin<ref_actor, ref_actorId>;
  createRactor!: Sequelize.BelongsToCreateAssociationMixin<ref_actor>;
  // ref_attr_group_actor belongsTo ref_attr_group via rattr_group_id
  rattr_group!: ref_attr_group;
  getRattr_group!: Sequelize.BelongsToGetAssociationMixin<ref_attr_group>;
  setRattr_group!: Sequelize.BelongsToSetAssociationMixin<ref_attr_group, ref_attr_groupId>;
  createRattr_group!: Sequelize.BelongsToCreateAssociationMixin<ref_attr_group>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_group_actor {
    return ref_attr_group_actor.init({
    rattr_group_actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "в какой группе атрибутов",
      references: {
        model: 'ref_attr_group',
        key: 'rattr_group_id'
      }
    },
    ractor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какой актор (роль)",
      references: {
        model: 'ref_actor',
        key: 'ractor_id'
      }
    },
    can_edit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "может редактировать все атрибуты в этой группе (по умолчанию нет)"
    },
    can_read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      comment: "может видеть атрибуты в этой группе (по умолчанию да)"
    }
  }, {
    sequelize,
    tableName: 'ref_attr_group_actor',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_attr_group_actor_idx",
        fields: [
          { name: "ractor_id" },
        ]
      },
      {
        name: "ref_attr_group_actor_idx1",
        fields: [
          { name: "rattr_group_id" },
        ]
      },
      {
        name: "ref_attr_group_actor_pkey",
        unique: true,
        fields: [
          { name: "rattr_group_actor_id" },
        ]
      },
    ]
  });
  }
}
