declare const requestBodyEntityUpdate: {
    entity_id: number;
    ts_deleted: null;
    user_deleted: null;
    chatroom_uuid: null;
    ts_created: null;
    user_created: null;
    rentity_type_id: number;
    rentity_type_name: string;
    rentity_type_label: string;
    rroute_id: number;
    ref_attr: ({
        entity_attr_id: number;
        rattr_name: string;
        rattr_label: string;
        entity_attr_value: string;
        rattr_type: string;
        rattr_group_id: number;
        rattr_view: null;
        rattr_no: number;
        rattr_group_name: string;
        rattr_group_label: string;
    } | {
        entity_attr_id: number;
        rattr_name: string;
        rattr_label: string;
        entity_attr_value: string;
        rattr_type: string;
        rattr_group_id: number;
        rattr_view: boolean;
        rattr_no: number;
        rattr_group_name: string;
        rattr_group_label: string;
    })[];
};
export { requestBodyEntityUpdate };
