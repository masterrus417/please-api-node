import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_actor, ref_actorId } from './ref_actor';
import type { ref_attr, ref_attrId } from './ref_attr';
import type { ref_stage, ref_stageId } from './ref_stage';

export interface ref_attr_actorAttributes {
  rattr_actor_id: number;
  rattr_id?: number;
  ractor_id?: number;
  rstage_id?: number;
}

export type ref_attr_actorPk = "rattr_actor_id";
export type ref_attr_actorId = ref_attr_actor[ref_attr_actorPk];
export type ref_attr_actorOptionalAttributes = "rattr_actor_id" | "rattr_id" | "ractor_id" | "rstage_id";
export type ref_attr_actorCreationAttributes = Optional<ref_attr_actorAttributes, ref_attr_actorOptionalAttributes>;

export class ref_attr_actor extends Model<ref_attr_actorAttributes, ref_attr_actorCreationAttributes> implements ref_attr_actorAttributes {
  rattr_actor_id!: number;
  rattr_id?: number;
  ractor_id?: number;
  rstage_id?: number;

  // ref_attr_actor belongsTo ref_actor via ractor_id
  ractor!: ref_actor;
  getRactor!: Sequelize.BelongsToGetAssociationMixin<ref_actor>;
  setRactor!: Sequelize.BelongsToSetAssociationMixin<ref_actor, ref_actorId>;
  createRactor!: Sequelize.BelongsToCreateAssociationMixin<ref_actor>;
  // ref_attr_actor belongsTo ref_attr via rattr_id
  rattr!: ref_attr;
  getRattr!: Sequelize.BelongsToGetAssociationMixin<ref_attr>;
  setRattr!: Sequelize.BelongsToSetAssociationMixin<ref_attr, ref_attrId>;
  createRattr!: Sequelize.BelongsToCreateAssociationMixin<ref_attr>;
  // ref_attr_actor belongsTo ref_stage via rstage_id
  rstage!: ref_stage;
  getRstage!: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
  setRstage!: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
  createRstage!: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_attr_actor {
    return ref_attr_actor.init({
    rattr_actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rattr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какой атрибут",
      references: {
        model: 'ref_attr',
        key: 'rattr_id'
      }
    },
    ractor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "какой актор",
      references: {
        model: 'ref_actor',
        key: 'ractor_id'
      }
    },
    rstage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "на каком конкретном этапе (NULL=на всех)",
      references: {
        model: 'ref_stage',
        key: 'rstage_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_attr_actor',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_attr_actor_idx",
        fields: [
          { name: "rattr_id" },
        ]
      },
      {
        name: "ref_attr_actor_idx1",
        fields: [
          { name: "ractor_id" },
        ]
      },
      {
        name: "ref_attr_actor_idx2",
        fields: [
          { name: "rstage_id" },
        ]
      },
      {
        name: "ref_attr_actor_pkey",
        unique: true,
        fields: [
          { name: "rattr_actor_id" },
        ]
      },
    ]
  });
  }
}
