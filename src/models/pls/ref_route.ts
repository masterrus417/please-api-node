import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ref_entity_type, ref_entity_typeId } from './ref_entity_type';
import type { ref_stage, ref_stageId } from './ref_stage';

export interface ref_routeAttributes {
  rroute_id: number;
  rroute_name?: string;
  rroute_label?: string;
  rstage_id_start?: number;
}

export type ref_routePk = "rroute_id";
export type ref_routeId = ref_route[ref_routePk];
export type ref_routeOptionalAttributes = "rroute_id" | "rroute_name" | "rroute_label" | "rstage_id_start";
export type ref_routeCreationAttributes = Optional<ref_routeAttributes, ref_routeOptionalAttributes>;

export class ref_route extends Model<ref_routeAttributes, ref_routeCreationAttributes> implements ref_routeAttributes {
  rroute_id!: number;
  rroute_name?: string;
  rroute_label?: string;
  rstage_id_start?: number;

  // ref_route hasMany ref_entity_type via rroute_id
  ref_entity_types!: ref_entity_type[];
  getRef_entity_types!: Sequelize.HasManyGetAssociationsMixin<ref_entity_type>;
  setRef_entity_types!: Sequelize.HasManySetAssociationsMixin<ref_entity_type, ref_entity_typeId>;
  addRef_entity_type!: Sequelize.HasManyAddAssociationMixin<ref_entity_type, ref_entity_typeId>;
  addRef_entity_types!: Sequelize.HasManyAddAssociationsMixin<ref_entity_type, ref_entity_typeId>;
  createRef_entity_type!: Sequelize.HasManyCreateAssociationMixin<ref_entity_type>;
  removeRef_entity_type!: Sequelize.HasManyRemoveAssociationMixin<ref_entity_type, ref_entity_typeId>;
  removeRef_entity_types!: Sequelize.HasManyRemoveAssociationsMixin<ref_entity_type, ref_entity_typeId>;
  hasRef_entity_type!: Sequelize.HasManyHasAssociationMixin<ref_entity_type, ref_entity_typeId>;
  hasRef_entity_types!: Sequelize.HasManyHasAssociationsMixin<ref_entity_type, ref_entity_typeId>;
  countRef_entity_types!: Sequelize.HasManyCountAssociationsMixin;
  // ref_route hasMany ref_stage via rroute_id
  ref_stages!: ref_stage[];
  getRef_stages!: Sequelize.HasManyGetAssociationsMixin<ref_stage>;
  setRef_stages!: Sequelize.HasManySetAssociationsMixin<ref_stage, ref_stageId>;
  addRef_stage!: Sequelize.HasManyAddAssociationMixin<ref_stage, ref_stageId>;
  addRef_stages!: Sequelize.HasManyAddAssociationsMixin<ref_stage, ref_stageId>;
  createRef_stage!: Sequelize.HasManyCreateAssociationMixin<ref_stage>;
  removeRef_stage!: Sequelize.HasManyRemoveAssociationMixin<ref_stage, ref_stageId>;
  removeRef_stages!: Sequelize.HasManyRemoveAssociationsMixin<ref_stage, ref_stageId>;
  hasRef_stage!: Sequelize.HasManyHasAssociationMixin<ref_stage, ref_stageId>;
  hasRef_stages!: Sequelize.HasManyHasAssociationsMixin<ref_stage, ref_stageId>;
  countRef_stages!: Sequelize.HasManyCountAssociationsMixin;
  // ref_route belongsTo ref_stage via rstage_id_start
  rstage_id_start_ref_stage!: ref_stage;
  getRstage_id_start_ref_stage!: Sequelize.BelongsToGetAssociationMixin<ref_stage>;
  setRstage_id_start_ref_stage!: Sequelize.BelongsToSetAssociationMixin<ref_stage, ref_stageId>;
  createRstage_id_start_ref_stage!: Sequelize.BelongsToCreateAssociationMixin<ref_stage>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ref_route {
    return ref_route.init({
    rroute_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rroute_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rroute_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rstage_id_start: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Этап, с которого начинается этот маршрут",
      references: {
        model: 'ref_stage',
        key: 'rstage_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ref_route',
    schema: 'pls',
    timestamps: false,
    indexes: [
      {
        name: "ref_route_pkey",
        unique: true,
        fields: [
          { name: "rroute_id" },
        ]
      },
    ]
  });
  }
}
