//интерфейсы для работы с entity // Подключите ваши модели

interface EntityAttributes {
  entity_id: number;
  ts_deleted: Date | null;
  user_deleted: string | null;
  chatroom_uuid: string | null;
  ts_created: Date | null;
  user_created: string | null;
  rentity_type: {
    rentity_type_id: number;
    rentity_type_name: string;
    rentity_type_label: string;
    rroute_id: number;
  };
  entity_attrs: {
    entity_attr_id: number;
    rattr_id: number;
    entity_attr_value: string;
    rattr: {
      rattr_id: number;
      rattr_name: string;
      rattr_label: string;
    };
  }[];
}

interface FormattedData {
  entity_id: number;
  ts_deleted: Date| null;
  user_deleted: string | null;
  chatroom_uuid: string | null;
  ts_created: Date | null;
  user_created: string | null;
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
  }[];
}


export { EntityAttributes, FormattedData };