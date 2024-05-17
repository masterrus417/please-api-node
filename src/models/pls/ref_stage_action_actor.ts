import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_actor, ref_actorId } from './ref_actor';
import type { ref_stage_action, ref_stage_actionId } from './ref_stage_action';

export interface ref_stage_action_actorAttributes {
  rstage_action_actor_id: number;
  rstage_action_id?: number;
  ractor_id?: number;
}

export type ref_stage_action_actorPk = "rstage_action_actor_id";
export type ref_stage_action_actorId = ref_stage_action_actor[ref_stage_action_actorPk];
export type ref_stage_action_actorOptionalAttributes = "rstage_action_actor_id" | "rstage_action_id" | "ractor_id";
export type ref_stage_action_actorCreationAttributes = Optional<ref_stage_action_actorAttributes, ref_stage_action_actorOptionalAttributes>;

export class ref_stage_action_actor extends Model<ref_stage_action_actorAttributes, ref_stage_action_actorCreationAttributes> implements ref_stage_action_actorAttributes {
  rstage_action_actor_id!: number;
  rstage_action_id?: number;
  ractor_id?: number;

  // ref_stage_action_actor belongsTo ref_actor via ractor_id
  ractor!: ref_actor;
  getRactor!: Sequelize.BelongsToGetAssociationMixin<ref_actor>;
  setRactor!: Sequelize.BelongsToSetAssociationMixin<ref_actor, ref_actorId>;
  createRactor!: Sequelize.BelongsToCreateAssociationMixin<ref_actor>;
  // ref_stage_action_actor belongsTo ref_stage_action via rstage_action_id
  rstage_action!: ref_stage_action;
  getRstage_action!: Sequelize.BelongsToGetAssociationMixin<ref_stage_action>;
  setRstage_action!: Sequelize.BelongsToSetAssociationMixin<ref_stage_action, ref_stage_actionId>;
  createRstage_action!: Sequelize.BelongsToCreateAssociationMixin<ref_stage_action>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_stage_action_actor {
    return ref_stage_action_actor.init({
    rstage_action_actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rstage_action_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "указатель на этап и действие",
      references: {
        model: 'ref_stage_action',
        key: 'rstage_action_id'
      }
    },
    ractor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "указатель на актора",
      references: {
        model: 'ref_actor',
        key: 'ractor_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_stage_action_actor',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_stage_action_actor_idx",
        fields: [
          { name: "rstage_action_id" },
        ]
      },
      {
        name: "ref_stage_action_actor_idx1",
        fields: [
          { name: "ractor_id" },
        ]
      },
      {
        name: "ref_stage_action_actor_pkey",
        unique: true,
        fields: [
          { name: "rstage_action_actor_id" },
        ]
      },
    ]
  });
  }
}
