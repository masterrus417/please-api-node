"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBodyEntityUpdate = void 0;
const requestBodyEntityUpdate = {
    entity_id: 55,
    ts_deleted: null,
    user_deleted: null,
    chatroom_uuid: null,
    ts_created: null,
    user_created: null,
    rentity_type_id: 2,
    rentity_type_name: "candidate",
    rentity_type_label: "Кандидат",
    rroute_id: 3,
    ref_attr: [
        {
            entity_attr_id: 717,
            rattr_name: "comment",
            rattr_label: "Комментарии",
            entity_attr_value: "",
            rattr_type: "longstring",
            rattr_group_id: 5,
            rattr_view: null,
            rattr_no: 17,
            rattr_group_name: "candidate_attributes_ext",
            rattr_group_label: "Дополнительные атрибуты кандидата",
        },
        {
            entity_attr_id: 700,
            rattr_name: "resume",
            rattr_label: "Дата поступления резюме",
            entity_attr_value: "2024-03-14",
            rattr_type: "date",
            rattr_group_id: 2,
            rattr_view: null,
            rattr_no: 1,
            rattr_group_name: "candidate_attributes",
            rattr_group_label: "Атрибуты кандидата",
        },
        {
            entity_attr_id: 701,
            rattr_name: "source",
            rattr_label: "Источник кандидата",
            entity_attr_value: "сотрудник предприятия",
            rattr_type: "dict",
            rattr_group_id: 2,
            rattr_view: true,
            rattr_no: 2,
            rattr_group_name: "candidate_attributes",
            rattr_group_label: "Атрибуты кандидата",
        },
        {
            entity_attr_id: 702,
            rattr_name: "come_from",
            rattr_label: "Откуда пришел",
            entity_attr_value: "дни карьеры",
            rattr_type: "dict",
            rattr_group_id: 2,
            rattr_view: null,
            rattr_no: 3,
            rattr_group_name: "candidate_attributes",
            rattr_group_label: "Атрибуты кандидата",
        },
        {
            entity_attr_id: 703,
            rattr_name: "surname",
            rattr_label: "Фамилия",
            entity_attr_value: "213",
            rattr_type: "string",
            rattr_group_id: 2,
            rattr_view: true,
            rattr_no: 4,
            rattr_group_name: "candidate_attributes",
            rattr_group_label: "Атрибуты кандидата",
        },
        {
            entity_attr_id: 704,
            rattr_name: "name",
            rattr_label: "Имя",
            entity_attr_value: "213",
            rattr_type: "string",
            rattr_group_id: 2,
            rattr_view: true,
            rattr_no: 5,
            rattr_group_name: "candidate_attributes",
            rattr_group_label: "Атрибуты кандидата",
        },
    ],
};
exports.requestBodyEntityUpdate = requestBodyEntityUpdate;
