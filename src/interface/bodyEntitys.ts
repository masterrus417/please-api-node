interface EntityAttrGroup {
  rattr_group_name: string;
  rattr_group_label: string;
}

interface RefAttr {
  rattr_id: number;
  rattr_name: string;
  rattr_label: string;
  rattr_type: string;
  rattr_group_id: number;
  rattr_view: string;
  rattr_no: number;
  rattr_group: EntityAttrGroup;
}

interface EntityAttr {
  entity_attr_id: number;
  rattr_id: number;
  entity_attr_value: string;
  rattr: RefAttr;
}

interface REntityType {
  rentity_type_id: number;
  rentity_type_name: string;
  rentity_type_label: string;
  rroute_id: number;
}

interface RStage {
  rstage_name: string;
  rstage_label: string;
}

interface EntityStage {
  entity_stage_id: number;
  rstage_id: number;
  ts_created: Date;
  user_created: string;
  rstage: RStage;
}

interface EntityData {
  entity_id: number;
  ts_deleted: Date | null;
  user_deleted?: string | null;
  chatroom_uuid: string;
  ts_created: Date;
  user_created: string;
  rentity_type: REntityType;
  entity_attrs: EntityAttr[];
  entity_stages: EntityStage[];
}

interface FormattedData {
  entity_id: number;
  ts_deleted: Date | null;
  user_deleted: string | null;
  chatroom_uuid: string;
  ts_created: Date;
  user_created: string;
  rentity_type_id: number;
  rentity_type_name: string;
  rentity_type_label: string;
  rroute_id: number;
  ref_attr: {
    entity_attr_id: number;
    rattr_id: number;
    rattr_name: string;
    rattr_label: string;
    entity_attr_value: string;
    rattr_type: string;
    rattr_group_id: number;
    rattr_view: string;
    rattr_no: number;
    rattr_group_name: string;
    rattr_group_label: string;
  }[];
  entity_stage: {
    entity_stage_id: number;
    rstage_id: number;
    ts_created: Date;
    user_created: string;
    rstage_name: string;
    rstage_label: string;
  }[];
}

interface GetFormattedEntitiesParams {
  entityIds?: number[];
  entityTypeName?: string;
}

// Убедимся, что ts_deleted и user_deleted могут быть undefined в EntityData для соответствия модели entity
type EntityInstance = Omit<EntityData, "ts_deleted" | "user_deleted"> & {
  ts_deleted?: Date | null;
  user_deleted?: string | null;
};

export {
  EntityAttrGroup,
  RefAttr,
  EntityAttr,
  REntityType,
  RStage,
  EntityStage,
  EntityData,
  FormattedData,
  GetFormattedEntitiesParams,
};
