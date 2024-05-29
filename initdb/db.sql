--
-- PostgreSQL database dump
--

-- Dumped from database version 12.18 (Ubuntu 12.18-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.18 (Ubuntu 12.18-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: root
--

CREATE SCHEMA auth;


ALTER SCHEMA auth OWNER TO root;

--
-- Name: SCHEMA auth; Type: COMMENT; Schema: -; Owner: root
--

COMMENT ON SCHEMA auth IS 'актуальная схема с аутентификацией
';


--
-- Name: pls; Type: SCHEMA; Schema: -; Owner: root
--

CREATE SCHEMA pls;


ALTER SCHEMA pls OWNER TO root;

--
-- Name: test; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA test;


ALTER SCHEMA test OWNER TO postgres;

--
-- Name: attr_type; Type: TYPE; Schema: pls; Owner: root
--

CREATE TYPE pls.attr_type AS ENUM (
    'string',
    'date',
    'number',
    'dict',
    'outer',
    'longstring',
    'bool',
    'file'
);


ALTER TYPE pls.attr_type OWNER TO root;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: auth_group; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE auth.auth_group OWNER TO root;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_group_id_seq OWNER TO root;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.auth_group_id_seq OWNED BY auth.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth.auth_group_permissions OWNER TO root;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_group_permissions_id_seq OWNER TO root;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.auth_group_permissions_id_seq OWNED BY auth.auth_group_permissions.id;


--
-- Name: auth_log; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.auth_log (
    "user" integer,
    service_name character varying(50),
    user_ip_address character varying(18),
    id integer NOT NULL,
    latest_ts timestamp(0) with time zone
);


ALTER TABLE auth.auth_log OWNER TO root;

--
-- Name: TABLE auth_log; Type: COMMENT; Schema: auth; Owner: root
--

COMMENT ON TABLE auth.auth_log IS 'Лог для того, где какой пользователь и когда был';


--
-- Name: auth_log_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.auth_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_log_id_seq OWNER TO root;

--
-- Name: auth_log_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.auth_log_id_seq OWNED BY auth.auth_log.id;


--
-- Name: auth_permission; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE auth.auth_permission OWNER TO root;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_permission_id_seq OWNER TO root;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.auth_permission_id_seq OWNED BY auth.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: auth; Owner: django_auth_user
--

CREATE TABLE auth.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30),
    last_name character varying(150),
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    where_come character varying
);


ALTER TABLE auth.auth_user OWNER TO django_auth_user;

--
-- Name: auth_user_groups; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE auth.auth_user_groups OWNER TO root;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_user_groups_id_seq OWNER TO root;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.auth_user_groups_id_seq OWNED BY auth.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: auth; Owner: django_auth_user
--

CREATE SEQUENCE auth.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_user_id_seq OWNER TO django_auth_user;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: django_auth_user
--

ALTER SEQUENCE auth.auth_user_id_seq OWNED BY auth.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth.auth_user_user_permissions OWNER TO root;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.auth_user_user_permissions_id_seq OWNER TO root;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.auth_user_user_permissions_id_seq OWNED BY auth.auth_user_user_permissions.id;


--
-- Name: authtoken_token; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.authtoken_token (
    user_id bigint,
    key character varying(40) NOT NULL,
    created timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE auth.authtoken_token OWNER TO root;

--
-- Name: django_admin_log; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE auth.django_admin_log OWNER TO root;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.django_admin_log_id_seq OWNER TO root;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.django_admin_log_id_seq OWNED BY auth.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE auth.django_content_type OWNER TO root;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.django_content_type_id_seq OWNER TO root;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.django_content_type_id_seq OWNED BY auth.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE auth.django_migrations OWNER TO root;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: auth; Owner: root
--

CREATE SEQUENCE auth.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.django_migrations_id_seq OWNER TO root;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: root
--

ALTER SEQUENCE auth.django_migrations_id_seq OWNED BY auth.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: auth; Owner: root
--

CREATE TABLE auth.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE auth.django_session OWNER TO root;

--
-- Name: whoami; Type: VIEW; Schema: auth; Owner: root
--

CREATE VIEW auth.whoami AS
 SELECT 1 AS id,
    SESSION_USER AS "session_user";


ALTER TABLE auth.whoami OWNER TO root;

--
-- Name: entity; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.entity (
    entity_id integer NOT NULL,
    rentity_type_id integer,
    ts_deleted timestamp without time zone,
    user_deleted character varying(50),
    chatroom_uuid uuid,
    ts_created timestamp without time zone,
    user_created character varying(50)
);


ALTER TABLE pls.entity OWNER TO root;

--
-- Name: COLUMN entity.rentity_type_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity.rentity_type_id IS 'ref_entity_type';


--
-- Name: COLUMN entity.ts_deleted; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity.ts_deleted IS 'пометка, что сущность удалена в корзину';


--
-- Name: COLUMN entity.chatroom_uuid; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity.chatroom_uuid IS 'ссылка на чат в мессенджере';


--
-- Name: entity_attr; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.entity_attr (
    entity_attr_id integer NOT NULL,
    rattr_id integer,
    entity_id integer,
    entity_attr_value character varying
);


ALTER TABLE pls.entity_attr OWNER TO root;

--
-- Name: ref_attr; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_attr (
    rattr_id integer NOT NULL,
    rattr_name character varying(255),
    rattr_type pls.attr_type,
    rattr_label character varying(255),
    rattr_required boolean,
    rattr_system boolean,
    rattr_group_id integer,
    rattr_no smallint,
    rattr_view boolean,
    rattr_multilple boolean
);


ALTER TABLE pls.ref_attr OWNER TO root;

--
-- Name: COLUMN ref_attr.rattr_label; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_label IS 'отображаемое имя';


--
-- Name: COLUMN ref_attr.rattr_required; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_required IS 'обязательный';


--
-- Name: COLUMN ref_attr.rattr_system; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_system IS 'служебный';


--
-- Name: COLUMN ref_attr.rattr_group_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_group_id IS 'группа атрибутов';


--
-- Name: COLUMN ref_attr.rattr_no; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_no IS 'порядковый номер';


--
-- Name: COLUMN ref_attr.rattr_view; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_view IS 'это атрибут используется для отображения и идентификации сущности';


--
-- Name: COLUMN ref_attr.rattr_multilple; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr.rattr_multilple IS 'сущность может иметь несколько значений (копий) этого атрибута. Например, у укандидата несколько образований.';


--
-- Name: ref_entity_type; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_entity_type (
    rentity_type_id integer NOT NULL,
    rentity_type_name character varying(255),
    rentity_type_label character varying(255),
    rroute_id integer
);


ALTER TABLE pls.ref_entity_type OWNER TO root;

--
-- Name: COLUMN ref_entity_type.rroute_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_entity_type.rroute_id IS 'указатель маршрута, там будет с какого этапа начинается';


--
-- Name: candidate_view_list; Type: VIEW; Schema: pls; Owner: root
--

CREATE VIEW pls.candidate_view_list AS
 SELECT s.entity_id,
    string_agg((s.rattr_label)::text, ';'::text) AS label_list,
    string_agg((s.entity_attr_value)::text, ';'::text) AS attr_list
   FROM ( SELECT ent.entity_id,
            ea.entity_attr_value,
            ra.rattr_label
           FROM (((pls.entity ent
             LEFT JOIN pls.ref_entity_type ret ON ((ret.rentity_type_id = ent.rentity_type_id)))
             LEFT JOIN pls.entity_attr ea ON ((ea.entity_id = ent.entity_id)))
             LEFT JOIN pls.ref_attr ra ON ((ra.rattr_id = ea.rattr_id)))
          WHERE (((ret.rentity_type_name)::text = 'candidate'::text) AND (ra.rattr_view = true))
          ORDER BY ent.entity_id, ra.rattr_no) s
  GROUP BY s.entity_id;


ALTER TABLE pls.candidate_view_list OWNER TO root;

--
-- Name: entity_attr_ent_attr_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.entity_attr_ent_attr_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.entity_attr_ent_attr_id_seq OWNER TO root;

--
-- Name: entity_attr_ent_attr_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.entity_attr_ent_attr_id_seq OWNED BY pls.entity_attr.entity_attr_id;


--
-- Name: entity_attr_log; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.entity_attr_log (
    entity_attr_log_id integer NOT NULL,
    rattr_id integer,
    entity_id integer,
    entity_attr_value character varying,
    ts_change timestamp without time zone,
    user_change character varying(50)
);


ALTER TABLE pls.entity_attr_log OWNER TO root;

--
-- Name: COLUMN entity_attr_log.entity_attr_value; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_attr_log.entity_attr_value IS 'предыдущее (до обновления) значение атрибута';


--
-- Name: entity_attr_log_entity_attr_log_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.entity_attr_log_entity_attr_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.entity_attr_log_entity_attr_log_id_seq OWNER TO root;

--
-- Name: entity_attr_log_entity_attr_log_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.entity_attr_log_entity_attr_log_id_seq OWNED BY pls.entity_attr_log.entity_attr_log_id;


--
-- Name: entity_ent_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.entity_ent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.entity_ent_id_seq OWNER TO root;

--
-- Name: entity_ent_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.entity_ent_id_seq OWNED BY pls.entity.entity_id;


--
-- Name: entity_entity; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.entity_entity (
    ent_ent_id integer NOT NULL,
    entity_id integer,
    entity_id_link integer,
    ts_created timestamp without time zone,
    ts_deleted timestamp without time zone,
    user_created character varying(50),
    user_deleted character varying(50)
);


ALTER TABLE pls.entity_entity OWNER TO root;

--
-- Name: TABLE entity_entity; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.entity_entity IS 'Связь двух сущностей';


--
-- Name: COLUMN entity_entity.ent_ent_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_entity.ent_ent_id IS 'уникальный ключ связки';


--
-- Name: COLUMN entity_entity.entity_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_entity.entity_id IS 'сущность_родитель';


--
-- Name: COLUMN entity_entity.entity_id_link; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_entity.entity_id_link IS 'сущность_дитя';


--
-- Name: entity_entity_ent_ent_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.entity_entity_ent_ent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.entity_entity_ent_ent_id_seq OWNER TO root;

--
-- Name: entity_entity_ent_ent_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.entity_entity_ent_ent_id_seq OWNED BY pls.entity_entity.ent_ent_id;


--
-- Name: entity_group; Type: VIEW; Schema: pls; Owner: root
--

CREATE VIEW pls.entity_group AS
 SELECT ea.entity_attr_value AS entity_id,
    count(*) AS vacancy,
    1 AS vacancy_move,
    1 AS vacancy_out
   FROM ((pls.ref_entity_type ret
     LEFT JOIN pls.entity e ON ((e.rentity_type_id = ret.rentity_type_id)))
     LEFT JOIN pls.entity_attr ea ON (((ea.entity_id = e.entity_id) AND (ea.rattr_id = 11))))
  GROUP BY ea.entity_attr_value;


ALTER TABLE pls.entity_group OWNER TO root;

--
-- Name: entity_stage; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.entity_stage (
    entity_stage_id integer NOT NULL,
    rstage_id integer,
    entity_id integer,
    ts_action timestamp without time zone,
    raction_id integer,
    user_action character varying(255),
    ts_created timestamp without time zone,
    user_created character varying(255),
    entity_stage_entity_id integer
);


ALTER TABLE pls.entity_stage OWNER TO root;

--
-- Name: COLUMN entity_stage.rstage_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_stage.rstage_id IS 'из справочника этапов';


--
-- Name: COLUMN entity_stage.entity_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_stage.entity_id IS 'какая сущность соединена с этим этапом';


--
-- Name: COLUMN entity_stage.ts_action; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_stage.ts_action IS 'метка времени выполнения действия';


--
-- Name: COLUMN entity_stage.raction_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_stage.raction_id IS 'какое действие было выбрано на этом этапе';


--
-- Name: COLUMN entity_stage.user_action; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.entity_stage.user_action IS 'какой пользователь  djnago_auth выбрал действие';


--
-- Name: entity_stage_entity_stage_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.entity_stage_entity_stage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.entity_stage_entity_stage_id_seq OWNER TO root;

--
-- Name: entity_stage_entity_stage_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.entity_stage_entity_stage_id_seq OWNED BY pls.entity_stage.entity_stage_id;


--
-- Name: entity_types_ent_type_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.entity_types_ent_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.entity_types_ent_type_id_seq OWNER TO root;

--
-- Name: entity_types_ent_type_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.entity_types_ent_type_id_seq OWNED BY pls.ref_entity_type.rentity_type_id;


--
-- Name: entity_view_list; Type: VIEW; Schema: pls; Owner: root
--

CREATE VIEW pls.entity_view_list AS
 SELECT s.entity_id,
    string_agg((s.rattr_label)::text, ';'::text) AS attr_list,
    string_agg((s.entity_attr_value)::text, ';'::text) AS label_list,
    btrim(string_agg((s.entity_attr_value)::text, ' '::text)) AS attr_value_txt
   FROM ( SELECT ent.entity_id,
            ea.entity_attr_value,
            ra.rattr_label
           FROM (((pls.entity ent
             LEFT JOIN pls.ref_entity_type ret ON ((ret.rentity_type_id = ent.rentity_type_id)))
             LEFT JOIN pls.entity_attr ea ON ((ea.entity_id = ent.entity_id)))
             LEFT JOIN pls.ref_attr ra ON ((ra.rattr_id = ea.rattr_id)))
          WHERE (ra.rattr_view = true)
          ORDER BY ent.entity_id, ra.rattr_no) s
  GROUP BY s.entity_id;


ALTER TABLE pls.entity_view_list OWNER TO root;

--
-- Name: ref_action; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_action (
    raction_id integer DEFAULT nextval(('pls.ref_action_raction_id_seq'::text)::regclass) NOT NULL,
    raction_name character varying(255),
    raction_label character varying(255)
);


ALTER TABLE pls.ref_action OWNER TO root;

--
-- Name: ref_action_raction_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_action_raction_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE pls.ref_action_raction_id_seq OWNER TO root;

--
-- Name: ref_actor; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_actor (
    ractor_id integer NOT NULL,
    ractor_auth_group_name character varying(255),
    ractor_label character varying(255),
    ractor_name character varying(255)
);


ALTER TABLE pls.ref_actor OWNER TO root;

--
-- Name: TABLE ref_actor; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_actor IS 'Список основных ролей в приложении. Привязка к ролям в django_auth';


--
-- Name: COLUMN ref_actor.ractor_auth_group_name; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_actor.ractor_auth_group_name IS 'соответствие auth.auth_groups.name';


--
-- Name: ref_actor_ractor_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_actor_ractor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_actor_ractor_id_seq OWNER TO root;

--
-- Name: ref_actor_ractor_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_actor_ractor_id_seq OWNED BY pls.ref_actor.ractor_id;


--
-- Name: ref_attr_actor; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_attr_actor (
    rattr_actor_id integer NOT NULL,
    rattr_id integer,
    ractor_id integer,
    rstage_id integer
);


ALTER TABLE pls.ref_attr_actor OWNER TO root;

--
-- Name: TABLE ref_attr_actor; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_attr_actor IS 'Какой атрибут на каком этапе может редактирвоать';


--
-- Name: COLUMN ref_attr_actor.rattr_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_actor.rattr_id IS 'какой атрибут';


--
-- Name: COLUMN ref_attr_actor.ractor_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_actor.ractor_id IS 'какой актор';


--
-- Name: COLUMN ref_attr_actor.rstage_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_actor.rstage_id IS 'на каком конкретном этапе (NULL=на всех)';


--
-- Name: ref_attr_actor_rattr_actor_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_attr_actor_rattr_actor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_attr_actor_rattr_actor_id_seq OWNER TO root;

--
-- Name: ref_attr_actor_rattr_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_attr_actor_rattr_actor_id_seq OWNED BY pls.ref_attr_actor.rattr_actor_id;


--
-- Name: ref_attr_dict; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_attr_dict (
    rattr_dict_id integer NOT NULL,
    rattr_id integer,
    rattr_dict_no smallint,
    rattr_dict_name character varying(255),
    rattr_dict_label character varying(255)
);


ALTER TABLE pls.ref_attr_dict OWNER TO root;

--
-- Name: COLUMN ref_attr_dict.rattr_dict_no; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_dict.rattr_dict_no IS 'порядковый номер при отображении';


--
-- Name: COLUMN ref_attr_dict.rattr_dict_name; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_dict.rattr_dict_name IS '!! После использования нельзя редактировать. Именно это поле записывается в значения атрибутов';


--
-- Name: COLUMN ref_attr_dict.rattr_dict_label; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_dict.rattr_dict_label IS 'Отображаемый текст варианта выбора';


--
-- Name: ref_attr_dict_rattr_dict_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_attr_dict_rattr_dict_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_attr_dict_rattr_dict_id_seq OWNER TO root;

--
-- Name: ref_attr_dict_rattr_dict_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_attr_dict_rattr_dict_id_seq OWNED BY pls.ref_attr_dict.rattr_dict_id;


--
-- Name: ref_attr_group; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_attr_group (
    rattr_group_id integer NOT NULL,
    rattr_group_name character varying(255),
    rattr_group_label character varying(255),
    rattr_group_no smallint,
    rentity_type_id integer
);


ALTER TABLE pls.ref_attr_group OWNER TO root;

--
-- Name: COLUMN ref_attr_group.rattr_group_no; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_group.rattr_group_no IS 'порядковый номер для отображения';


--
-- Name: COLUMN ref_attr_group.rentity_type_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_group.rentity_type_id IS 'указатель какой тип сущности обладает этой группа атрибутов';


--
-- Name: ref_attr_group_actor; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_attr_group_actor (
    rattr_group_actor_id integer NOT NULL,
    rattr_group_id integer,
    ractor_id integer,
    can_edit boolean DEFAULT false,
    can_read boolean DEFAULT true
);


ALTER TABLE pls.ref_attr_group_actor OWNER TO root;

--
-- Name: COLUMN ref_attr_group_actor.rattr_group_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_group_actor.rattr_group_id IS 'в какой группе атрибутов';


--
-- Name: COLUMN ref_attr_group_actor.ractor_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_group_actor.ractor_id IS 'какой актор (роль)';


--
-- Name: COLUMN ref_attr_group_actor.can_edit; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_group_actor.can_edit IS 'может редактировать все атрибуты в этой группе (по умолчанию нет)';


--
-- Name: COLUMN ref_attr_group_actor.can_read; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_group_actor.can_read IS 'может видеть атрибуты в этой группе (по умолчанию да)';


--
-- Name: ref_attr_group_actor_rattr_group_actor_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_attr_group_actor_rattr_group_actor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_attr_group_actor_rattr_group_actor_id_seq OWNER TO root;

--
-- Name: ref_attr_group_actor_rattr_group_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_attr_group_actor_rattr_group_actor_id_seq OWNED BY pls.ref_attr_group_actor.rattr_group_actor_id;


--
-- Name: ref_attr_group_rag_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_attr_group_rag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_attr_group_rag_id_seq OWNER TO root;

--
-- Name: ref_attr_group_rag_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_attr_group_rag_id_seq OWNED BY pls.ref_attr_group.rattr_group_id;


--
-- Name: ref_attr_outer; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_attr_outer (
    rattr_outer_id integer NOT NULL,
    rattr_id integer,
    rattr_outer_name character varying(255),
    rattr_outer_label character varying(255),
    rattr_outer_fields character varying(255),
    rattr_outer_path character varying(255),
    rattr_outer_key character varying(255),
    rattr_outer_sort character varying(255)
);


ALTER TABLE pls.ref_attr_outer OWNER TO root;

--
-- Name: COLUMN ref_attr_outer.rattr_outer_fields; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_fields IS 'какие поля показывать при выборе из справочника';


--
-- Name: COLUMN ref_attr_outer.rattr_outer_path; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_path IS 'где находится этот справочник';


--
-- Name: COLUMN ref_attr_outer.rattr_outer_key; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_key IS 'какое поле записывается в значение атрибута';


--
-- Name: COLUMN ref_attr_outer.rattr_outer_sort; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_attr_outer.rattr_outer_sort IS 'по каким полям сортируется при отображении справочника';


--
-- Name: ref_attr_outer_rattr_outer_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_attr_outer_rattr_outer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_attr_outer_rattr_outer_id_seq OWNER TO root;

--
-- Name: ref_attr_outer_rattr_outer_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_attr_outer_rattr_outer_id_seq OWNED BY pls.ref_attr_outer.rattr_outer_id;


--
-- Name: ref_attr_rattr_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_attr_rattr_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_attr_rattr_id_seq OWNER TO root;

--
-- Name: ref_attr_rattr_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_attr_rattr_id_seq OWNED BY pls.ref_attr.rattr_id;


--
-- Name: ref_entity_filter; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_entity_filter (
    rentity_filter_id bigint DEFAULT nextval(('pls.ref_entity_filter_rentity_filter_id_seq'::text)::regclass) NOT NULL,
    rentity_type_id integer,
    rentity_filter_name character varying,
    rentity_filter_label character varying
);


ALTER TABLE pls.ref_entity_filter OWNER TO root;

--
-- Name: TABLE ref_entity_filter; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_entity_filter IS 'набор фильтров для определенного типа сущностей';


--
-- Name: COLUMN ref_entity_filter.rentity_type_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_entity_filter.rentity_type_id IS 'у какого сущности';


--
-- Name: ref_entity_filter_attr; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_entity_filter_attr (
    ref_entity_filter_attr_id bigint DEFAULT nextval(('pls.ref_entity_filter_attr_ref_entity_filter_attr_id_seq'::text)::regclass) NOT NULL,
    rattr_id integer,
    rentity_filter_id integer
);


ALTER TABLE pls.ref_entity_filter_attr OWNER TO root;

--
-- Name: TABLE ref_entity_filter_attr; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_entity_filter_attr IS 'список атрибутов для набора фильтров';


--
-- Name: COLUMN ref_entity_filter_attr.rattr_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_entity_filter_attr.rattr_id IS 'какой атрибут';


--
-- Name: COLUMN ref_entity_filter_attr.rentity_filter_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_entity_filter_attr.rentity_filter_id IS 'к какому набору фильтров';


--
-- Name: ref_entity_filter_attr_ref_entity_filter_attr_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_entity_filter_attr_ref_entity_filter_attr_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_entity_filter_attr_ref_entity_filter_attr_id_seq OWNER TO root;

--
-- Name: ref_entity_filter_rentity_filter_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_entity_filter_rentity_filter_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_entity_filter_rentity_filter_id_seq OWNER TO root;

--
-- Name: ref_route; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_route (
    rroute_id integer NOT NULL,
    rroute_name character varying(255),
    rroute_label character varying(255),
    rstage_id_start integer
);
ALTER TABLE ONLY pls.ref_route ALTER COLUMN rroute_id SET STATISTICS 0;


ALTER TABLE pls.ref_route OWNER TO root;

--
-- Name: TABLE ref_route; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_route IS 'Маршрут, который объединяет несколько этапов';


--
-- Name: COLUMN ref_route.rstage_id_start; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_route.rstage_id_start IS 'Этап, с которого начинается этот маршрут';


--
-- Name: ref_route_rroute_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_route_rroute_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_route_rroute_id_seq OWNER TO root;

--
-- Name: ref_route_rroute_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_route_rroute_id_seq OWNED BY pls.ref_route.rroute_id;


--
-- Name: ref_stage; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_stage (
    rstage_id integer NOT NULL,
    rstage_name character varying(255),
    rstage_label character varying(255),
    rstage_wait_others boolean,
    rroute_id integer NOT NULL,
    rentity_type_id integer
);


ALTER TABLE pls.ref_stage OWNER TO root;

--
-- Name: COLUMN ref_stage.rstage_wait_others; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage.rstage_wait_others IS 'когда этап переходит на этот, если True, то всегда проверяет, есть ли потенциальные другие этапы, которые в этот переходят. Если такие есть - ждет. Если таких нет (или они закончились и перешли в этот), то включает этот этап.';


--
-- Name: COLUMN ref_stage.rroute_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage.rroute_id IS 'маршрут, который объединяет все этапы';


--
-- Name: COLUMN ref_stage.rentity_type_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage.rentity_type_id IS 'тип сущности, которая должна создаваться при этом этапе';


--
-- Name: ref_stage_action; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_stage_action (
    rstage_action_id integer NOT NULL,
    rstage_id integer,
    raction_id integer
);


ALTER TABLE pls.ref_stage_action OWNER TO root;

--
-- Name: TABLE ref_stage_action; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_stage_action IS 'на этапе можно совершить разные действия разным акторам';


--
-- Name: COLUMN ref_stage_action.rstage_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage_action.rstage_id IS 'на каком этапе';


--
-- Name: COLUMN ref_stage_action.raction_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage_action.raction_id IS 'какое действие может выполнить';


--
-- Name: ref_stage_action_actor; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_stage_action_actor (
    rstage_action_actor_id integer NOT NULL,
    rstage_action_id integer,
    ractor_id integer
);


ALTER TABLE pls.ref_stage_action_actor OWNER TO root;

--
-- Name: TABLE ref_stage_action_actor; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON TABLE pls.ref_stage_action_actor IS 'какое действие на каком этапе может выполнить какой актор';


--
-- Name: COLUMN ref_stage_action_actor.rstage_action_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage_action_actor.rstage_action_id IS 'указатель на этап и действие';


--
-- Name: COLUMN ref_stage_action_actor.ractor_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage_action_actor.ractor_id IS 'указатель на актора';


--
-- Name: ref_stage_action_actor_ref_stage_action_actor_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_stage_action_actor_ref_stage_action_actor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_stage_action_actor_ref_stage_action_actor_id_seq OWNER TO root;

--
-- Name: ref_stage_action_actor_ref_stage_action_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_stage_action_actor_ref_stage_action_actor_id_seq OWNED BY pls.ref_stage_action_actor.rstage_action_actor_id;


--
-- Name: ref_stage_action_stage; Type: TABLE; Schema: pls; Owner: root
--

CREATE TABLE pls.ref_stage_action_stage (
    rstage_action_stage_id integer NOT NULL,
    rstage_action_id integer,
    rstage_id integer
);


ALTER TABLE pls.ref_stage_action_stage OWNER TO root;

--
-- Name: COLUMN ref_stage_action_stage.rstage_action_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage_action_stage.rstage_action_id IS 'после какого действия другого этапа';


--
-- Name: COLUMN ref_stage_action_stage.rstage_id; Type: COMMENT; Schema: pls; Owner: root
--

COMMENT ON COLUMN pls.ref_stage_action_stage.rstage_id IS 'какие новые этапы начинаются (возможна развилка и распаллеливание)';


--
-- Name: ref_stage_actor_ref_stage_actor_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_stage_actor_ref_stage_actor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_stage_actor_ref_stage_actor_id_seq OWNER TO root;

--
-- Name: ref_stage_actor_ref_stage_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_stage_actor_ref_stage_actor_id_seq OWNED BY pls.ref_stage_action.rstage_action_id;


--
-- Name: ref_stage_actor_stage_rstage_action_stage_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_stage_actor_stage_rstage_action_stage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_stage_actor_stage_rstage_action_stage_id_seq OWNER TO root;

--
-- Name: ref_stage_actor_stage_rstage_action_stage_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_stage_actor_stage_rstage_action_stage_id_seq OWNED BY pls.ref_stage_action_stage.rstage_action_stage_id;


--
-- Name: ref_stage_rstage_id_seq; Type: SEQUENCE; Schema: pls; Owner: root
--

CREATE SEQUENCE pls.ref_stage_rstage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pls.ref_stage_rstage_id_seq OWNER TO root;

--
-- Name: ref_stage_rstage_id_seq; Type: SEQUENCE OWNED BY; Schema: pls; Owner: root
--

ALTER SEQUENCE pls.ref_stage_rstage_id_seq OWNED BY pls.ref_stage.rstage_id;


--
-- Name: request_view_list; Type: VIEW; Schema: pls; Owner: root
--

CREATE VIEW pls.request_view_list AS
 SELECT s.entity_id,
    string_agg((s.rattr_label)::text, ';'::text) AS label_list,
    string_agg((s.entity_attr_value)::text, ';'::text) AS attr_list
   FROM ( SELECT ent.entity_id,
            ea.entity_attr_value,
            ra.rattr_label
           FROM (((pls.entity ent
             LEFT JOIN pls.ref_entity_type ret ON ((ret.rentity_type_id = ent.rentity_type_id)))
             LEFT JOIN pls.entity_attr ea ON ((ea.entity_id = ent.entity_id)))
             LEFT JOIN pls.ref_attr ra ON ((ra.rattr_id = ea.rattr_id)))
          WHERE (((ret.rentity_type_name)::text = 'request'::text) AND (ra.rattr_view = true))
          ORDER BY ent.entity_id, ra.rattr_no) s
  GROUP BY s.entity_id;


ALTER TABLE pls.request_view_list OWNER TO root;

--
-- Name: stage_action_check; Type: VIEW; Schema: pls; Owner: root
--

CREATE VIEW pls.stage_action_check AS
 SELECT rss.rstage_name AS on_that_stage,
    ract.raction_name AS pressing_that_action,
    rs.rstage_name AS leads_to_that_stage,
    rsa.rstage_action_id,
    rsa.raction_id,
    rsa.rstage_id AS rstage_id_1,
    rsas.rstage_id AS rstage_id_2
   FROM ((((pls.ref_stage_action rsa
     LEFT JOIN pls.ref_stage rss ON ((rss.rstage_id = rsa.rstage_id)))
     LEFT JOIN pls.ref_action ract ON ((ract.raction_id = rsa.raction_id)))
     LEFT JOIN pls.ref_stage_action_stage rsas ON ((rsa.rstage_action_id = rsas.rstage_action_id)))
     LEFT JOIN pls.ref_stage rs ON ((rs.rstage_id = rsas.rstage_id)))
  ORDER BY rss.rroute_id, rss.rstage_name;


ALTER TABLE pls.stage_action_check OWNER TO root;

--
-- Name: test; Type: TABLE; Schema: test; Owner: please_user
--

CREATE TABLE test.test (
    id bigint NOT NULL,
    name character varying(100)
);


ALTER TABLE test.test OWNER TO please_user;

--
-- Name: test_ss_seq; Type: SEQUENCE; Schema: test; Owner: please_user
--

CREATE SEQUENCE test.test_ss_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.test_ss_seq OWNER TO please_user;

--
-- Name: test_ss_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: please_user
--

ALTER SEQUENCE test.test_ss_seq OWNED BY test.test.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group ALTER COLUMN id SET DEFAULT nextval('auth.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('auth.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_log id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_log ALTER COLUMN id SET DEFAULT nextval('auth.auth_log_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_permission ALTER COLUMN id SET DEFAULT nextval('auth.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: auth; Owner: django_auth_user
--

ALTER TABLE ONLY auth.auth_user ALTER COLUMN id SET DEFAULT nextval('auth.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('auth.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('auth.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_admin_log ALTER COLUMN id SET DEFAULT nextval('auth.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_content_type ALTER COLUMN id SET DEFAULT nextval('auth.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_migrations ALTER COLUMN id SET DEFAULT nextval('auth.django_migrations_id_seq'::regclass);


--
-- Name: entity entity_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity ALTER COLUMN entity_id SET DEFAULT nextval('pls.entity_ent_id_seq'::regclass);


--
-- Name: entity_attr entity_attr_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr ALTER COLUMN entity_attr_id SET DEFAULT nextval('pls.entity_attr_ent_attr_id_seq'::regclass);


--
-- Name: entity_attr_log entity_attr_log_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr_log ALTER COLUMN entity_attr_log_id SET DEFAULT nextval('pls.entity_attr_log_entity_attr_log_id_seq'::regclass);


--
-- Name: entity_entity ent_ent_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_entity ALTER COLUMN ent_ent_id SET DEFAULT nextval('pls.entity_entity_ent_ent_id_seq'::regclass);


--
-- Name: entity_stage entity_stage_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_stage ALTER COLUMN entity_stage_id SET DEFAULT nextval('pls.entity_stage_entity_stage_id_seq'::regclass);


--
-- Name: ref_actor ractor_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_actor ALTER COLUMN ractor_id SET DEFAULT nextval('pls.ref_actor_ractor_id_seq'::regclass);


--
-- Name: ref_attr rattr_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr ALTER COLUMN rattr_id SET DEFAULT nextval('pls.ref_attr_rattr_id_seq'::regclass);


--
-- Name: ref_attr_actor rattr_actor_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_actor ALTER COLUMN rattr_actor_id SET DEFAULT nextval('pls.ref_attr_actor_rattr_actor_id_seq'::regclass);


--
-- Name: ref_attr_dict rattr_dict_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_dict ALTER COLUMN rattr_dict_id SET DEFAULT nextval('pls.ref_attr_dict_rattr_dict_id_seq'::regclass);


--
-- Name: ref_attr_group rattr_group_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group ALTER COLUMN rattr_group_id SET DEFAULT nextval('pls.ref_attr_group_rag_id_seq'::regclass);


--
-- Name: ref_attr_group_actor rattr_group_actor_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group_actor ALTER COLUMN rattr_group_actor_id SET DEFAULT nextval('pls.ref_attr_group_actor_rattr_group_actor_id_seq'::regclass);


--
-- Name: ref_attr_outer rattr_outer_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_outer ALTER COLUMN rattr_outer_id SET DEFAULT nextval('pls.ref_attr_outer_rattr_outer_id_seq'::regclass);


--
-- Name: ref_entity_type rentity_type_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_type ALTER COLUMN rentity_type_id SET DEFAULT nextval('pls.entity_types_ent_type_id_seq'::regclass);


--
-- Name: ref_route rroute_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_route ALTER COLUMN rroute_id SET DEFAULT nextval('pls.ref_route_rroute_id_seq'::regclass);


--
-- Name: ref_stage rstage_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage ALTER COLUMN rstage_id SET DEFAULT nextval('pls.ref_stage_rstage_id_seq'::regclass);


--
-- Name: ref_stage_action rstage_action_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action ALTER COLUMN rstage_action_id SET DEFAULT nextval('pls.ref_stage_actor_ref_stage_actor_id_seq'::regclass);


--
-- Name: ref_stage_action_actor rstage_action_actor_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_actor ALTER COLUMN rstage_action_actor_id SET DEFAULT nextval('pls.ref_stage_action_actor_ref_stage_action_actor_id_seq'::regclass);


--
-- Name: ref_stage_action_stage rstage_action_stage_id; Type: DEFAULT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_stage ALTER COLUMN rstage_action_stage_id SET DEFAULT nextval('pls.ref_stage_actor_stage_rstage_action_stage_id_seq'::regclass);


--
-- Name: test id; Type: DEFAULT; Schema: test; Owner: please_user
--

ALTER TABLE ONLY test.test ALTER COLUMN id SET DEFAULT nextval('test.test_ss_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.auth_group (id, name) FROM stdin;
1	pls_admin
2	pls_recruter
3	pls_ceo
4	pls_div_head
5	pls_div
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_log; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.auth_log ("user", service_name, user_ip_address, id, latest_ts) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.auth_permission (id, name, content_type_id, codename) FROM stdin;
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: auth; Owner: django_auth_user
--

COPY auth.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, where_come) FROM stdin;
1	pbkdf2_sha256$150000$ql3ScjDnBDPh$mALMISuTfUcYuplN+x4xRlPydyrYMGoH8cBVMHORUHg=	\N	t	please_user				t	t	2024-05-16 18:55:06.841861+03	\N
2	pbkdf2_sha256$150000$pneS3BMb4mKo$2xTEwHMjVAdZGkhlamxy1AvBo99FjnV6yF3J9s6sBMM=	\N	t	test				t	t	2024-05-16 18:56:20.257762+03	\N
4	$2a$10$epqOqgUOB.51IYh7GBZE9.qO7tunLa1rD8lBmgbbnO2MZq5bZeMvC	\N	f	masterrus417	\N	\N	masterrus417@yandex.ru	f	t	2024-05-17 17:10:16.029+03	node js backend
5	$2a$10$izCgjPezWseyiyU7I92uSep6lDRGSNk6Ir5iiVWr9KQgOQ6MgOOoW	\N	f	masterrus418	\N	\N	masterrus417@zib.ru	f	t	2024-05-17 17:13:28.338+03	node js backend
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.auth_user_groups (id, user_id, group_id) FROM stdin;
1	2	1
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.authtoken_token (user_id, key, created) FROM stdin;
1	53f6b053dcd4f7f39471b0910f0e22fcc2fd36d3	2024-05-15 15:30:21.721437+03
2	1fb726d547d7b6abd5bc733ad8adb053f6715308	2024-05-15 16:08:05.39663+03
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2024-05-15 15:33:46.093534+03	2	please_user	1	[{"added": {}}]	1	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.django_content_type (id, app_label, model) FROM stdin;
1	auth	user
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.django_migrations (id, app, name, applied) FROM stdin;
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: auth; Owner: root
--

COPY auth.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Data for Name: entity; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.entity (entity_id, rentity_type_id, ts_deleted, user_deleted, chatroom_uuid, ts_created, user_created) FROM stdin;
136	2	\N	\N	\N	2024-05-28 18:34:57.170468	test
137	7	\N	\N	\N	2024-05-28 18:34:57.237735	test
138	2	\N	\N	\N	2024-05-28 18:35:42.524962	test
139	7	\N	\N	\N	2024-05-28 18:35:42.597677	test
140	2	\N	\N	\N	2024-05-28 18:35:44.90864	test
141	7	\N	\N	\N	2024-05-28 18:35:44.986315	test
142	2	\N	\N	\N	2024-05-28 18:36:06.865991	please_user
143	7	\N	\N	\N	2024-05-28 18:36:06.971094	please_user
144	2	\N	\N	\N	2024-05-28 18:43:33.751795	test
145	7	\N	\N	\N	2024-05-28 18:43:33.839611	test
84	2	\N	\N	\N	\N	\N
85	2	\N	\N	\N	\N	\N
86	4	\N	\N	\N	\N	\N
87	2	\N	\N	\N	\N	\N
40	4	\N	\N	\N	\N	\N
41	2	\N	\N	\N	\N	\N
42	2	\N	\N	\N	\N	\N
43	2	\N	\N	\N	\N	\N
44	2	\N	\N	\N	\N	\N
45	4	\N	\N	\N	\N	\N
46	4	\N	\N	\N	\N	\N
47	4	\N	\N	\N	\N	\N
48	2	\N	\N	\N	\N	\N
49	4	\N	\N	\N	\N	\N
50	2	\N	\N	\N	\N	\N
51	2	\N	\N	\N	\N	\N
52	4	\N	\N	\N	\N	\N
54	2	\N	\N	\N	\N	\N
55	2	\N	\N	\N	\N	\N
56	2	\N	\N	\N	\N	\N
58	2	\N	\N	\N	\N	\N
146	2	\N	\N	\N	2024-05-28 18:44:06.860927	test
147	7	\N	\N	\N	2024-05-28 18:44:06.959268	test
148	2	\N	\N	\N	2024-05-28 18:44:25.926176	please_user
149	7	\N	\N	\N	2024-05-28 18:44:26.006459	please_user
150	2	\N	\N	\N	2024-05-28 18:44:37.487468	please_user
151	7	\N	\N	\N	2024-05-28 18:44:37.576065	please_user
88	2	2024-05-07 07:26:02.731718		\N	\N	\N
89	4	\N	\N	\N	\N	\N
57	2	\N	\N	\N	2024-03-05 03:00:00	admin
53	4	\N	\N	\N	2024-05-01 15:49:41	please_test
90	2	\N	\N	\N	2024-05-17 16:45:28.429	masterrus417
152	2	\N	\N	\N	2024-05-28 18:48:47.117504	please_user
153	7	\N	\N	\N	2024-05-28 18:48:47.212561	please_user
91	2	2024-05-28 13:28:19.002856	test	\N	2024-05-18 11:21:36.521	masterrus417
94	2	\N	\N	\N	2024-05-28 15:34:16.183296	\N
95	2	\N	\N	\N	2024-05-28 15:35:22.072434	test
96	2	\N	\N	\N	2024-05-28 15:35:52.483362	test
97	2	\N	\N	\N	2024-05-28 15:39:21.945031	test
98	2	\N	\N	\N	2024-05-28 15:54:15.118229	test
99	2	\N	\N	\N	2024-05-28 15:54:47.267201	test
100	2	\N	\N	\N	2024-05-28 15:54:48.596896	test
101	2	\N	\N	\N	2024-05-28 16:03:00.50765	test
102	2	\N	\N	\N	2024-05-28 16:03:47.800031	test
103	2	\N	\N	\N	2024-05-28 16:03:56.723919	test
104	2	\N	\N	\N	2024-05-28 16:12:20.638096	test
105	2	\N	\N	\N	2024-05-28 16:30:35.503388	test
106	2	\N	\N	\N	2024-05-28 17:08:42.56134	test
107	2	\N	\N	\N	2024-05-28 17:09:49.835012	test
108	2	\N	\N	\N	2024-05-28 17:13:10.963417	test
109	2	\N	\N	\N	2024-05-28 17:17:01.070908	test
110	2	\N	\N	\N	2024-05-28 17:17:02.580678	test
111	2	\N	\N	\N	2024-05-28 17:17:17.865071	test
112	2	\N	\N	\N	2024-05-28 17:17:19.88401	test
113	2	\N	\N	\N	2024-05-28 17:18:05.743572	test
114	2	\N	\N	\N	2024-05-28 17:21:18.786055	test
115	2	\N	\N	\N	2024-05-28 17:22:39.604159	test
116	2	\N	\N	\N	2024-05-28 17:23:04.613501	test
117	2	\N	\N	\N	2024-05-28 17:24:21.407603	test
118	2	\N	\N	\N	2024-05-28 17:31:43.981693	test
119	7	\N	\N	\N	2024-05-28 17:31:44.07453	test
120	2	\N	\N	\N	2024-05-28 17:33:53.904199	test
121	7	\N	\N	\N	2024-05-28 17:33:54.005553	test
122	2	\N	\N	\N	2024-05-28 17:33:55.953601	test
123	7	\N	\N	\N	2024-05-28 17:33:56.03286	test
124	2	\N	\N	\N	2024-05-28 18:18:08.023341	test
125	7	\N	\N	\N	2024-05-28 18:18:08.117535	test
126	2	\N	\N	\N	2024-05-28 18:19:08.735613	test
127	7	\N	\N	\N	2024-05-28 18:19:08.824903	test
128	2	\N	\N	\N	2024-05-28 18:19:12.394854	test
129	7	\N	\N	\N	2024-05-28 18:19:12.468551	test
130	2	\N	\N	\N	2024-05-28 18:19:13.872555	test
131	7	\N	\N	\N	2024-05-28 18:19:13.951602	test
132	2	\N	\N	\N	2024-05-28 18:32:35.617283	test
133	7	\N	\N	\N	2024-05-28 18:32:35.710358	test
134	2	\N	\N	\N	2024-05-28 18:33:17.509248	please_user
135	7	\N	\N	\N	2024-05-28 18:33:17.598447	please_user
154	2	\N	\N	\N	2024-05-28 18:49:22.728775	test
156	2	\N	\N	\N	2024-05-28 18:52:11.123771	please_user
157	7	\N	\N	\N	2024-05-28 18:52:11.213217	please_user
155	7	2024-05-28 18:57:58.310574	test	\N	2024-05-28 13:49:22.812306	test
158	2	\N	\N	\N	2024-05-28 19:09:53.098035	please_user
159	7	\N	\N	\N	2024-05-28 19:09:53.193126	please_user
160	2	\N	\N	\N	2024-05-28 19:11:42.514661	please_user
161	7	\N	\N	\N	2024-05-28 19:11:42.60461	please_user
162	2	\N	\N	\N	2024-05-28 19:15:00.783209	please_user
163	7	\N	\N	\N	2024-05-28 19:15:00.868463	please_user
164	2	\N	\N	\N	2024-05-28 19:16:26.381621	please_user
165	7	\N	\N	\N	2024-05-28 19:16:26.46033	please_user
166	2	\N	\N	\N	2024-05-28 19:19:14.689796	please_user
167	7	\N	\N	\N	2024-05-28 19:19:14.778856	please_user
168	2	\N	\N	\N	2024-05-28 19:20:59.434439	please_user
169	7	\N	\N	\N	2024-05-28 19:20:59.513852	please_user
170	2	\N	\N	\N	2024-05-28 19:21:49.715007	please_user
171	7	\N	\N	\N	2024-05-28 19:21:49.794954	please_user
172	2	\N	\N	\N	2024-05-28 19:22:31.645441	please_user
173	7	\N	\N	\N	2024-05-28 19:22:31.733742	please_user
174	2	\N	\N	\N	2024-05-28 19:24:12.481745	please_user
175	7	\N	\N	\N	2024-05-28 19:24:12.57465	please_user
176	2	\N	\N	\N	2024-05-28 19:25:41.937746	please_user
177	7	\N	\N	\N	2024-05-28 19:25:42.029417	please_user
178	2	\N	\N	\N	2024-05-28 19:26:16.224797	please_user
179	7	\N	\N	\N	2024-05-28 19:26:16.313784	please_user
180	2	\N	\N	\N	2024-05-28 19:28:30.425983	please_user
181	7	\N	\N	\N	2024-05-28 19:28:30.523619	please_user
182	2	\N	\N	\N	2024-05-28 19:31:28.569662	please_user
183	7	\N	\N	\N	2024-05-28 19:31:28.667779	please_user
184	2	\N	\N	\N	2024-05-28 19:40:38.921287	please_user
185	7	\N	\N	\N	2024-05-28 19:40:39.014091	please_user
186	2	\N	\N	\N	2024-05-28 19:42:21.988514	please_user
187	7	\N	\N	\N	2024-05-28 19:42:22.073631	please_user
188	2	\N	\N	\N	2024-05-28 19:43:54.67807	please_user
189	7	\N	\N	\N	2024-05-28 19:43:54.7663	please_user
190	2	\N	\N	\N	2024-05-28 19:44:53.323685	please_user
191	7	\N	\N	\N	2024-05-28 19:44:53.413289	please_user
192	2	\N	\N	\N	2024-05-28 19:45:21.342923	please_user
193	7	\N	\N	\N	2024-05-28 19:45:21.427195	please_user
194	2	\N	\N	\N	2024-05-28 19:46:13.002974	please_user
195	7	\N	\N	\N	2024-05-28 19:46:13.084778	please_user
196	2	\N	\N	\N	2024-05-28 19:48:25.810279	please_user
197	7	\N	\N	\N	2024-05-28 19:48:25.899706	please_user
198	2	\N	\N	\N	2024-05-28 19:50:38.084513	please_user
199	7	\N	\N	\N	2024-05-28 19:50:38.151753	please_user
200	2	\N	\N	\N	2024-05-28 19:52:29.647698	please_user
201	7	\N	\N	\N	2024-05-28 19:52:29.773179	please_user
202	2	\N	\N	\N	2024-05-28 19:53:28.700653	please_user
203	7	\N	\N	\N	2024-05-28 19:53:28.764237	please_user
204	2	\N	\N	\N	2024-05-28 19:54:18.474761	please_user
205	7	\N	\N	\N	2024-05-28 19:54:18.55518	please_user
206	2	\N	\N	\N	2024-05-28 19:55:39.016542	please_user
207	7	\N	\N	\N	2024-05-28 19:55:39.106346	please_user
208	2	\N	\N	\N	2024-05-28 19:58:45.594086	please_user
209	7	\N	\N	\N	2024-05-28 19:58:45.692785	please_user
210	2	\N	\N	\N	2024-05-28 20:00:43.73775	please_user
211	7	\N	\N	\N	2024-05-28 20:00:43.809009	please_user
212	2	\N	\N	\N	2024-05-28 20:02:11.128834	please_user
213	7	\N	\N	\N	2024-05-28 20:02:11.216215	please_user
214	2	\N	\N	\N	2024-05-28 20:04:20.984202	please_user
215	7	\N	\N	\N	2024-05-28 20:04:21.07503	please_user
216	2	\N	\N	\N	2024-05-28 20:08:05.719592	please_user
217	7	\N	\N	\N	2024-05-28 20:08:05.797315	please_user
218	2	\N	\N	\N	2024-05-28 20:09:47.675356	please_user
219	7	\N	\N	\N	2024-05-28 20:09:47.76334	please_user
220	4	\N	\N	\N	2024-05-28 20:11:12.413995	please_user
221	4	\N	\N	\N	2024-05-28 20:11:37.251567	please_user
222	4	\N	\N	\N	2024-05-28 20:12:13.555256	please_user
223	2	\N	\N	\N	2024-05-28 20:12:40.188625	please_user
224	7	\N	\N	\N	2024-05-28 20:12:40.276482	please_user
225	4	\N	\N	\N	2024-05-28 20:13:31.085851	please_user
226	4	\N	\N	\N	2024-05-28 20:31:32.750048	please_user
227	4	\N	\N	\N	2024-05-29 02:02:28.707848	test
228	4	\N	\N	\N	2024-05-29 02:09:15.096537	test
229	4	\N	\N	\N	2024-05-29 02:09:16.91601	test
230	4	\N	\N	\N	2024-05-29 02:09:51.13671	test
231	4	\N	\N	\N	2024-05-29 02:10:21.366222	test
232	4	\N	\N	\N	2024-05-29 02:11:48.004918	test
233	2	\N	\N	\N	2024-05-29 02:23:41.288831	please_user
234	7	\N	\N	\N	2024-05-29 02:23:41.371831	please_user
235	2	\N	\N	\N	2024-05-29 02:24:48.406271	please_user
236	7	\N	\N	\N	2024-05-29 02:24:48.498312	please_user
237	2	\N	\N	\N	2024-05-29 02:25:34.673439	please_user
238	7	\N	\N	\N	2024-05-29 02:25:34.757197	please_user
\.


--
-- Data for Name: entity_attr; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.entity_attr (entity_attr_id, rattr_id, entity_id, entity_attr_value) FROM stdin;
262	30	44	2024-03-17
263	7	44	
264	32	44	
150	85	40	Создана
151	10	40	001-24-0001
265	1	44	Захаров
226	30	42	2024-03-14
227	7	42	
228	32	42	
229	1	42	Сидоров
230	5	42	
231	9	42	
232	33	42	
233	6	42	2024-03-22
234	35	42	
235	34	42	
236	36	42	
237	37	42	
238	38	42	
239	39	42	
240	40	42	
241	41	42	
242	42	42	
243	43	42	
244	30	43	2024-03-01
245	7	43	
246	32	43	
247	1	43	Иванов
248	5	43	
249	9	43	
250	33	43	
251	6	43	2024-03-01
252	35	43	
253	34	43	
254	36	43	
255	37	43	
256	38	43	
257	39	43	
258	40	43	
259	41	43	
260	42	43	
261	43	43	
280	85	45	Создана
281	10	45	2024213123
282	14	45	
283	16	45	В рамках предельной численности
284	18	45	
285	19	45	
286	20	45	Иванова И.И.
287	11	45	213
288	13	45	21312
289	12	45	213123
290	17	45	основной рабочий
291	21	45	
292	22	45	123123
293	23	45	
294	24	45	
266	5	44	
267	9	44	
268	33	44	
269	6	44	
270	35	44	
271	34	44	
272	36	44	
273	37	44	
274	38	44	
275	39	44	
276	40	44	
277	41	44	
278	42	44	
279	43	44	
152	14	40	2023-01-01
165	26	40	На неопределенный срок 3
154	18	40	another one\r\n
153	16	40	В рамках предельной численности
155	19	40	2024-11-30
156	20	40	Соколова С.И.
157	11	40	112
158	13	40	участок 2
159	12	40	Токарь
160	17	40	основной рабочий
161	21	40	
162	22	40	
163	23	40	
164	24	40	
166	27	40	
167	28	40	
168	44	40	
169	45	40	
170	46	40	
295	26	45	
296	27	45	
297	28	45	
298	44	45	
299	45	45	
300	46	45	
301	47	45	
302	49	45	
303	50	45	
304	51	45	
305	52	45	
306	53	45	
307	54	45	
308	56	45	
309	57	45	
310	58	45	
311	59	45	
312	60	45	
313	61	45	
314	62	45	
315	63	45	
316	64	45	
317	65	45	
318	66	45	
319	67	45	
320	68	45	
321	69	45	
322	70	45	
323	71	45	
324	72	45	
325	15	45	
326	73	45	
327	74	45	
328	75	45	
329	76	45	
330	77	45	
331	78	45	
332	79	45	
333	80	45	
338	85	46	Создана
339	10	46	213123-2131231
340	14	46	
341	16	46	
342	18	46	
343	19	46	
344	20	46	
345	11	46	
346	13	46	
347	12	46	
348	17	46	
349	21	46	
350	22	46	
351	23	46	
352	24	46	
353	26	46	
354	27	46	
355	28	46	
356	44	46	
357	45	46	
358	46	46	
359	47	46	
360	49	46	
361	50	46	
362	51	46	
363	52	46	
364	53	46	
365	54	46	
366	56	46	
367	57	46	
368	58	46	
369	59	46	
370	60	46	
371	61	46	
210	32	41	из армии
211	1	41	Петров
212	5	41	Петр
213	9	41	Петрович
214	33	41	муж
215	6	41	2002-12-03
372	62	46	
373	63	46	
374	64	46	
375	65	46	
376	66	46	
377	67	46	
378	68	46	
379	69	46	
380	70	46	
381	71	46	
382	72	46	
383	15	46	
384	73	46	
385	74	46	
386	75	46	
387	76	46	
388	77	46	
389	78	46	
390	79	46	
391	80	46	
392	81	46	
454	30	48	
455	7	48	сотрудник предприятия
456	32	48	
457	1	48	Смирнов
458	5	48	
459	9	48	
460	33	48	
461	6	48	
462	35	48	
463	34	48	
464	36	48	
465	37	48	
395	84	46	234
334	81	45	123
336	83	45	2341234
337	84	45	1243
335	82	45	1234
466	38	48	
467	39	48	
468	40	48	
469	41	48	
470	42	48	
471	43	48	
473	10	49	
474	14	49	
475	16	49	
476	18	49	
477	19	49	
478	20	49	
479	11	49	
480	13	49	
481	12	49	
482	17	49	
483	21	49	
484	22	49	
485	23	49	
486	24	49	
487	26	49	
488	27	49	
489	28	49	
490	44	49	
491	45	49	
492	46	49	
493	47	49	
494	49	49	
495	50	49	
496	51	49	
497	52	49	
498	53	49	
499	54	49	
500	56	49	
501	57	49	
502	58	49	
503	59	49	
504	60	49	
505	61	49	
506	62	49	
507	63	49	
508	64	49	
509	65	49	
510	66	49	
511	67	49	
512	68	49	
513	69	49	
514	70	49	
515	71	49	
516	72	49	
517	15	49	
518	73	49	
519	74	49	
520	75	49	
521	76	49	
522	77	49	
523	78	49	
524	79	49	
525	80	49	
526	81	49	
528	83	49	2341
529	84	49	1234
530	30	50	
531	7	50	трудоустройство
532	32	50	
533	1	50	Попова
534	5	50	
535	9	50	
536	33	50	
537	6	50	
538	35	50	
539	34	50	
540	36	50	
541	37	50	
542	38	50	
219	37	41	токарь
220	38	41	
221	39	41	
223	41	41	
224	42	41	
225	43	41	
398	14	47	23.05.2024
401	19	47	
402	20	47	
403	11	47	
404	13	47	
405	12	47	
406	17	47	
407	21	47	
408	22	47	
409	23	47	
410	24	47	
411	26	47	
412	27	47	
413	28	47	
414	44	47	
415	45	47	
416	46	47	
417	47	47	
418	49	47	
419	50	47	
420	51	47	
421	52	47	
422	53	47	
423	54	47	
424	56	47	
425	57	47	
427	59	47	
428	60	47	
429	61	47	
430	62	47	
431	63	47	
432	64	47	
433	65	47	
434	66	47	
435	67	47	
436	68	47	
438	70	47	
439	71	47	
440	72	47	
441	15	47	
442	73	47	
443	74	47	
444	75	47	
445	76	47	
446	77	47	
447	78	47	
449	80	47	
450	81	47	1234
451	82	47	1234
452	83	47	2341234
453	84	47	234
396	85	47	Создана
397	10	47	1231232132
543	39	50	
544	40	50	
545	41	50	
546	42	50	
547	43	50	ВФЫА
548	30	51	2024-03-14
549	7	51	трудоустройство
550	32	51	дни карьеры
551	1	51	Тест
552	5	51	Тест
553	9	51	Тест
554	33	51	муж
555	6	51	
556	35	51	
557	34	51	
558	36	51	
559	37	51	
560	38	51	
561	39	51	213123
562	40	51	
563	41	51	
564	42	51	
565	43	51	
566	85	52	Создана
567	10	52	13231231
568	14	52	2024-03-16
569	16	52	В рамках предельной численности
570	18	52	Высокая
571	19	52	2024-03-02
572	20	52	
573	11	52	
574	13	52	
575	12	52	
576	17	52	
577	21	52	
578	22	52	
579	23	52	
580	24	52	
581	26	52	
582	27	52	
583	28	52	
584	44	52	
585	45	52	
586	46	52	
587	47	52	
588	49	52	
589	50	52	
590	51	52	
591	52	52	
592	53	52	
593	54	52	
594	56	52	
595	57	52	
596	58	52	
597	59	52	
598	60	52	
599	61	52	
600	62	52	
601	63	52	
602	64	52	
603	65	52	
604	66	52	
605	67	52	
606	68	52	
607	69	52	
608	70	52	
609	71	52	
610	72	52	
611	15	52	
612	73	52	
613	74	52	
614	75	52	
615	76	52	
616	77	52	
617	78	52	
618	79	52	
619	80	52	
620	81	52	
472	85	49	1234
527	82	49	1234
682	30	54	2024-03-17
683	7	54	трудоустройство
684	32	54	дни карьеры
685	1	54	213
686	5	54	3213123
687	9	54	21321312
688	33	54	муж
689	6	54	
690	35	54	
691	34	54	
692	36	54	
693	37	54	
694	38	54	
695	39	54	
696	40	54	
697	41	54	
698	42	54	
699	43	54	
718	30	56	2024-03-17
873	30	88	\N
630	20	53	Соколова С.И.
631	11	53	213123
632	13	53	12312
633	12	53	213
634	17	53	основной рабочий
636	22	53	
637	23	53	
638	24	53	
639	26	53	
640	27	53	
641	28	53	
642	44	53	
643	45	53	
644	46	53	
645	47	53	
646	49	53	
647	50	53	
648	51	53	
649	52	53	
650	53	53	
651	54	53	
652	56	53	
653	57	53	
654	58	53	
655	59	53	
656	60	53	12323123
657	61	53	
658	62	53	
659	63	53	
661	65	53	
662	66	53	
663	67	53	
664	68	53	
665	69	53	
666	70	53	
667	71	53	
668	72	53	
669	15	53	
670	73	53	
672	75	53	
673	76	53	
674	77	53	
675	78	53	
676	79	53	
677	80	53	
701	7	55	сотрудник предприятия
626	14	53	
629	19	53	
702	32	55	дни карьеры
703	1	55	213
705	9	55	123
706	33	55	жен
707	6	55	
708	35	55	
709	34	55	
710	36	55	
711	37	55	
712	38	55	
713	39	55	
714	40	55	
715	41	55	
716	42	55	
704	5	55	213
217	34	41	
717	43	55	
216	35	41	
719	7	56	трудоустройство
720	32	56	дни карьеры
721	1	56	213
722	5	56	213
723	9	56	213
724	33	56	муж
725	6	56	
726	35	56	
727	34	56	
728	36	56	
729	37	56	
730	38	56	
731	39	56	
732	40	56	
733	41	56	
734	42	56	
735	43	56	
736	30	57	2024-03-14
737	7	57	трудоустройство
738	32	57	из армии
739	1	57	2112312312312
740	5	57	213213123
741	9	57	213123
742	33	57	муж
743	6	57	
744	35	57	
745	34	57	
746	36	57	
747	37	57	
748	38	57	
749	39	57	
750	40	57	
751	41	57	
752	42	57	
753	43	57	
754	30	58	
755	7	58	
756	32	58	
757	1	58	
758	5	58	
759	9	58	
760	33	58	
761	6	58	
762	35	58	
763	34	58	
764	36	58	
765	37	58	
766	38	58	
767	39	58	
768	40	58	
769	41	58	
770	42	58	
771	43	58	
171	47	40	
172	49	40	
173	50	40	
174	51	40	
175	52	40	
176	53	40	
177	54	40	
178	56	40	
179	57	40	
180	58	40	ф
181	59	40	
182	60	40	
183	61	40	
184	62	40	
185	63	40	
186	64	40	
187	65	40	
188	66	40	
189	67	40	
190	68	40	
191	69	40	
192	70	40	
622	83	52	123
623	84	52	1234
193	71	40	
194	72	40	
195	15	40	
196	73	40	
197	74	40	
198	75	40	2024-01-10
199	76	40	
200	77	40	
201	78	40	
202	79	40	
203	80	40	
786	30	85	\N
787	7	85	\N
788	32	85	\N
789	1	85	\N
790	5	85	\N
791	9	85	\N
792	33	85	\N
793	6	85	\N
794	35	85	\N
795	34	85	\N
796	36	85	\N
797	37	85	\N
798	38	85	\N
799	39	85	\N
207	84	40	1234
205	82	40	1234
621	82	52	1234
866	6	87	\N
868	34	87	\N
867	35	87	\N
680	83	53	41
870	37	87	\N
872	39	87	\N
804	18	86	\N
859	30	87	20.05.2024
860	7	87	\N
862	1	87	\N
863	5	87	\N
864	9	87	Петрович
865	33	87	\N
869	36	87	\N
805	19	86	\N
678	81	53	1234
806	20	86	\N
807	11	86	\N
808	13	86	\N
810	17	86	\N
811	21	86	\N
812	22	86	\N
813	23	86	\N
815	25	86	\N
816	26	86	\N
817	27	86	\N
818	28	86	\N
819	44	86	\N
820	45	86	\N
821	46	86	\N
822	47	86	\N
823	49	86	\N
824	50	86	\N
826	52	86	\N
827	53	86	\N
828	54	86	\N
829	56	86	\N
830	57	86	\N
831	58	86	\N
832	59	86	\N
833	60	86	\N
834	61	86	\N
835	62	86	\N
837	64	86	\N
838	65	86	\N
839	66	86	\N
840	67	86	токарь
841	68	86	\N
842	69	86	\N
843	70	86	\N
844	71	86	\N
845	72	86	\N
846	15	86	\N
848	74	86	\N
849	75	86	\N
850	76	86	\N
851	77	86	\N
852	78	86	\N
853	79	86	\N
854	80	86	\N
855	81	86	1234
858	84	86	\N
800	85	86	\N
802	14	86	29.05.2024
803	16	86	\N
874	7	88	\N
875	32	88	\N
876	1	88	\N
877	5	88	\N
878	9	88	\N
879	33	88	\N
880	6	88	\N
881	35	88	\N
882	34	88	\N
883	36	88	\N
884	37	88	\N
885	38	88	\N
886	39	88	\N
393	82	46	123
204	81	40	3434
394	83	46	1234
206	83	40	1234
887	85	89	
888	10	89	23232
889	14	89	\N
890	16	89	\N
891	18	89	\N
892	19	89	\N
893	20	89	\N
894	11	89	\N
895	13	89	\N
896	12	89	\N
897	17	89	\N
898	21	89	\N
899	22	89	\N
900	23	89	\N
901	24	89	\N
902	25	89	\N
903	26	89	\N
904	27	89	\N
906	44	89	\N
907	45	89	\N
908	46	89	\N
909	47	89	\N
910	49	89	\N
911	50	89	\N
912	51	89	\N
913	52	89	\N
914	53	89	\N
915	54	89	\N
917	57	89	\N
918	58	89	\N
919	59	89	\N
920	60	89	\N
921	61	89	\N
922	62	89	\N
923	63	89	\N
924	64	89	\N
925	65	89	\N
926	66	89	\N
928	68	89	\N
929	69	89	\N
930	70	89	\N
905	28	89	\N
916	56	89	\N
927	67	89	\N
931	71	89	\N
932	72	89	\N
933	15	89	\N
934	73	89	\N
935	74	89	\N
936	75	89	\N
937	76	89	\N
938	77	89	\N
939	78	89	\N
940	79	89	\N
941	80	89	\N
942	81	89	\N
943	82	89	\N
944	83	89	\N
945	84	89	\N
946	30	90	
947	32	90	
948	1	90	
949	5	90	
950	9	90	
951	6	90	
952	33	90	
953	34	90	
954	35	90	
955	36	90	
956	37	90	
957	38	90	
958	39	90	
959	7	90	
960	30	91	
961	32	91	
962	1	91	
963	5	91	
964	9	91	
965	6	91	
966	33	91	
967	34	91	
968	35	91	
969	36	91	
970	37	91	
971	38	91	
972	39	91	
973	7	91	
992	30	95	\N
993	7	95	\N
994	32	95	\N
995	1	95	\N
996	5	95	\N
700	30	55	2024-03-14
861	32	87	\N
871	38	87	\N
624	85	53	Создана
625	10	53	123
627	16	53	В рамках предельной численности
628	18	53	Высокая
635	21	53	третий
660	64	53	
671	74	53	
679	82	53	1234
681	84	53	1234
208	30	41	2024-03-01
209	7	41	трудоустройство
218	36	41	
222	40	41	
772	30	84	01.02.2024
773	7	84	21312
774	32	84	\N
775	1	84	Сидоров
776	5	84	Николай
784	38	84	\N
785	39	84	\N
814	24	86	\N
997	9	95	\N
777	9	84	Васильевич
778	33	84	2213213
779	6	84	05.03.1998
780	35	84	\N
781	34	84	\N
782	36	84	\N
783	37	84	\N
825	51	86	\N
836	63	86	\N
847	73	86	\N
856	82	86	412
399	16	47	В рамках предельной численности
400	18	47	Средняя
426	58	47	
437	69	47	
448	79	47	
801	10	86	38447563-122-2024
809	12	86	токарь
857	83	86	1234
978	30	94	\N
979	7	94	\N
980	32	94	\N
981	1	94	\N
982	5	94	\N
983	9	94	\N
984	33	94	\N
985	6	94	\N
986	35	94	\N
987	34	94	\N
988	36	94	\N
989	37	94	\N
990	38	94	\N
991	39	94	\N
998	33	95	\N
999	6	95	\N
1000	35	95	\N
1001	34	95	\N
1002	36	95	\N
1003	37	95	\N
1004	38	95	\N
1005	39	95	\N
1006	30	96	\N
1007	7	96	\N
1008	32	96	\N
1009	1	96	\N
1010	5	96	\N
1011	9	96	\N
1012	33	96	\N
1013	6	96	\N
1014	35	96	\N
1015	34	96	\N
1016	36	96	\N
1017	37	96	\N
1018	38	96	\N
1019	39	96	\N
1020	30	97	\N
1021	7	97	\N
1022	32	97	\N
1023	1	97	\N
1024	5	97	\N
1025	9	97	\N
1026	33	97	\N
1027	6	97	\N
1028	35	97	\N
1029	34	97	\N
1030	36	97	\N
1031	37	97	\N
1032	38	97	\N
1033	39	97	\N
1034	30	98	\N
1035	7	98	\N
1036	32	98	\N
1037	1	98	\N
1038	5	98	\N
1039	9	98	\N
1040	33	98	\N
1041	6	98	\N
1042	35	98	\N
1043	34	98	\N
1044	36	98	\N
1045	37	98	\N
1046	38	98	\N
1047	39	98	\N
1048	30	99	\N
1049	7	99	\N
1050	32	99	\N
1051	1	99	\N
1052	5	99	\N
1053	9	99	\N
1054	33	99	\N
1055	6	99	\N
1056	35	99	\N
1057	34	99	\N
1058	36	99	\N
1059	37	99	\N
1060	38	99	\N
1061	39	99	\N
1062	30	100	\N
1063	7	100	\N
1064	32	100	\N
1065	1	100	\N
1066	5	100	\N
1067	9	100	\N
1068	33	100	\N
1069	6	100	\N
1070	35	100	\N
1071	34	100	\N
1072	36	100	\N
1073	37	100	\N
1074	38	100	\N
1075	39	100	\N
1076	30	101	\N
1077	7	101	\N
1078	32	101	\N
1079	1	101	\N
1080	5	101	\N
1081	9	101	\N
1082	33	101	\N
1083	6	101	\N
1084	35	101	\N
1085	34	101	\N
1086	36	101	\N
1087	37	101	\N
1088	38	101	\N
1089	39	101	\N
1090	30	102	\N
1091	7	102	\N
1092	32	102	\N
1093	1	102	\N
1094	5	102	\N
1095	9	102	\N
1096	33	102	\N
1097	6	102	\N
1098	35	102	\N
1099	34	102	\N
1100	36	102	\N
1101	37	102	\N
1102	38	102	\N
1103	39	102	\N
1104	30	103	\N
1105	7	103	\N
1106	32	103	\N
1107	1	103	\N
1108	5	103	\N
1109	9	103	\N
1110	33	103	\N
1111	6	103	\N
1112	35	103	\N
1113	34	103	\N
1114	36	103	\N
1115	37	103	\N
1116	38	103	\N
1117	39	103	\N
1118	30	104	\N
1119	7	104	\N
1120	32	104	\N
1121	1	104	\N
1122	5	104	\N
1123	9	104	\N
1124	33	104	\N
1125	6	104	\N
1126	35	104	\N
1127	34	104	\N
1128	36	104	\N
1129	37	104	\N
1130	38	104	\N
1131	39	104	\N
1132	30	105	\N
1133	7	105	\N
1134	32	105	\N
1135	1	105	\N
1136	5	105	\N
1137	9	105	\N
1138	33	105	\N
1139	6	105	\N
1140	35	105	\N
1141	34	105	\N
1142	36	105	\N
1143	37	105	\N
1144	38	105	\N
1145	39	105	\N
1146	30	106	\N
1147	7	106	\N
1148	32	106	\N
1149	1	106	\N
1150	5	106	\N
1151	9	106	\N
1152	33	106	\N
1153	6	106	\N
1154	35	106	\N
1155	34	106	\N
1156	36	106	\N
1157	37	106	\N
1158	38	106	\N
1159	39	106	\N
1160	30	107	\N
1161	7	107	\N
1162	32	107	\N
1163	1	107	\N
1164	5	107	\N
1165	9	107	\N
1166	33	107	\N
1167	6	107	\N
1168	35	107	\N
1169	34	107	\N
1170	36	107	\N
1171	37	107	\N
1172	38	107	\N
1173	39	107	\N
1174	30	108	\N
1175	7	108	\N
1176	32	108	\N
1177	1	108	\N
1178	5	108	\N
1179	9	108	\N
1180	33	108	\N
1181	6	108	\N
1182	35	108	\N
1183	34	108	\N
1184	36	108	\N
1185	37	108	\N
1186	38	108	\N
1187	39	108	\N
1188	30	109	\N
1189	7	109	\N
1190	32	109	\N
1191	1	109	\N
1192	5	109	\N
1193	9	109	\N
1194	33	109	\N
1195	6	109	\N
1196	35	109	\N
1197	34	109	\N
1198	36	109	\N
1199	37	109	\N
1200	38	109	\N
1201	39	109	\N
1202	30	110	\N
1203	7	110	\N
1204	32	110	\N
1205	1	110	\N
1206	5	110	\N
1207	9	110	\N
1208	33	110	\N
1209	6	110	\N
1210	35	110	\N
1211	34	110	\N
1212	36	110	\N
1213	37	110	\N
1214	38	110	\N
1215	39	110	\N
1216	30	111	\N
1217	7	111	\N
1218	32	111	\N
1219	1	111	\N
1220	5	111	\N
1221	9	111	\N
1222	33	111	\N
1223	6	111	\N
1224	35	111	\N
1225	34	111	\N
1226	36	111	\N
1227	37	111	\N
1228	38	111	\N
1229	39	111	\N
1230	30	112	\N
1231	7	112	\N
1232	32	112	\N
1233	1	112	\N
1234	5	112	\N
1235	9	112	\N
1236	33	112	\N
1237	6	112	\N
1238	35	112	\N
1239	34	112	\N
1240	36	112	\N
1241	37	112	\N
1242	38	112	\N
1243	39	112	\N
1244	30	113	\N
1245	7	113	\N
1246	32	113	\N
1247	1	113	\N
1248	5	113	\N
1249	9	113	\N
1250	33	113	\N
1251	6	113	\N
1252	35	113	\N
1253	34	113	\N
1254	36	113	\N
1255	37	113	\N
1256	38	113	\N
1257	39	113	\N
1258	30	114	\N
1259	7	114	\N
1260	32	114	\N
1261	1	114	\N
1262	5	114	\N
1263	9	114	\N
1264	33	114	\N
1265	6	114	\N
1266	35	114	\N
1267	34	114	\N
1268	36	114	\N
1269	37	114	\N
1270	38	114	\N
1271	39	114	\N
1272	30	115	\N
1273	7	115	\N
1274	32	115	\N
1275	1	115	\N
1276	5	115	\N
1277	9	115	\N
1278	33	115	\N
1279	6	115	\N
1280	35	115	\N
1281	34	115	\N
1282	36	115	\N
1283	37	115	\N
1284	38	115	\N
1285	39	115	\N
1286	30	116	\N
1287	7	116	\N
1288	32	116	\N
1289	1	116	\N
1290	5	116	\N
1291	9	116	\N
1292	33	116	\N
1293	6	116	\N
1294	35	116	\N
1295	34	116	\N
1296	36	116	\N
1297	37	116	\N
1298	38	116	\N
1299	39	116	\N
1300	30	117	\N
1301	7	117	\N
1302	32	117	\N
1303	1	117	\N
1304	5	117	\N
1305	9	117	\N
1306	33	117	\N
1307	6	117	\N
1308	35	117	\N
1309	34	117	\N
1310	36	117	\N
1311	37	117	\N
1312	38	117	\N
1313	39	117	\N
1314	30	118	\N
1315	7	118	\N
1316	32	118	\N
1317	1	118	\N
1318	5	118	\N
1319	9	118	\N
1320	33	118	\N
1321	6	118	\N
1322	35	118	\N
1323	34	118	\N
1324	36	118	\N
1325	37	118	\N
1326	38	118	\N
1327	39	118	\N
1328	30	120	\N
1329	7	120	\N
1330	32	120	\N
1331	1	120	\N
1332	5	120	\N
1333	9	120	\N
1334	33	120	\N
1335	6	120	\N
1336	35	120	\N
1337	34	120	\N
1338	36	120	\N
1339	37	120	\N
1340	38	120	\N
1341	39	120	\N
1342	30	122	\N
1343	7	122	\N
1344	32	122	\N
1345	1	122	\N
1346	5	122	\N
1347	9	122	\N
1348	33	122	\N
1349	6	122	\N
1350	35	122	\N
1351	34	122	\N
1352	36	122	\N
1353	37	122	\N
1354	38	122	\N
1355	39	122	\N
1356	30	124	\N
1357	7	124	\N
1358	32	124	\N
1359	1	124	\N
1360	5	124	\N
1361	9	124	\N
1362	33	124	\N
1363	6	124	\N
1364	35	124	\N
1365	34	124	\N
1366	36	124	\N
1367	37	124	\N
1368	38	124	\N
1369	39	124	\N
1370	30	126	\N
1371	7	126	\N
1372	32	126	\N
1373	1	126	\N
1374	5	126	\N
1375	9	126	\N
1376	33	126	\N
1377	6	126	\N
1378	35	126	\N
1379	34	126	\N
1380	36	126	\N
1381	37	126	\N
1382	38	126	\N
1383	39	126	\N
1384	30	127	\N
1385	7	127	\N
1386	32	127	\N
1387	1	127	\N
1388	5	127	\N
1389	9	127	\N
1390	33	127	\N
1391	6	127	\N
1392	35	127	\N
1393	34	127	\N
1394	36	127	\N
1395	37	127	\N
1396	38	127	\N
1397	39	127	\N
1398	30	128	\N
1399	7	128	\N
1400	32	128	\N
1401	1	128	\N
1402	5	128	\N
1403	9	128	\N
1404	33	128	\N
1405	6	128	\N
1406	35	128	\N
1407	34	128	\N
1408	36	128	\N
1409	37	128	\N
1410	38	128	\N
1411	39	128	\N
1412	30	129	\N
1413	7	129	\N
1414	32	129	\N
1415	1	129	\N
1416	5	129	\N
1417	9	129	\N
1418	33	129	\N
1419	6	129	\N
1420	35	129	\N
1421	34	129	\N
1422	36	129	\N
1423	37	129	\N
1424	38	129	\N
1425	39	129	\N
1426	30	130	\N
1427	7	130	\N
1428	32	130	\N
1429	1	130	\N
1430	5	130	\N
1431	9	130	\N
1432	33	130	\N
1433	6	130	\N
1434	35	130	\N
1435	34	130	\N
1436	36	130	\N
1437	37	130	\N
1438	38	130	\N
1439	39	130	\N
1440	30	131	\N
1441	7	131	\N
1442	32	131	\N
1443	1	131	\N
1444	5	131	\N
1445	9	131	\N
1446	33	131	\N
1447	6	131	\N
1448	35	131	\N
1449	34	131	\N
1450	36	131	\N
1451	37	131	\N
1452	38	131	\N
1453	39	131	\N
1454	30	132	\N
1455	7	132	\N
1456	32	132	\N
1457	1	132	\N
1458	5	132	\N
1459	9	132	\N
1460	33	132	\N
1461	6	132	\N
1462	35	132	\N
1463	34	132	\N
1464	36	132	\N
1465	37	132	\N
1466	38	132	\N
1467	39	132	\N
1468	30	133	\N
1469	7	133	\N
1470	32	133	\N
1471	1	133	\N
1472	5	133	\N
1473	9	133	\N
1474	33	133	\N
1475	6	133	\N
1476	35	133	\N
1477	34	133	\N
1478	36	133	\N
1479	37	133	\N
1480	38	133	\N
1481	39	133	\N
1482	30	134	\N
1483	7	134	\N
1484	32	134	\N
1485	1	134	\N
1486	5	134	\N
1487	9	134	\N
1488	33	134	\N
1489	6	134	\N
1490	35	134	\N
1491	34	134	\N
1492	36	134	\N
1493	37	134	\N
1494	38	134	\N
1495	39	134	\N
1496	30	135	\N
1497	7	135	\N
1498	32	135	\N
1499	1	135	\N
1500	5	135	\N
1501	9	135	\N
1502	33	135	\N
1503	6	135	\N
1504	35	135	\N
1505	34	135	\N
1506	36	135	\N
1507	37	135	\N
1508	38	135	\N
1509	39	135	\N
1510	30	136	\N
1511	7	136	\N
1512	32	136	\N
1513	1	136	\N
1514	5	136	\N
1515	9	136	\N
1516	33	136	\N
1517	6	136	\N
1518	35	136	\N
1519	34	136	\N
1520	36	136	\N
1521	37	136	\N
1522	38	136	\N
1523	39	136	\N
1524	30	138	\N
1525	7	138	\N
1526	32	138	\N
1527	1	138	\N
1528	5	138	\N
1529	9	138	\N
1530	33	138	\N
1531	6	138	\N
1532	35	138	\N
1533	34	138	\N
1534	36	138	\N
1535	37	138	\N
1536	38	138	\N
1537	39	138	\N
1538	30	139	\N
1539	7	139	\N
1540	32	139	\N
1541	1	139	\N
1542	5	139	\N
1543	9	139	\N
1544	33	139	\N
1545	6	139	\N
1546	35	139	\N
1547	34	139	\N
1548	36	139	\N
1549	37	139	\N
1550	38	139	\N
1551	39	139	\N
1552	30	140	\N
1553	7	140	\N
1554	32	140	\N
1555	1	140	\N
1556	5	140	\N
1557	9	140	\N
1558	33	140	\N
1559	6	140	\N
1560	35	140	\N
1561	34	140	\N
1562	36	140	\N
1563	37	140	\N
1564	38	140	\N
1565	39	140	\N
1566	30	141	\N
1567	7	141	\N
1568	32	141	\N
1569	1	141	\N
1570	5	141	\N
1571	9	141	\N
1572	33	141	\N
1573	6	141	\N
1574	35	141	\N
1575	34	141	\N
1576	36	141	\N
1577	37	141	\N
1578	38	141	\N
1579	39	141	\N
1580	30	142	\N
1581	7	142	\N
1582	32	142	\N
1583	1	142	\N
1584	5	142	\N
1585	9	142	\N
1586	33	142	\N
1587	6	142	\N
1588	35	142	\N
1589	34	142	\N
1590	36	142	\N
1591	37	142	\N
1592	38	142	\N
1593	39	142	\N
1594	30	143	\N
1595	7	143	\N
1596	32	143	\N
1597	1	143	\N
1598	5	143	\N
1599	9	143	\N
1600	33	143	\N
1601	6	143	\N
1602	35	143	\N
1603	34	143	\N
1604	36	143	\N
1605	37	143	\N
1606	38	143	\N
1607	39	143	\N
1608	30	144	\N
1609	7	144	\N
1610	32	144	\N
1611	1	144	\N
1612	5	144	\N
1613	9	144	\N
1614	33	144	\N
1615	6	144	\N
1616	35	144	\N
1617	34	144	\N
1618	36	144	\N
1619	37	144	\N
1620	38	144	\N
1621	39	144	\N
1622	30	145	\N
1623	7	145	\N
1624	32	145	\N
1625	1	145	\N
1626	5	145	\N
1627	9	145	\N
1628	33	145	\N
1629	6	145	\N
1630	35	145	\N
1631	34	145	\N
1632	36	145	\N
1633	37	145	\N
1634	38	145	\N
1635	39	145	\N
1636	30	146	\N
1637	7	146	\N
1638	32	146	\N
1639	1	146	\N
1640	5	146	\N
1641	9	146	\N
1642	33	146	\N
1643	6	146	\N
1644	35	146	\N
1645	34	146	\N
1646	36	146	\N
1647	37	146	\N
1648	38	146	\N
1649	39	146	\N
1650	30	147	\N
1651	7	147	\N
1652	32	147	\N
1653	1	147	\N
1654	5	147	\N
1655	9	147	\N
1656	33	147	\N
1657	6	147	\N
1658	35	147	\N
1659	34	147	\N
1660	36	147	\N
1661	37	147	\N
1662	38	147	\N
1663	39	147	\N
1664	30	148	\N
1665	7	148	\N
1666	32	148	\N
1667	1	148	\N
1668	5	148	\N
1669	9	148	\N
1670	33	148	\N
1671	6	148	\N
1672	35	148	\N
1673	34	148	\N
1674	36	148	\N
1675	37	148	\N
1676	38	148	\N
1677	39	148	\N
1678	30	149	\N
1679	7	149	\N
1680	32	149	\N
1681	1	149	\N
1682	5	149	\N
1683	9	149	\N
1684	33	149	\N
1685	6	149	\N
1686	35	149	\N
1687	34	149	\N
1688	36	149	\N
1689	37	149	\N
1690	38	149	\N
1691	39	149	\N
1692	30	150	\N
1693	7	150	\N
1694	32	150	\N
1695	1	150	\N
1696	5	150	\N
1697	9	150	\N
1698	33	150	\N
1699	6	150	\N
1700	35	150	\N
1701	34	150	\N
1702	36	150	\N
1703	37	150	\N
1704	38	150	\N
1705	39	150	\N
1706	30	151	\N
1707	7	151	\N
1708	32	151	\N
1709	1	151	\N
1710	5	151	\N
1711	9	151	\N
1712	33	151	\N
1713	6	151	\N
1714	35	151	\N
1715	34	151	\N
1716	36	151	\N
1717	37	151	\N
1718	38	151	\N
1719	39	151	\N
1720	30	152	\N
1721	7	152	\N
1722	32	152	\N
1723	1	152	\N
1724	5	152	\N
1725	9	152	\N
1726	33	152	\N
1727	6	152	\N
1728	35	152	\N
1729	34	152	\N
1730	36	152	\N
1731	37	152	\N
1732	38	152	\N
1733	39	152	\N
1734	30	153	\N
1735	7	153	\N
1736	32	153	\N
1737	1	153	\N
1738	5	153	\N
1739	9	153	\N
1740	33	153	\N
1741	6	153	\N
1742	35	153	\N
1743	34	153	\N
1744	36	153	\N
1745	37	153	\N
1746	38	153	\N
1747	39	153	\N
1748	30	154	\N
1749	7	154	\N
1750	32	154	\N
1751	1	154	\N
1752	5	154	\N
1753	9	154	\N
1754	33	154	\N
1755	6	154	\N
1756	35	154	\N
1757	34	154	\N
1758	36	154	\N
1759	37	154	\N
1760	38	154	\N
1761	39	154	\N
1762	86	155	\N
1763	87	155	\N
1764	30	156	\N
1765	7	156	\N
1766	32	156	\N
1767	1	156	\N
1768	5	156	\N
1769	9	156	\N
1770	33	156	\N
1771	6	156	\N
1772	35	156	\N
1773	34	156	\N
1774	36	156	\N
1775	37	156	\N
1776	38	156	\N
1777	39	156	\N
1778	86	157	\N
1779	87	157	\N
1780	30	158	\N
1781	7	158	\N
1782	32	158	\N
1783	1	158	\N
1784	5	158	\N
1785	9	158	\N
1786	33	158	\N
1787	6	158	\N
1788	35	158	\N
1789	34	158	\N
1790	36	158	\N
1791	37	158	\N
1792	38	158	\N
1793	39	158	\N
1794	86	159	\N
1795	87	159	\N
1796	30	160	\N
1797	7	160	\N
1798	32	160	\N
1799	1	160	\N
1800	5	160	\N
1801	9	160	\N
1802	33	160	\N
1803	6	160	\N
1804	35	160	\N
1805	34	160	\N
1806	36	160	\N
1807	37	160	\N
1808	38	160	\N
1809	39	160	\N
1810	86	161	\N
1811	87	161	\N
1812	30	162	\N
1813	7	162	\N
1814	32	162	\N
1815	1	162	\N
1816	5	162	\N
1817	9	162	\N
1818	33	162	\N
1819	6	162	\N
1820	35	162	\N
1821	34	162	\N
1822	36	162	\N
1823	37	162	\N
1824	38	162	\N
1825	39	162	\N
1826	86	163	\N
1827	87	163	\N
1828	30	164	\N
1829	7	164	\N
1830	32	164	\N
1831	1	164	\N
1832	5	164	\N
1833	9	164	\N
1834	33	164	\N
1835	6	164	\N
1836	35	164	\N
1837	34	164	\N
1838	36	164	\N
1839	37	164	\N
1840	38	164	\N
1841	39	164	\N
1842	86	165	\N
1843	87	165	\N
1844	30	166	\N
1845	7	166	\N
1846	32	166	\N
1847	1	166	\N
1848	5	166	\N
1849	9	166	\N
1850	33	166	\N
1851	6	166	\N
1852	35	166	\N
1853	34	166	\N
1854	36	166	\N
1855	37	166	\N
1856	38	166	\N
1857	39	166	\N
1858	86	167	\N
1859	87	167	\N
1860	30	168	\N
1861	7	168	\N
1862	32	168	\N
1863	1	168	\N
1864	5	168	\N
1865	9	168	\N
1866	33	168	\N
1867	6	168	\N
1868	35	168	\N
1869	34	168	\N
1870	36	168	\N
1871	37	168	\N
1872	38	168	\N
1873	39	168	\N
1874	86	169	\N
1875	87	169	\N
1876	30	170	\N
1877	7	170	\N
1878	32	170	\N
1879	1	170	\N
1880	5	170	\N
1881	9	170	\N
1882	33	170	\N
1883	6	170	\N
1884	35	170	\N
1885	34	170	\N
1886	36	170	\N
1887	37	170	\N
1888	38	170	\N
1889	39	170	\N
1890	86	171	\N
1891	87	171	\N
1892	30	172	\N
1893	7	172	\N
1894	32	172	\N
1895	1	172	\N
1896	5	172	\N
1897	9	172	\N
1898	33	172	\N
1899	6	172	\N
1900	35	172	\N
1901	34	172	\N
1902	36	172	\N
1903	37	172	\N
1904	38	172	\N
1905	39	172	\N
1906	86	173	\N
1907	87	173	\N
1908	30	174	\N
1909	7	174	\N
1910	32	174	\N
1911	1	174	\N
1912	5	174	\N
1913	9	174	\N
1914	33	174	\N
1915	6	174	\N
1916	35	174	\N
1917	34	174	\N
1918	36	174	\N
1919	37	174	\N
1920	38	174	\N
1921	39	174	\N
1922	86	175	\N
1923	87	175	\N
1924	30	176	\N
1925	7	176	\N
1926	32	176	\N
1927	1	176	\N
1928	5	176	\N
1929	9	176	\N
1930	33	176	\N
1931	6	176	\N
1932	35	176	\N
1933	34	176	\N
1934	36	176	\N
1935	37	176	\N
1936	38	176	\N
1937	39	176	\N
1938	86	177	\N
1939	87	177	\N
1940	30	178	\N
1941	7	178	\N
1942	32	178	\N
1943	1	178	\N
1944	5	178	\N
1945	9	178	\N
1946	33	178	\N
1947	6	178	\N
1948	35	178	\N
1949	34	178	\N
1950	36	178	\N
1951	37	178	\N
1952	38	178	\N
1953	39	178	\N
1954	86	179	\N
1955	87	179	\N
1956	30	180	\N
1957	7	180	\N
1958	32	180	\N
1959	1	180	\N
1960	5	180	\N
1961	9	180	\N
1962	33	180	\N
1963	6	180	\N
1964	35	180	\N
1965	34	180	\N
1966	36	180	\N
1967	37	180	\N
1968	38	180	\N
1969	39	180	\N
1970	86	181	\N
1971	87	181	\N
1972	30	182	\N
1973	7	182	\N
1974	32	182	\N
1975	1	182	\N
1976	5	182	\N
1977	9	182	\N
1978	33	182	\N
1979	6	182	\N
1980	35	182	\N
1981	34	182	\N
1982	36	182	\N
1983	37	182	\N
1984	38	182	\N
1985	39	182	\N
1986	86	183	\N
1987	87	183	\N
1988	30	184	\N
1989	7	184	\N
1990	32	184	\N
1991	1	184	\N
1992	5	184	\N
1993	9	184	\N
1994	33	184	\N
1995	6	184	\N
1996	35	184	\N
1997	34	184	\N
1998	36	184	\N
1999	37	184	\N
2000	38	184	\N
2001	39	184	\N
2002	86	185	\N
2003	87	185	\N
2004	30	186	\N
2005	7	186	\N
2006	32	186	\N
2007	1	186	\N
2008	5	186	\N
2009	9	186	\N
2010	33	186	\N
2011	6	186	\N
2012	35	186	\N
2013	34	186	\N
2014	36	186	\N
2015	37	186	\N
2016	38	186	\N
2017	39	186	\N
2018	86	187	\N
2019	87	187	\N
2020	30	188	\N
2021	7	188	\N
2022	32	188	\N
2023	1	188	\N
2024	5	188	\N
2025	9	188	\N
2026	33	188	\N
2027	6	188	\N
2028	35	188	\N
2029	34	188	\N
2030	36	188	\N
2031	37	188	\N
2032	38	188	\N
2033	39	188	\N
2034	86	189	\N
2035	87	189	\N
2036	30	190	\N
2037	7	190	\N
2038	32	190	\N
2039	1	190	\N
2040	5	190	\N
2041	9	190	\N
2042	33	190	\N
2043	6	190	\N
2044	35	190	\N
2045	34	190	\N
2046	36	190	\N
2047	37	190	\N
2048	38	190	\N
2049	39	190	\N
2050	86	191	\N
2051	87	191	\N
2052	30	192	\N
2053	7	192	\N
2054	32	192	\N
2055	1	192	\N
2056	5	192	\N
2057	9	192	\N
2058	33	192	\N
2059	6	192	\N
2060	35	192	\N
2061	34	192	\N
2062	36	192	\N
2063	37	192	\N
2064	38	192	\N
2065	39	192	\N
2066	86	193	\N
2067	87	193	\N
2068	30	194	\N
2069	7	194	\N
2070	32	194	\N
2071	1	194	\N
2072	5	194	\N
2073	9	194	\N
2074	33	194	\N
2075	6	194	\N
2076	35	194	\N
2077	34	194	\N
2078	36	194	\N
2079	37	194	\N
2080	38	194	\N
2081	39	194	\N
2082	86	195	\N
2083	87	195	\N
2084	30	196	\N
2085	7	196	\N
2086	32	196	\N
2087	1	196	\N
2088	5	196	\N
2089	9	196	\N
2090	33	196	\N
2091	6	196	\N
2092	35	196	\N
2093	34	196	\N
2094	36	196	\N
2095	37	196	\N
2096	38	196	\N
2097	39	196	\N
2098	86	197	\N
2099	87	197	\N
2100	30	198	\N
2101	7	198	\N
2102	32	198	\N
2103	1	198	\N
2104	5	198	\N
2105	9	198	\N
2106	33	198	\N
2107	6	198	\N
2108	35	198	\N
2109	34	198	\N
2110	36	198	\N
2111	37	198	\N
2112	38	198	\N
2113	39	198	\N
2114	86	199	\N
2115	87	199	\N
2116	30	200	\N
2117	7	200	\N
2118	32	200	\N
2119	1	200	\N
2120	5	200	\N
2121	9	200	\N
2122	33	200	\N
2123	6	200	\N
2124	35	200	\N
2125	34	200	\N
2126	36	200	\N
2127	37	200	\N
2128	38	200	\N
2129	39	200	\N
2130	86	201	\N
2131	87	201	\N
2132	30	202	\N
2133	7	202	\N
2134	32	202	\N
2135	1	202	\N
2136	5	202	\N
2137	9	202	\N
2138	33	202	\N
2139	6	202	\N
2140	35	202	\N
2141	34	202	\N
2142	36	202	\N
2143	37	202	\N
2144	38	202	\N
2145	39	202	\N
2146	86	203	\N
2147	87	203	\N
2148	30	204	\N
2149	7	204	\N
2150	32	204	\N
2151	1	204	\N
2152	5	204	\N
2153	9	204	\N
2154	33	204	\N
2155	6	204	\N
2156	35	204	\N
2157	34	204	\N
2158	36	204	\N
2159	37	204	\N
2160	38	204	\N
2161	39	204	\N
2162	86	205	\N
2163	87	205	\N
2164	30	206	\N
2165	7	206	\N
2166	32	206	\N
2167	1	206	\N
2168	5	206	\N
2169	9	206	\N
2170	33	206	\N
2171	6	206	\N
2172	35	206	\N
2173	34	206	\N
2174	36	206	\N
2175	37	206	\N
2176	38	206	\N
2177	39	206	\N
2178	86	207	\N
2179	87	207	\N
2180	30	208	\N
2181	7	208	\N
2182	32	208	\N
2183	1	208	\N
2184	5	208	\N
2185	9	208	\N
2186	33	208	\N
2187	6	208	\N
2188	35	208	\N
2189	34	208	\N
2190	36	208	\N
2191	37	208	\N
2192	38	208	\N
2193	39	208	\N
2194	86	209	\N
2195	87	209	\N
2196	30	210	\N
2197	7	210	\N
2198	32	210	\N
2199	1	210	\N
2200	5	210	\N
2201	9	210	\N
2202	33	210	\N
2203	6	210	\N
2204	35	210	\N
2205	34	210	\N
2206	36	210	\N
2207	37	210	\N
2208	38	210	\N
2209	39	210	\N
2210	86	211	\N
2211	87	211	\N
2212	30	212	\N
2213	7	212	\N
2214	32	212	\N
2215	1	212	\N
2216	5	212	\N
2217	9	212	\N
2218	33	212	\N
2219	6	212	\N
2220	35	212	\N
2221	34	212	\N
2222	36	212	\N
2223	37	212	\N
2224	38	212	\N
2225	39	212	\N
2226	86	213	\N
2227	87	213	\N
2228	30	214	\N
2229	7	214	\N
2230	32	214	\N
2231	1	214	\N
2232	5	214	\N
2233	9	214	\N
2234	33	214	\N
2235	6	214	\N
2236	35	214	\N
2237	34	214	\N
2238	36	214	\N
2239	37	214	\N
2240	38	214	\N
2241	39	214	\N
2242	86	215	\N
2243	87	215	\N
2244	30	216	\N
2245	7	216	\N
2246	32	216	\N
2247	1	216	\N
2248	5	216	\N
2249	9	216	\N
2250	33	216	\N
2251	6	216	\N
2252	35	216	\N
2253	34	216	\N
2254	36	216	\N
2255	37	216	\N
2256	38	216	\N
2257	39	216	\N
2258	86	217	\N
2259	87	217	\N
2260	30	218	\N
2261	7	218	\N
2262	32	218	\N
2263	1	218	\N
2264	5	218	\N
2265	9	218	\N
2266	33	218	\N
2267	6	218	\N
2268	35	218	\N
2269	34	218	\N
2270	36	218	\N
2271	37	218	\N
2272	38	218	\N
2273	39	218	\N
2274	86	219	\N
2275	87	219	\N
2276	85	220	\N
2277	10	220	\N
2278	14	220	\N
2279	16	220	\N
2280	18	220	\N
2281	19	220	\N
2282	20	220	\N
2283	11	220	\N
2284	13	220	\N
2285	12	220	\N
2286	17	220	\N
2287	21	220	\N
2288	22	220	\N
2289	23	220	\N
2290	24	220	\N
2291	25	220	\N
2292	26	220	\N
2293	27	220	\N
2294	28	220	\N
2295	44	220	\N
2296	45	220	\N
2297	46	220	\N
2298	47	220	\N
2299	49	220	\N
2300	50	220	\N
2301	51	220	\N
2302	52	220	\N
2303	53	220	\N
2304	54	220	\N
2305	56	220	\N
2306	57	220	\N
2307	58	220	\N
2308	59	220	\N
2309	60	220	\N
2310	61	220	\N
2311	62	220	\N
2312	63	220	\N
2313	64	220	\N
2314	65	220	\N
2315	66	220	\N
2316	67	220	\N
2317	68	220	\N
2318	69	220	\N
2319	70	220	\N
2320	71	220	\N
2321	72	220	\N
2322	15	220	\N
2323	73	220	\N
2324	74	220	\N
2325	75	220	\N
2326	76	220	\N
2327	77	220	\N
2328	78	220	\N
2329	79	220	\N
2330	80	220	\N
2331	81	220	\N
2332	82	220	\N
2333	83	220	\N
2334	84	220	\N
2335	85	221	\N
2336	10	221	\N
2337	14	221	\N
2338	16	221	\N
2339	18	221	\N
2340	19	221	\N
2341	20	221	\N
2342	11	221	\N
2343	13	221	\N
2344	12	221	\N
2345	17	221	\N
2346	21	221	\N
2347	22	221	\N
2348	23	221	\N
2349	24	221	\N
2350	25	221	\N
2351	26	221	\N
2352	27	221	\N
2353	28	221	\N
2354	44	221	\N
2355	45	221	\N
2356	46	221	\N
2357	47	221	\N
2358	49	221	\N
2359	50	221	\N
2360	51	221	\N
2361	52	221	\N
2362	53	221	\N
2363	54	221	\N
2364	56	221	\N
2365	57	221	\N
2366	58	221	\N
2367	59	221	\N
2368	60	221	\N
2369	61	221	\N
2370	62	221	\N
2371	63	221	\N
2372	64	221	\N
2373	65	221	\N
2374	66	221	\N
2375	67	221	\N
2376	68	221	\N
2377	69	221	\N
2378	70	221	\N
2379	71	221	\N
2380	72	221	\N
2381	15	221	\N
2382	73	221	\N
2383	74	221	\N
2384	75	221	\N
2385	76	221	\N
2386	77	221	\N
2387	78	221	\N
2388	79	221	\N
2389	80	221	\N
2390	81	221	\N
2391	82	221	\N
2392	83	221	\N
2393	84	221	\N
2394	85	222	\N
2395	10	222	\N
2396	14	222	\N
2397	16	222	\N
2398	18	222	\N
2399	19	222	\N
2400	20	222	\N
2401	11	222	\N
2402	13	222	\N
2403	12	222	\N
2404	17	222	\N
2405	21	222	\N
2406	22	222	\N
2407	23	222	\N
2408	24	222	\N
2409	25	222	\N
2410	26	222	\N
2411	27	222	\N
2412	28	222	\N
2413	44	222	\N
2414	45	222	\N
2415	46	222	\N
2416	47	222	\N
2417	49	222	\N
2418	50	222	\N
2419	51	222	\N
2420	52	222	\N
2421	53	222	\N
2422	54	222	\N
2423	56	222	\N
2424	57	222	\N
2425	58	222	\N
2426	59	222	\N
2427	60	222	\N
2428	61	222	\N
2429	62	222	\N
2430	63	222	\N
2431	64	222	\N
2432	65	222	\N
2433	66	222	\N
2434	67	222	\N
2435	68	222	\N
2436	69	222	\N
2437	70	222	\N
2438	71	222	\N
2439	72	222	\N
2440	15	222	\N
2441	73	222	\N
2442	74	222	\N
2443	75	222	\N
2444	76	222	\N
2445	77	222	\N
2446	78	222	\N
2447	79	222	\N
2448	80	222	\N
2449	81	222	\N
2450	82	222	\N
2451	83	222	\N
2452	84	222	\N
2453	30	223	\N
2454	7	223	\N
2455	32	223	\N
2456	1	223	\N
2457	5	223	\N
2458	9	223	\N
2459	33	223	\N
2460	6	223	\N
2461	35	223	\N
2462	34	223	\N
2463	36	223	\N
2464	37	223	\N
2465	38	223	\N
2466	39	223	\N
2467	86	224	\N
2468	87	224	\N
2469	85	225	\N
2470	10	225	\N
2471	14	225	\N
2472	16	225	\N
2473	18	225	\N
2474	19	225	\N
2475	20	225	\N
2476	11	225	\N
2477	13	225	\N
2478	12	225	\N
2479	17	225	\N
2480	21	225	\N
2481	22	225	\N
2482	23	225	\N
2483	24	225	\N
2484	25	225	\N
2485	26	225	\N
2486	27	225	\N
2487	28	225	\N
2488	44	225	\N
2489	45	225	\N
2490	46	225	\N
2491	47	225	\N
2492	49	225	\N
2493	50	225	\N
2494	51	225	\N
2495	52	225	\N
2496	53	225	\N
2497	54	225	\N
2498	56	225	\N
2499	57	225	\N
2500	58	225	\N
2501	59	225	\N
2502	60	225	\N
2503	61	225	\N
2504	62	225	\N
2505	63	225	\N
2506	64	225	\N
2507	65	225	\N
2508	66	225	\N
2509	67	225	\N
2510	68	225	\N
2511	69	225	\N
2512	70	225	\N
2513	71	225	\N
2514	72	225	\N
2515	15	225	\N
2516	73	225	\N
2517	74	225	\N
2518	75	225	\N
2519	76	225	\N
2520	77	225	\N
2521	78	225	\N
2522	79	225	\N
2523	80	225	\N
2524	81	225	\N
2525	82	225	\N
2526	83	225	\N
2527	84	225	\N
2528	85	226	\N
2529	10	226	\N
2530	14	226	\N
2531	16	226	\N
2532	18	226	\N
2533	19	226	\N
2534	20	226	\N
2535	11	226	\N
2536	13	226	\N
2537	12	226	\N
2538	17	226	\N
2539	21	226	\N
2540	22	226	\N
2541	23	226	\N
2542	24	226	\N
2543	25	226	\N
2544	26	226	\N
2545	27	226	\N
2546	28	226	\N
2547	44	226	\N
2548	45	226	\N
2549	46	226	\N
2550	47	226	\N
2551	49	226	\N
2552	50	226	\N
2553	51	226	\N
2554	52	226	\N
2555	53	226	\N
2556	54	226	\N
2557	56	226	\N
2558	57	226	\N
2559	58	226	\N
2560	59	226	\N
2561	60	226	\N
2562	61	226	\N
2563	62	226	\N
2564	63	226	\N
2565	64	226	\N
2566	65	226	\N
2567	66	226	\N
2568	67	226	\N
2569	68	226	\N
2570	69	226	\N
2571	70	226	\N
2572	71	226	\N
2573	72	226	\N
2574	15	226	\N
2575	73	226	\N
2576	74	226	\N
2577	75	226	\N
2578	76	226	\N
2579	77	226	\N
2580	78	226	\N
2581	79	226	\N
2582	80	226	\N
2583	81	226	\N
2584	82	226	\N
2585	83	226	\N
2586	84	226	\N
2587	85	227	\N
2588	10	227	\N
2589	14	227	\N
2590	16	227	\N
2591	18	227	\N
2592	19	227	\N
2593	20	227	\N
2594	11	227	\N
2595	13	227	\N
2596	12	227	\N
2597	17	227	\N
2598	21	227	\N
2599	22	227	\N
2600	23	227	\N
2601	24	227	\N
2602	25	227	\N
2603	26	227	\N
2604	27	227	\N
2605	28	227	\N
2606	44	227	\N
2607	45	227	\N
2608	46	227	\N
2609	47	227	\N
2610	49	227	\N
2611	50	227	\N
2612	51	227	\N
2613	52	227	\N
2614	53	227	\N
2615	54	227	\N
2616	56	227	\N
2617	57	227	\N
2618	58	227	\N
2619	59	227	\N
2620	60	227	\N
2621	61	227	\N
2622	62	227	\N
2623	63	227	\N
2624	64	227	\N
2625	65	227	\N
2626	66	227	\N
2627	67	227	\N
2628	68	227	\N
2629	69	227	\N
2630	70	227	\N
2631	71	227	\N
2632	72	227	\N
2633	15	227	\N
2634	73	227	\N
2635	74	227	\N
2636	75	227	\N
2637	76	227	\N
2638	77	227	\N
2639	78	227	\N
2640	79	227	\N
2641	80	227	\N
2642	81	227	\N
2643	82	227	\N
2644	83	227	\N
2645	84	227	\N
2646	85	228	\N
2647	10	228	\N
2648	14	228	\N
2649	16	228	\N
2650	18	228	\N
2651	19	228	\N
2652	20	228	\N
2653	11	228	\N
2654	13	228	\N
2655	12	228	\N
2656	17	228	\N
2657	21	228	\N
2658	22	228	\N
2659	23	228	\N
2660	24	228	\N
2661	25	228	\N
2662	26	228	\N
2663	27	228	\N
2664	28	228	\N
2665	44	228	\N
2666	45	228	\N
2667	46	228	\N
2668	47	228	\N
2669	49	228	\N
2670	50	228	\N
2671	51	228	\N
2672	52	228	\N
2673	53	228	\N
2674	54	228	\N
2675	56	228	\N
2676	57	228	\N
2677	58	228	\N
2678	59	228	\N
2679	60	228	\N
2680	61	228	\N
2681	62	228	\N
2682	63	228	\N
2683	64	228	\N
2684	65	228	\N
2685	66	228	\N
2686	67	228	\N
2687	68	228	\N
2688	69	228	\N
2689	70	228	\N
2690	71	228	\N
2691	72	228	\N
2692	15	228	\N
2693	73	228	\N
2694	74	228	\N
2695	75	228	\N
2696	76	228	\N
2697	77	228	\N
2698	78	228	\N
2699	79	228	\N
2700	80	228	\N
2701	81	228	\N
2702	82	228	\N
2703	83	228	\N
2704	84	228	\N
2705	85	229	\N
2706	10	229	\N
2707	14	229	\N
2708	16	229	\N
2709	18	229	\N
2710	19	229	\N
2711	20	229	\N
2712	11	229	\N
2713	13	229	\N
2714	12	229	\N
2715	17	229	\N
2716	21	229	\N
2717	22	229	\N
2718	23	229	\N
2719	24	229	\N
2720	25	229	\N
2721	26	229	\N
2722	27	229	\N
2723	28	229	\N
2724	44	229	\N
2725	45	229	\N
2726	46	229	\N
2727	47	229	\N
2728	49	229	\N
2729	50	229	\N
2730	51	229	\N
2731	52	229	\N
2732	53	229	\N
2733	54	229	\N
2734	56	229	\N
2735	57	229	\N
2736	58	229	\N
2737	59	229	\N
2738	60	229	\N
2739	61	229	\N
2740	62	229	\N
2741	63	229	\N
2742	64	229	\N
2743	65	229	\N
2744	66	229	\N
2745	67	229	\N
2746	68	229	\N
2747	69	229	\N
2748	70	229	\N
2749	71	229	\N
2750	72	229	\N
2751	15	229	\N
2752	73	229	\N
2753	74	229	\N
2754	75	229	\N
2755	76	229	\N
2756	77	229	\N
2757	78	229	\N
2758	79	229	\N
2759	80	229	\N
2760	81	229	\N
2761	82	229	\N
2762	83	229	\N
2763	84	229	\N
2764	85	230	\N
2765	10	230	\N
2766	14	230	\N
2767	16	230	\N
2768	18	230	\N
2769	19	230	\N
2770	20	230	\N
2771	11	230	\N
2772	13	230	\N
2773	12	230	\N
2774	17	230	\N
2775	21	230	\N
2776	22	230	\N
2777	23	230	\N
2778	24	230	\N
2779	25	230	\N
2780	26	230	\N
2781	27	230	\N
2782	28	230	\N
2783	44	230	\N
2784	45	230	\N
2785	46	230	\N
2786	47	230	\N
2787	49	230	\N
2788	50	230	\N
2789	51	230	\N
2790	52	230	\N
2791	53	230	\N
2792	54	230	\N
2793	56	230	\N
2794	57	230	\N
2795	58	230	\N
2796	59	230	\N
2797	60	230	\N
2798	61	230	\N
2799	62	230	\N
2800	63	230	\N
2801	64	230	\N
2802	65	230	\N
2803	66	230	\N
2804	67	230	\N
2805	68	230	\N
2806	69	230	\N
2807	70	230	\N
2808	71	230	\N
2809	72	230	\N
2810	15	230	\N
2811	73	230	\N
2812	74	230	\N
2813	75	230	\N
2814	76	230	\N
2815	77	230	\N
2816	78	230	\N
2817	79	230	\N
2818	80	230	\N
2819	81	230	\N
2820	82	230	\N
2821	83	230	\N
2822	84	230	\N
2823	85	231	\N
2824	10	231	\N
2825	14	231	\N
2826	16	231	\N
2827	18	231	\N
2828	19	231	\N
2829	20	231	\N
2830	11	231	\N
2831	13	231	\N
2832	12	231	\N
2833	17	231	\N
2834	21	231	\N
2835	22	231	\N
2836	23	231	\N
2837	24	231	\N
2838	25	231	\N
2839	26	231	\N
2840	27	231	\N
2841	28	231	\N
2842	44	231	\N
2843	45	231	\N
2844	46	231	\N
2845	47	231	\N
2846	49	231	\N
2847	50	231	\N
2848	51	231	\N
2849	52	231	\N
2850	53	231	\N
2851	54	231	\N
2852	56	231	\N
2853	57	231	\N
2854	58	231	\N
2855	59	231	\N
2856	60	231	\N
2857	61	231	\N
2858	62	231	\N
2859	63	231	\N
2860	64	231	\N
2861	65	231	\N
2862	66	231	\N
2863	67	231	\N
2864	68	231	\N
2865	69	231	\N
2866	70	231	\N
2867	71	231	\N
2868	72	231	\N
2869	15	231	\N
2870	73	231	\N
2871	74	231	\N
2872	75	231	\N
2873	76	231	\N
2874	77	231	\N
2875	78	231	\N
2876	79	231	\N
2877	80	231	\N
2878	81	231	\N
2879	82	231	\N
2880	83	231	\N
2881	84	231	\N
2882	85	232	\N
2883	10	232	\N
2884	14	232	\N
2885	16	232	\N
2886	18	232	\N
2887	19	232	\N
2888	20	232	\N
2889	11	232	\N
2890	13	232	\N
2891	12	232	\N
2892	17	232	\N
2893	21	232	\N
2894	22	232	\N
2895	23	232	\N
2896	24	232	\N
2897	25	232	\N
2898	26	232	\N
2899	27	232	\N
2900	28	232	\N
2901	44	232	\N
2902	45	232	\N
2903	46	232	\N
2904	47	232	\N
2905	49	232	\N
2906	50	232	\N
2907	51	232	\N
2908	52	232	\N
2909	53	232	\N
2910	54	232	\N
2911	56	232	\N
2912	57	232	\N
2913	58	232	\N
2914	59	232	\N
2915	60	232	\N
2916	61	232	\N
2917	62	232	\N
2918	63	232	\N
2919	64	232	\N
2920	65	232	\N
2921	66	232	\N
2922	67	232	\N
2923	68	232	\N
2924	69	232	\N
2925	70	232	\N
2926	71	232	\N
2927	72	232	\N
2928	15	232	\N
2929	73	232	\N
2930	74	232	\N
2931	75	232	\N
2932	76	232	\N
2933	77	232	\N
2934	78	232	\N
2935	79	232	\N
2936	80	232	\N
2937	81	232	\N
2938	82	232	\N
2939	83	232	\N
2940	84	232	\N
2941	30	233	\N
2942	7	233	\N
2943	32	233	\N
2944	1	233	\N
2945	5	233	\N
2946	9	233	\N
2947	33	233	\N
2948	6	233	\N
2949	35	233	\N
2950	34	233	\N
2951	36	233	\N
2952	37	233	\N
2953	38	233	\N
2954	39	233	\N
2955	86	234	\N
2956	87	234	\N
2957	30	235	\N
2958	7	235	\N
2959	32	235	\N
2960	1	235	\N
2961	5	235	\N
2962	9	235	\N
2963	33	235	\N
2964	6	235	\N
2965	35	235	\N
2966	34	235	\N
2967	36	235	\N
2968	37	235	\N
2969	38	235	\N
2970	39	235	\N
2971	86	236	\N
2972	87	236	\N
2973	30	237	\N
2974	7	237	\N
2975	32	237	\N
2976	1	237	\N
2977	5	237	\N
2978	9	237	\N
2979	33	237	\N
2980	6	237	\N
2981	35	237	\N
2982	34	237	\N
2983	36	237	\N
2984	37	237	\N
2985	38	237	\N
2986	39	237	\N
2987	86	238	\N
2988	87	238	\N
\.


--
-- Data for Name: entity_attr_log; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.entity_attr_log (entity_attr_log_id, rattr_id, entity_id, entity_attr_value, ts_change, user_change) FROM stdin;
5	18	40	new value\r\n\r\n	2024-05-14 10:08:03.695491	d79276
6	18	40	new value\r\n\r\n	2024-05-14 10:08:28.638864	d79276
7	26	40	На неопределенный срок	2024-05-14 10:08:39.310631	d79276
8	26	40	На неопределенный срок	2024-05-14 10:08:51.282212	d79276
9	26	40	На неопределенный срок	2024-05-14 10:10:18.560498	d79276
10	26	40	На неопределенный срок 2	2024-05-14 10:10:39.112963	d79276
11	18	40	new value\r\n\r\n	2024-05-14 10:11:06.369988	d79276
12	10	53	21312312	2024-05-14 15:48:57.110612	d79276
14	21	53	первое	2024-05-14 16:02:25.927608	d79276
15	21	53	второе	2024-05-14 16:04:06.895479	d79276
13	21	53		2024-05-14 16:00:31.620167	d79276
\.


--
-- Data for Name: entity_entity; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.entity_entity (ent_ent_id, entity_id, entity_id_link, ts_created, ts_deleted, user_created, user_deleted) FROM stdin;
16	58	47	\N	\N	\N	\N
14	57	48	2024-04-01 06:00:00	\N	\N	\N
21	40	84	2024-05-22 17:12:29.426733	\N	test	\N
22	40	86	2024-05-23 17:05:26.461353	\N	test	\N
25	40	47	2024-05-26 18:10:24.550845	\N	test	\N
26	40	45	2024-05-27 09:38:39.668029	2024-05-27 14:46:25.863785	test	\N
24	40	46	2024-05-26 13:05:42.616787	2024-05-27 16:42:38.81803	test	\N
27	40	57	2024-05-27 12:04:31.671577	2024-05-27 17:05:34.23539	test	\N
28	40	91	2024-05-28 12:49:28.386402	\N	test	\N
20	40	41	2024-05-22 11:44:39.352	2024-05-28 15:09:17.127629	masterrus417	\N
29	40	41	2024-05-28 15:09:17.133524	\N	test	\N
30	120	121	2024-05-28 17:33:54.009024	\N	test	\N
31	122	123	2024-05-28 17:33:56.04116	\N	test	\N
32	124	125	2024-05-28 18:18:08.12432	\N	test	\N
33	126	127	2024-05-28 18:19:08.916357	\N	test	\N
34	128	129	2024-05-28 18:19:12.539922	\N	test	\N
35	130	131	2024-05-28 18:19:14.032452	\N	test	\N
36	132	133	2024-05-28 18:32:35.797896	\N	test	\N
37	134	135	2024-05-28 18:33:17.666549	\N	please_user	\N
38	138	139	2024-05-28 18:35:42.677358	\N	test	\N
39	140	141	2024-05-28 18:35:45.060999	\N	test	\N
40	142	143	2024-05-28 18:36:07.038867	\N	please_user	\N
41	144	145	2024-05-28 18:43:33.898535	\N	test	\N
42	146	147	2024-05-28 18:44:07.047413	\N	test	\N
43	148	149	2024-05-28 18:44:26.087263	\N	please_user	\N
44	150	151	2024-05-28 18:44:37.630055	\N	please_user	\N
45	152	153	2024-05-28 18:48:47.28947	\N	please_user	\N
46	154	155	2024-05-28 18:49:22.82449	\N	test	\N
47	156	157	2024-05-28 18:52:11.229259	\N	please_user	\N
48	158	159	2024-05-28 19:09:53.213332	\N	please_user	\N
49	160	161	2024-05-28 19:11:42.615695	\N	please_user	\N
50	162	163	2024-05-28 19:15:00.879639	\N	please_user	\N
51	164	165	2024-05-28 19:16:26.48007	\N	please_user	\N
52	166	167	2024-05-28 19:19:14.799274	\N	please_user	\N
53	168	169	2024-05-28 19:20:59.533996	\N	please_user	\N
54	170	171	2024-05-28 19:21:49.815185	\N	please_user	\N
55	172	173	2024-05-28 19:22:31.747084	\N	please_user	\N
56	174	175	2024-05-28 19:24:12.597285	\N	please_user	\N
57	176	177	2024-05-28 19:25:42.044122	\N	please_user	\N
58	178	179	2024-05-28 19:26:16.333755	\N	please_user	\N
59	180	181	2024-05-28 19:28:30.545216	\N	please_user	\N
60	182	183	2024-05-28 19:31:28.689044	\N	please_user	\N
61	184	185	2024-05-28 19:40:39.028879	\N	please_user	\N
62	186	187	2024-05-28 19:42:22.092902	\N	please_user	\N
63	188	189	2024-05-28 19:43:54.785048	\N	please_user	\N
64	190	191	2024-05-28 19:44:53.424692	\N	please_user	\N
65	192	193	2024-05-28 19:45:21.446503	\N	please_user	\N
66	194	195	2024-05-28 19:46:13.104017	\N	please_user	\N
67	196	197	2024-05-28 19:48:25.919884	\N	please_user	\N
68	198	199	2024-05-28 19:50:38.170292	\N	please_user	\N
69	200	201	2024-05-28 19:52:29.791241	\N	please_user	\N
70	202	203	2024-05-28 19:53:28.785542	\N	please_user	\N
71	204	205	2024-05-28 19:54:18.574478	\N	please_user	\N
72	206	207	2024-05-28 19:55:39.127473	\N	please_user	\N
73	208	209	2024-05-28 19:58:45.704479	\N	please_user	\N
74	210	211	2024-05-28 20:00:43.820497	\N	please_user	\N
75	212	213	2024-05-28 20:02:11.233687	\N	please_user	\N
76	214	215	2024-05-28 20:04:21.091695	\N	please_user	\N
77	216	217	2024-05-28 20:08:05.821763	\N	please_user	\N
78	218	219	2024-05-28 20:09:47.783396	\N	please_user	\N
79	223	224	2024-05-28 20:12:40.293445	\N	please_user	\N
80	233	234	2024-05-29 02:23:41.391994	\N	please_user	\N
81	235	236	2024-05-29 02:24:48.52034	\N	please_user	\N
82	237	238	2024-05-29 02:25:34.768268	\N	please_user	\N
\.


--
-- Data for Name: entity_stage; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.entity_stage (entity_stage_id, rstage_id, entity_id, ts_action, raction_id, user_action, ts_created, user_created, entity_stage_entity_id) FROM stdin;
7	1	53	2024-05-13 06:00:47.047975	4	please_test	2024-05-06 14:12:06.554244	please_test	\N
8	3	53	2024-05-13 06:00:47	\N	\N	2024-05-07 05:12:06.705666	please_test	\N
9	4	53	2024-05-13 06:00:47	\N	\N	2024-05-13 05:59:14.51705	please_test	\N
10	4	53	2024-05-13 06:00:47	\N	\N	2024-05-13 05:59:14.579928	please_test	\N
1	4	53	2024-05-13 06:02:38.408562	5	please_test	2024-05-02 01:30:25	\N	\N
12	3	53	2024-05-13 06:05:55.597687	4	please_test	2024-05-13 01:02:38.45127	please_test	\N
11	1	53	2024-05-15 12:30:50.771781	4	admin	2024-05-12 20:02:38.421873	please_test	\N
14	4	91	\N	\N	\N	2024-05-18 16:21:37.452	masterrus417	\N
13	4	53	2024-05-26 14:01:49.693375	5	test	2024-05-12 20:04:59.039431	please_test	\N
31	1	53	\N	\N	\N	2024-05-26 14:01:49.713537	test	\N
32	3	53	\N	\N	\N	2024-05-26 14:01:49.717897	test	\N
34	4	117	\N	\N	\N	2024-05-28 17:24:21.496431	test	\N
35	4	118	\N	\N	\N	2024-05-28 17:31:44.069521	test	119
36	4	120	\N	\N	\N	2024-05-28 17:33:54.000948	test	121
37	4	122	\N	\N	\N	2024-05-28 17:33:56.027785	test	123
38	4	124	\N	\N	\N	2024-05-28 18:18:08.113235	test	125
39	4	126	\N	\N	\N	2024-05-28 18:19:08.819136	test	127
40	4	128	\N	\N	\N	2024-05-28 18:19:12.464083	test	129
41	4	130	\N	\N	\N	2024-05-28 18:19:13.946987	test	131
42	4	132	\N	\N	\N	2024-05-28 18:32:35.705068	test	133
43	4	134	\N	\N	\N	2024-05-28 18:33:17.593427	please_user	135
44	4	136	\N	\N	\N	2024-05-28 18:34:57.23523	test	\N
45	4	138	\N	\N	\N	2024-05-28 18:35:42.592957	test	139
46	4	140	\N	\N	\N	2024-05-28 18:35:44.981343	test	141
47	4	142	\N	\N	\N	2024-05-28 18:36:06.965425	please_user	143
48	4	144	\N	\N	\N	2024-05-28 18:43:33.834423	test	145
49	4	146	\N	\N	\N	2024-05-28 18:44:06.95322	test	147
50	4	148	\N	\N	\N	2024-05-28 18:44:26.003516	please_user	149
51	4	150	\N	\N	\N	2024-05-28 18:44:37.571065	please_user	151
52	4	152	\N	\N	\N	2024-05-28 18:48:47.205835	please_user	153
53	4	154	\N	\N	\N	2024-05-28 18:49:22.809341	test	155
54	4	156	\N	\N	\N	2024-05-28 18:52:11.207885	please_user	157
55	4	158	\N	\N	\N	2024-05-28 19:09:53.190306	please_user	159
56	4	160	\N	\N	\N	2024-05-28 19:11:42.601526	please_user	161
57	4	162	\N	\N	\N	2024-05-28 19:15:00.865134	please_user	163
58	4	164	\N	\N	\N	2024-05-28 19:16:26.455746	please_user	165
59	4	166	\N	\N	\N	2024-05-28 19:19:14.773602	please_user	167
60	4	168	\N	\N	\N	2024-05-28 19:20:59.508922	please_user	169
61	4	170	\N	\N	\N	2024-05-28 19:21:49.791584	please_user	171
62	4	172	\N	\N	\N	2024-05-28 19:22:31.72862	please_user	173
63	4	174	\N	\N	\N	2024-05-28 19:24:12.569716	please_user	175
64	4	176	\N	\N	\N	2024-05-28 19:25:42.024762	please_user	177
65	4	178	\N	\N	\N	2024-05-28 19:26:16.308975	please_user	179
66	4	180	\N	\N	\N	2024-05-28 19:28:30.518093	please_user	181
67	4	182	\N	\N	\N	2024-05-28 19:31:28.662281	please_user	183
68	4	184	\N	\N	\N	2024-05-28 19:40:39.011307	please_user	185
69	4	186	\N	\N	\N	2024-05-28 19:42:22.068721	please_user	187
70	4	188	\N	\N	\N	2024-05-28 19:43:54.761804	please_user	189
71	4	190	\N	\N	\N	2024-05-28 19:44:53.410386	please_user	191
72	4	192	\N	\N	\N	2024-05-28 19:45:21.422525	please_user	193
73	4	194	\N	\N	\N	2024-05-28 19:46:13.079726	please_user	195
74	4	196	\N	\N	\N	2024-05-28 19:48:25.894188	please_user	197
75	4	198	\N	\N	\N	2024-05-28 19:50:38.146635	please_user	199
76	4	200	\N	\N	\N	2024-05-28 19:52:29.768284	please_user	201
77	4	202	\N	\N	\N	2024-05-28 19:53:28.760228	please_user	203
78	4	204	\N	\N	\N	2024-05-28 19:54:18.550551	please_user	205
79	4	206	\N	\N	\N	2024-05-28 19:55:39.100773	please_user	207
80	4	208	\N	\N	\N	2024-05-28 19:58:45.68979	please_user	209
81	4	210	\N	\N	\N	2024-05-28 20:00:43.80616	please_user	211
82	4	212	\N	\N	\N	2024-05-28 20:02:11.211056	please_user	213
83	4	214	\N	\N	\N	2024-05-28 20:04:21.070421	please_user	215
84	4	216	\N	\N	\N	2024-05-28 20:08:05.790676	please_user	217
85	4	218	\N	\N	\N	2024-05-28 20:09:47.757252	please_user	219
86	9	220	\N	\N	\N	2024-05-28 20:11:12.715362	please_user	\N
87	9	221	\N	\N	\N	2024-05-28 20:11:37.558189	please_user	\N
88	9	222	\N	\N	\N	2024-05-28 20:12:13.834812	please_user	\N
89	4	223	\N	\N	\N	2024-05-28 20:12:40.271078	please_user	224
90	9	225	\N	\N	\N	2024-05-28 20:13:31.366971	please_user	\N
91	9	226	\N	\N	\N	2024-05-28 20:31:33.062681	please_user	\N
92	9	227	\N	\N	\N	2024-05-29 02:02:28.987398	test	\N
93	9	228	\N	\N	\N	2024-05-29 02:09:15.404267	test	\N
94	9	229	\N	\N	\N	2024-05-29 02:09:17.23504	test	\N
95	9	230	\N	\N	\N	2024-05-29 02:09:51.455469	test	\N
96	9	231	\N	\N	\N	2024-05-29 02:10:21.657583	test	\N
97	9	232	\N	\N	\N	2024-05-29 02:11:48.265005	test	\N
98	4	233	\N	\N	\N	2024-05-29 02:23:41.368366	please_user	234
99	4	235	\N	\N	\N	2024-05-29 02:24:48.493174	please_user	236
100	4	237	\N	\N	\N	2024-05-29 02:25:34.754076	please_user	238
\.


--
-- Data for Name: ref_action; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_action (raction_id, raction_name, raction_label) FROM stdin;
3	reject	Отклонить
2	approve	Утвердить
6	resume_reject	Отклонить резюме
5	resume_accept	Принять резюме
4	resume_rollback	Отправить на принятие резюме
11	request_send_approve	Отправить на утверждение руководителем подразделения
1	move_on	Отправить на следующий этап
8	request_reject	Отклонить заявку
7	request_approve	Утвердить заявку
\.


--
-- Data for Name: ref_actor; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_actor (ractor_id, ractor_auth_group_name, ractor_label, ractor_name) FROM stdin;
1	pls_recruter	Процесс принятия кандидата	recruting
2	pls_ceo	Просмотр отчета	main_report
4	pls_ceo	Утверждение заявки службой управления персоналом	request_approve_hr
5	pls_div_head	Утверждение заявки подразделением	request_approve_div
6	pls_div	Создание заявки	request_create
8	pls_admin	Администратор делает все	admin
\.


--
-- Data for Name: ref_attr; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_attr (rattr_id, rattr_name, rattr_type, rattr_label, rattr_required, rattr_system, rattr_group_id, rattr_no, rattr_view, rattr_multilple) FROM stdin;
49	material_responsibility	dict	Материальная ответственность	\N	\N	4	23	\N	\N
30	resume	date	Дата поступления резюме	\N	\N	2	1	\N	\N
32	come_from	dict	Откуда пришел	\N	\N	2	3	\N	\N
1	surname	string	Фамилия	t	f	2	4	t	\N
5	name	string	Имя	\N	\N	2	5	t	\N
9	patronymic	string	Отчество	\N	\N	2	6	t	\N
6	birth_date	date	Дата рождения	\N	\N	2	8	t	\N
15	source	dict	Источник вакансии	\N	\N	4	46	\N	\N
14	approve_date	date	Дата утверждения	\N	\N	4	2	t	\N
41	ready_education	dict	Готовность к обучению	\N	\N	5	15	\N	\N
33	gender	dict	Пол	\N	\N	2	7	\N	\N
50	shifts	dict	Рабочее время	\N	\N	4	24	\N	\N
51	shifts_code	string	Код графика	\N	\N	4	25	\N	\N
52	shift_descr	longstring	Описание графика для внесения в ТД	\N	\N	4	26	\N	\N
34	phone	string	Телефон	\N	\N	2	9	\N	\N
35	email	string	Электронная почта	\N	\N	2	9	\N	\N
63	vacation_not_28	string	Продолжительности основного отпуска, если не равен 28 к. дней	\N	\N	4	36	\N	\N
36	education	dict	Образование	\N	\N	2	10	\N	\N
37	speciality	string	Специальность	\N	\N	2	11	\N	\N
38	additional_education	string	Дополнительные профессии, навыки, компетенции	\N	\N	2	12	\N	\N
39	docs	longstring	Документы	\N	\N	2	13	\N	\N
53	card_spec	string	Карта спецоценки условий труда	\N	\N	4	27	\N	\N
16	type	dict	Тип заявки	\N	\N	4	3	\N	\N
11	division	string	Подразделение	\N	\N	4	7	t	\N
18	difficulty	dict	Сложность подбора	\N	\N	4	4	\N	\N
13	div_group	string	Структурное подразделение	\N	\N	4	8	\N	\N
19	close_date	date	Целевой срок закрытия заявки	\N	\N	4	5	\N	\N
20	recrouter	dict	Рекрутер	\N	\N	4	6	\N	\N
12	position_name	string	Наименование вакантной должности	\N	\N	4	9	t	\N
57	salary_oper	dict	Оперативная премия,%	\N	\N	4	30	\N	\N
17	category	dict	Категория	\N	\N	4	10	\N	\N
40	target	string	Цель резюме	\N	\N	5	14	\N	\N
72	class	dict	Класс условий труда	\N	\N	4	45	\N	\N
58	salary_region	string	Районный коэффициент, %	\N	\N	4	31	\N	\N
21	address	string	Фактический адрес рабочего места	\N	\N	4	11	\N	\N
43	comment	longstring	Комментарии	\N	\N	5	17	\N	\N
42	mark	dict	Признак резюме	\N	\N	5	16	\N	\N
44	secondment_length	string	Продолжительность командировок (% рабочего времени)	\N	\N	4	19	\N	\N
45	salary	string	Средний уровень зарплаты, руб	\N	\N	4	20	\N	\N
59	salary_1011	string	ш. 1011	\N	\N	4	32	\N	\N
54	lpp	dict	Лечебно-профилактическое питание	\N	\N	4	28	\N	\N
24	manager	longstring	Непосредственный руководитель	\N	\N	4	14	\N	\N
22	f1	longstring	О преимуществах работы	\N	\N	4	12	\N	\N
23	f2	string	Количество подчиненных	\N	\N	4	13	\N	\N
60	salary_1018	dict	За вредные условия труда (ш. 1018)	\N	\N	4	33	\N	\N
25	f3	longstring	Функциональные задачи и зона ответственности	\N	\N	4	15	\N	\N
26	f3	dict	Вид трудового договора	\N	\N	4	16	\N	\N
27	f4	dict	Режим работы	\N	\N	4	17	\N	\N
56	milk	dict	Молоко	\N	\N	4	29	\N	\N
28	secondment	dict	Командировки	\N	\N	4	18	\N	\N
46	stud_education	dict	При заключении ученического договора обучение	\N	\N	4	21	\N	\N
47	stud_education_hours	string	Количество часов обучения (если требуется)	\N	\N	4	22	\N	\N
64	vacation_not_28_descr	longstring	Причина продолжительности основного отпуска не равного 28 к. дней	\N	\N	4	37	\N	\N
65	pens	dict	Право на льготное пенсионное обеспечение	\N	\N	4	38	\N	\N
66	acc_form	dict	Форма допуска	\N	\N	4	39	\N	\N
67	position	string	Позиция профессии	\N	\N	4	40	\N	\N
61	add_vacation	dict	Дополнительный отпуск предоставляется	\N	\N	4	34	\N	\N
62	add_vacation_days	dict	Дополнительный отпуск, дней	\N	\N	4	35	\N	\N
73	replace_fio	string	ФИО работника который увольняется/переводится/временно отсутствует	\N	\N	4	47	\N	\N
69	expances_source	string	Место возникновения затрат	\N	\N	4	42	\N	\N
68	expances_code	string	Код производственных щатрат	\N	\N	4	41	\N	\N
70	harms	dict	Опасные и вредные производственные факторы	\N	\N	4	43	\N	\N
71	psyco	dict	Виды деятельности, при осуществлении которых проводится психиатрическое освидетельствование	\N	\N	4	44	\N	\N
74	replace_descr	string	Причина отсутствия	\N	\N	4	48	\N	\N
75	replace_date	date	Последний день работы	\N	\N	4	49	\N	\N
76	comment	longstring	Дополнительные комментарии к вакансии	\N	\N	4	50	\N	\N
78	req_spec	string	Специальность	\N	\N	4	52	\N	\N
7	source	dict	Источник кандидата	\N	\N	2	2	t	\N
10	request_no	string	Номер заявки	t	\N	4	1	t	\N
81	req_exp	string	Требования к опыту работы	\N	\N	4	55	\N	\N
80	req_spec_progr	longstring	Знание специального программного обеспечения	\N	\N	4	54	\N	\N
79	req_dop_education	longstring	Дополнительное профессиональное образование, специальная подготовка, профессиональные сертификаты	\N	\N	4	53	\N	\N
77	req_education	dict	Образование	\N	\N	4	51	\N	\N
82	req_test	dict	Потребность в дополнительном тестировании кандидата	\N	\N	4	56	\N	\N
83	req_characteristics	longstring	Компетенции, личностные характеристики, которые требуется оценить	\N	\N	4	57	\N	\N
84	req_comment	longstring	Дополнительные требования к кандидату	\N	\N	4	58	\N	\N
85	status	dict	Статус	\N	\N	4	0	\N	\N
86	to_db	bool	Резюме сохранено в электронную базу резюме	\N	\N	8	1	\N	\N
87	documents_pack	bool	Кандидату выдан пакет документов	\N	\N	8	2	\N	\N
88	iq_result	number	IQ кандидата	\N	\N	9	1	\N	\N
89	psycho_check_result	number	Баллы психологического теста	\N	\N	11	1	\N	\N
90	psycho_ckeck_conclusion	longstring	Заключение психолога	\N	\N	11	2	\N	\N
\.


--
-- Data for Name: ref_attr_actor; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_attr_actor (rattr_actor_id, rattr_id, ractor_id, rstage_id) FROM stdin;
\.


--
-- Data for Name: ref_attr_dict; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_attr_dict (rattr_dict_id, rattr_id, rattr_dict_no, rattr_dict_name, rattr_dict_label) FROM stdin;
29	32	8	student	студент/выпускник МИФИ, ППТ
30	32	9	social_network	соцсети
31	32	10	your_vacancy	твоя вакансия
32	32	11	bazaar	ярмарки вакансий
33	32	12	other	другое
34	33	1	male	муж
3	17	1	main	основной рабочий
4	17	2	all	прочий персонал
5	16	1	normal	В рамках предельной численности
6	16	2	loss	Под перспективную убыль
35	33	2	female	жен
7	16	3	over	Сверх предельной численности
8	18	1	high	Высокая
10	18	2	average	Средняя
11	18	3	low	Низкая
12	20	1	sokolova	Соколова С.И.
13	20	2	ivanova	Иванова И.И.
75	61	3	other	другое
14	26	1	uncertain	На неопределенный срок
15	26	2	period	Срочный трудовой договор
16	26	3	part-time	По совместительству
17	27	1	shifts	Сменный
18	27	2	weekend	С предоставлением выходных дней
81	65	1	no	отсутствует
19	28	1	yes	Предполагаются
20	28	2	no	Не предполагаются
21	32	1	career_day	дни карьеры
1	7	1	outer	трудоустройство
82	65	2	list_1	Список №1
22	32	2	army	из армии
83	65	3	list_2	Список №2
23	32	3	division	кандидат подразделения
2	7	2	inner	сотрудник предприятия
56	50	1	5_2	Пятидневная рабочая неделя с выходными днями СБ,ВС
57	50	2	5_0	Пятидневная рабочая неделя с предоставлением выходных по индивидуальному графику
84	66	1	no	Без анкеты
58	50	3	7_0	Рабочая неделя с предоставлением выходных дней по скользящему графику
36	36	1	vpo	Высшее профессиональное
37	36	2	spo	Среднее профессиональное
39	36	4	so	Среднее общее
40	36	5	nv	Неоконченое высшее
41	41	1	yes	Да
85	66	2	1	1
24	32	4	site	работные сайты
26	32	5	referal	реферал (привел сотрудник комбината)
28	32	7	saraphan	сарафанное радио
27	32	6	himself	сам пришел
42	41	2	no	Нет
86	66	3	2	2
87	66	4	3	3
38	36	3	npo	Начальное профессиональное
90	70	1	no	без вредных и опасных производственных факторов
67	60	2	6	6
68	60	3	8	8
69	60	4	10	10
64	56	1	yes	Да
65	56	2	no	Нет
59	54	1	lpp_no	ЛПП нет
60	54	2	lpp_1	ЛПП №1
61	54	3	lpp_2	ЛПП №2
62	54	4	lpp_3	ЛПП №3
43	42	1	pp1	ПП1
44	42	1	pp2	ПП2
63	54	5	lpp_4	ЛПП №4
45	42	2	pp3	ПП3
46	42	3	pp4	ПП4
47	42	4	pp5	ПП5
48	42	5	pp6	ПП6
49	42	6	pp7	ПП7
50	42	7	pp8	П8-инвалиды
51	42	8	pp9	П9-МС
52	46	1	no	не требуется
53	46	2	yes	требуется
54	49	1	yes	Да
55	49	2	no	Нет
66	60	1	4	4
70	60	5	12	12
71	60	6	16	16
72	60	7	24	24
88	70	2	184	1.8.4 Фтор
89	70	3	44	4.4 Шум
91	71	1	no	отсутствуют
92	71	2	10	Деятельность, связанная с работами с использованием сведений, составляющими государственную тайну
96	72	3	2	2.0 - допустимые
93	71	3	11	Деятельность в сфере электроэнергетики, связанная с организацией и осуществлением монтажа, наладки, технического обслуживания, ремонта, управления режимом работы электроустановок
94	72	1	no	рабочее место не аттестовано
95	72	2	1	1.0 - оптимальные
77	62	1	3	3
78	62	2	7	7
79	62	3	14	14
80	62	4	21	21
73	61	1	harmful	за вредные условия труда
74	61	2	not_norm	за ненормированный рабочий день
98	72	5	32	3.2 - вредные
97	72	4	31	3.1 - вредные
99	72	6	33	3.3 - вредные
100	72	7	34	3.4 - вредные
101	72	8	40	4.0 - опасные
103	15	2	new	создание нового подразделения/ввод новой должности в штатное расписание
102	15	1	fill	незаполненная вакансия по штатному расписанию
104	15	3	replacment	замещение должности увольняющегося работника
106	15	5	replacement_temporary	замещение временно отсутствующего работника
105	15	4	transfer	перевод работника (внутри организации)
110	77	4	no	без требований к образованию
109	77	3	np	начальное профессиональное
108	77	2	sp	среднее профессиональное
107	77	1	vp	высшее профессиональное
111	82	1	yes	Да
112	82	2	no	Нет
113	85	1	created	Создана
115	85	3	approved	Утверждена
114	85	2	on_approvement	На согласовании
116	85	4	planned	Включена в план подбора
\.


--
-- Data for Name: ref_attr_group; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_attr_group (rattr_group_id, rattr_group_name, rattr_group_label, rattr_group_no, rentity_type_id) FROM stdin;
4	request_attributes	Атрибуты заявки	1	4
2	candidate_attributes	Атрибуты кандидата	1	2
5	candidate_attributes_ext	Дополнительные атрибуты кандидата	2	2
9	stage_candidate_iq_test	Чек-лист IQ теста	1	5
6	stage_request_approve	Чек-лист согласования заявки	1	\N
7	stage_request_work	Чек-лист обработки заявки	1	\N
8	stage_candidate_resume_approval	Чек-лист принятия кандидата	1	7
11	stage_candidate_psycho_check	Чек-лист психологической проверки	1	6
\.


--
-- Data for Name: ref_attr_group_actor; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_attr_group_actor (rattr_group_actor_id, rattr_group_id, ractor_id, can_edit, can_read) FROM stdin;
\.


--
-- Data for Name: ref_attr_outer; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_attr_outer (rattr_outer_id, rattr_id, rattr_outer_name, rattr_outer_label, rattr_outer_fields, rattr_outer_path, rattr_outer_key, rattr_outer_sort) FROM stdin;
\.


--
-- Data for Name: ref_entity_filter; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_entity_filter (rentity_filter_id, rentity_type_id, rentity_filter_name, rentity_filter_label) FROM stdin;
2	2	short_candidate	короткий фильтр
1	2	candidate_list	фильтр для листа кандидатов
3	4	request_list	фильтр для листа заявок
\.


--
-- Data for Name: ref_entity_filter_attr; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_entity_filter_attr (ref_entity_filter_attr_id, rattr_id, rentity_filter_id) FROM stdin;
1	1	1
2	5	1
3	6	1
4	7	1
5	9	1
8	10	3
9	16	3
10	14	3
11	11	3
\.


--
-- Data for Name: ref_entity_type; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_entity_type (rentity_type_id, rentity_type_name, rentity_type_label, rroute_id) FROM stdin;
2	candidate	Кандидат	3
6	stage_psycho	Этап психологического теста	\N
5	stage_iq	Этап теста на IQ	\N
7	stage_resume	Этап принятия заявки	\N
4	request	Заявка на подбор персонала	1
\.


--
-- Data for Name: ref_route; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_route (rroute_id, rroute_name, rroute_label, rstage_id_start) FROM stdin;
3	default_candidate	Стандартный кандидат	4
1	default_request	Стандартная заявка	9
\.


--
-- Data for Name: ref_stage; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_stage (rstage_id, rstage_name, rstage_label, rstage_wait_others, rroute_id, rentity_type_id) FROM stdin;
6	fbi_check	Проверка ФСБ	t	3	\N
5	candidate_rejected	Кандидат отклонен	f	3	\N
7	request_approval_division	Согласование начальником подразделения	f	1	\N
8	request_approval_hr	Согласование начальником службы управления персоналом	\N	1	\N
9	request_created	Заявка создана	\N	1	\N
11	request_work	Обработка заявки	\N	1	\N
12	candidate_employed	Кандидат полностью трудоустроен	\N	1	\N
1	psycho_check	Психологическое тестирование	f	3	6
3	iq_test	Тестирование IQ	f	3	5
4	resume	Прием резюме	f	3	7
\.


--
-- Data for Name: ref_stage_action; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_stage_action (rstage_action_id, rstage_id, raction_id) FROM stdin;
1	4	5
7	6	4
5	3	4
4	1	4
3	4	6
8	7	7
9	7	8
12	9	11
13	6	1
10	8	7
11	8	8
14	1	1
15	3	1
\.


--
-- Data for Name: ref_stage_action_actor; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_stage_action_actor (rstage_action_actor_id, rstage_action_id, ractor_id) FROM stdin;
1	1	1
2	3	1
3	4	1
4	5	1
6	9	5
5	8	5
7	10	4
8	11	4
9	12	6
10	1	8
11	3	8
12	4	8
13	5	8
14	8	8
15	9	8
16	10	8
17	11	8
18	12	8
20	7	1
\.


--
-- Data for Name: ref_stage_action_stage; Type: TABLE DATA; Schema: pls; Owner: root
--

COPY pls.ref_stage_action_stage (rstage_action_stage_id, rstage_action_id, rstage_id) FROM stdin;
2	1	1
3	1	3
4	3	5
5	4	4
6	5	4
12	12	7
13	13	12
9	7	4
11	9	9
8	8	8
14	11	9
10	10	11
16	15	6
17	14	6
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: test; Owner: please_user
--

COPY test.test (id, name) FROM stdin;
1	21321
2	123213123
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.auth_group_id_seq', 5, true);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_log_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.auth_log_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.auth_permission_id_seq', 1, false);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.auth_user_groups_id_seq', 1, true);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: django_auth_user
--

SELECT pg_catalog.setval('auth.auth_user_id_seq', 5, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.django_admin_log_id_seq', 1, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.django_content_type_id_seq', 1, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: root
--

SELECT pg_catalog.setval('auth.django_migrations_id_seq', 1, false);


--
-- Name: entity_attr_ent_attr_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.entity_attr_ent_attr_id_seq', 2988, true);


--
-- Name: entity_attr_log_entity_attr_log_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.entity_attr_log_entity_attr_log_id_seq', 15, true);


--
-- Name: entity_ent_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.entity_ent_id_seq', 238, true);


--
-- Name: entity_entity_ent_ent_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.entity_entity_ent_ent_id_seq', 82, true);


--
-- Name: entity_stage_entity_stage_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.entity_stage_entity_stage_id_seq', 100, true);


--
-- Name: entity_types_ent_type_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.entity_types_ent_type_id_seq', 7, true);


--
-- Name: ref_action_raction_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_action_raction_id_seq', 12, true);


--
-- Name: ref_actor_ractor_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_actor_ractor_id_seq', 8, true);


--
-- Name: ref_attr_actor_rattr_actor_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_attr_actor_rattr_actor_id_seq', 1, false);


--
-- Name: ref_attr_dict_rattr_dict_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_attr_dict_rattr_dict_id_seq', 116, true);


--
-- Name: ref_attr_group_actor_rattr_group_actor_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_attr_group_actor_rattr_group_actor_id_seq', 1, false);


--
-- Name: ref_attr_group_rag_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_attr_group_rag_id_seq', 11, true);


--
-- Name: ref_attr_outer_rattr_outer_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_attr_outer_rattr_outer_id_seq', 1, false);


--
-- Name: ref_attr_rattr_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_attr_rattr_id_seq', 90, true);


--
-- Name: ref_entity_filter_attr_ref_entity_filter_attr_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_entity_filter_attr_ref_entity_filter_attr_id_seq', 11, true);


--
-- Name: ref_entity_filter_rentity_filter_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_entity_filter_rentity_filter_id_seq', 3, true);


--
-- Name: ref_route_rroute_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_route_rroute_id_seq', 4, true);


--
-- Name: ref_stage_action_actor_ref_stage_action_actor_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_stage_action_actor_ref_stage_action_actor_id_seq', 20, true);


--
-- Name: ref_stage_actor_ref_stage_actor_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_stage_actor_ref_stage_actor_id_seq', 15, true);


--
-- Name: ref_stage_actor_stage_rstage_action_stage_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_stage_actor_stage_rstage_action_stage_id_seq', 17, true);


--
-- Name: ref_stage_rstage_id_seq; Type: SEQUENCE SET; Schema: pls; Owner: root
--

SELECT pg_catalog.setval('pls.ref_stage_rstage_id_seq', 12, true);


--
-- Name: test_ss_seq; Type: SEQUENCE SET; Schema: test; Owner: please_user
--

SELECT pg_catalog.setval('test.test_ss_seq', 2, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_log auth_log_pk; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_log
    ADD CONSTRAINT auth_log_pk PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: auth; Owner: django_auth_user
--

ALTER TABLE ONLY auth.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: auth; Owner: django_auth_user
--

ALTER TABLE ONLY auth.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: authtoken_token authtoken_token_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: entity_attr_log entity_attr_log_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr_log
    ADD CONSTRAINT entity_attr_log_pkey PRIMARY KEY (entity_attr_log_id);


--
-- Name: entity_attr entity_attr_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr
    ADD CONSTRAINT entity_attr_pkey PRIMARY KEY (entity_attr_id);


--
-- Name: entity_entity entity_entity_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_pkey PRIMARY KEY (ent_ent_id);


--
-- Name: entity entity_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity
    ADD CONSTRAINT entity_pkey PRIMARY KEY (entity_id);


--
-- Name: entity_stage entity_stage_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_stage
    ADD CONSTRAINT entity_stage_pkey PRIMARY KEY (entity_stage_id);


--
-- Name: ref_entity_type entity_types_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_type
    ADD CONSTRAINT entity_types_pkey PRIMARY KEY (rentity_type_id);


--
-- Name: ref_action ref_action_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_action
    ADD CONSTRAINT ref_action_pkey PRIMARY KEY (raction_id);


--
-- Name: ref_actor ref_actor_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_actor
    ADD CONSTRAINT ref_actor_pkey PRIMARY KEY (ractor_id);


--
-- Name: ref_attr_actor ref_attr_actor_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_actor
    ADD CONSTRAINT ref_attr_actor_pkey PRIMARY KEY (rattr_actor_id);


--
-- Name: ref_attr_dict ref_attr_dict_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_dict
    ADD CONSTRAINT ref_attr_dict_pkey PRIMARY KEY (rattr_dict_id);


--
-- Name: ref_attr_group_actor ref_attr_group_actor_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group_actor
    ADD CONSTRAINT ref_attr_group_actor_pkey PRIMARY KEY (rattr_group_actor_id);


--
-- Name: ref_attr_group ref_attr_group_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group
    ADD CONSTRAINT ref_attr_group_pkey PRIMARY KEY (rattr_group_id);


--
-- Name: ref_attr_outer ref_attr_outer_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_outer
    ADD CONSTRAINT ref_attr_outer_pkey PRIMARY KEY (rattr_outer_id);


--
-- Name: ref_attr ref_attr_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr
    ADD CONSTRAINT ref_attr_pkey PRIMARY KEY (rattr_id);


--
-- Name: ref_entity_filter_attr ref_entity_filter_attr_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_filter_attr
    ADD CONSTRAINT ref_entity_filter_attr_pkey PRIMARY KEY (ref_entity_filter_attr_id);


--
-- Name: ref_entity_filter ref_entity_filter_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_filter
    ADD CONSTRAINT ref_entity_filter_pkey PRIMARY KEY (rentity_filter_id);


--
-- Name: ref_route ref_route_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_route
    ADD CONSTRAINT ref_route_pkey PRIMARY KEY (rroute_id);


--
-- Name: ref_stage_action_actor ref_stage_action_actor_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_actor
    ADD CONSTRAINT ref_stage_action_actor_pkey PRIMARY KEY (rstage_action_actor_id);


--
-- Name: ref_stage_action ref_stage_actor_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action
    ADD CONSTRAINT ref_stage_actor_pkey PRIMARY KEY (rstage_action_id);


--
-- Name: ref_stage_action_stage ref_stage_actor_stage_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_stage
    ADD CONSTRAINT ref_stage_actor_stage_pkey PRIMARY KEY (rstage_action_stage_id);


--
-- Name: ref_stage ref_stage_pkey; Type: CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage
    ADD CONSTRAINT ref_stage_pkey PRIMARY KEY (rstage_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_group_name_a6ea08ec_like ON auth.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON auth.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON auth.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON auth.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_user_groups_group_id_97559544 ON auth.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON auth.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON auth.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON auth.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: auth; Owner: django_auth_user
--

CREATE INDEX auth_user_username_6821ab7c_like ON auth.auth_user USING btree (username);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON auth.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON auth.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX django_session_expire_date_a5c62663 ON auth.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: auth; Owner: root
--

CREATE INDEX django_session_session_key_c0390e0f_like ON auth.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: entity_attr_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX entity_attr_idx ON pls.entity_attr USING btree (rattr_id);


--
-- Name: entity_attr_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX entity_attr_idx1 ON pls.entity_attr USING btree (entity_id);


--
-- Name: entity_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX entity_idx ON pls.entity USING btree (rentity_type_id);


--
-- Name: entity_stage_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX entity_stage_idx ON pls.entity_stage USING btree (rstage_id);


--
-- Name: entity_stage_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX entity_stage_idx1 ON pls.entity_stage USING btree (entity_id);


--
-- Name: entity_stage_idx2; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX entity_stage_idx2 ON pls.entity_stage USING btree (raction_id);


--
-- Name: ref_actor_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_actor_idx ON pls.ref_actor USING btree (ractor_auth_group_name);


--
-- Name: ref_attr_actor_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_attr_actor_idx ON pls.ref_attr_actor USING btree (rattr_id);


--
-- Name: ref_attr_actor_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_attr_actor_idx1 ON pls.ref_attr_actor USING btree (ractor_id);


--
-- Name: ref_attr_actor_idx2; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_attr_actor_idx2 ON pls.ref_attr_actor USING btree (rstage_id);


--
-- Name: ref_attr_group_actor_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_attr_group_actor_idx ON pls.ref_attr_group_actor USING btree (ractor_id);


--
-- Name: ref_attr_group_actor_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_attr_group_actor_idx1 ON pls.ref_attr_group_actor USING btree (rattr_group_id);


--
-- Name: ref_entity_filter_attr_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_entity_filter_attr_idx ON pls.ref_entity_filter_attr USING btree (rattr_id);


--
-- Name: ref_entity_filter_attr_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_entity_filter_attr_idx1 ON pls.ref_entity_filter_attr USING btree (rentity_filter_id);


--
-- Name: ref_entity_filter_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_entity_filter_idx ON pls.ref_entity_filter USING btree (rentity_type_id);


--
-- Name: ref_entity_type_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_entity_type_idx ON pls.ref_entity_type USING btree (rroute_id);


--
-- Name: ref_stage_action_actor_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_action_actor_idx ON pls.ref_stage_action_actor USING btree (rstage_action_id);


--
-- Name: ref_stage_action_actor_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_action_actor_idx1 ON pls.ref_stage_action_actor USING btree (ractor_id);


--
-- Name: ref_stage_action_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_action_idx ON pls.ref_stage_action USING btree (rstage_id);


--
-- Name: ref_stage_action_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_action_idx1 ON pls.ref_stage_action USING btree (raction_id);


--
-- Name: ref_stage_action_stage_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_action_stage_idx ON pls.ref_stage_action_stage USING btree (rstage_action_id);


--
-- Name: ref_stage_action_stage_idx1; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_action_stage_idx1 ON pls.ref_stage_action_stage USING btree (rstage_id);


--
-- Name: ref_stage_idx; Type: INDEX; Schema: pls; Owner: root
--

CREATE INDEX ref_stage_idx ON pls.ref_stage USING btree (rroute_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES auth.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: auth; Owner: root
--

ALTER TABLE ONLY auth.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES auth.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: entity_attr entity_attr_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr
    ADD CONSTRAINT entity_attr_fk FOREIGN KEY (entity_id) REFERENCES pls.entity(entity_id);


--
-- Name: entity_attr entity_attr_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr
    ADD CONSTRAINT entity_attr_fk1 FOREIGN KEY (rattr_id) REFERENCES pls.ref_attr(rattr_id);


--
-- Name: entity_attr_log entity_attr_log_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr_log
    ADD CONSTRAINT entity_attr_log_fk FOREIGN KEY (entity_id) REFERENCES pls.entity(entity_id);


--
-- Name: entity_attr_log entity_attr_log_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_attr_log
    ADD CONSTRAINT entity_attr_log_fk1 FOREIGN KEY (rattr_id) REFERENCES pls.ref_attr(rattr_id);


--
-- Name: entity_entity entity_entity_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_fk FOREIGN KEY (entity_id) REFERENCES pls.entity(entity_id);


--
-- Name: entity_entity entity_entity_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_entity
    ADD CONSTRAINT entity_entity_fk1 FOREIGN KEY (entity_id_link) REFERENCES pls.entity(entity_id);


--
-- Name: entity entity_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity
    ADD CONSTRAINT entity_fk FOREIGN KEY (rentity_type_id) REFERENCES pls.ref_entity_type(rentity_type_id);


--
-- Name: entity_stage entity_stage_entity_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_stage
    ADD CONSTRAINT entity_stage_entity_fk FOREIGN KEY (entity_stage_entity_id) REFERENCES pls.entity(entity_id);


--
-- Name: entity_stage entity_stage_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_stage
    ADD CONSTRAINT entity_stage_fk FOREIGN KEY (entity_id) REFERENCES pls.entity(entity_id);


--
-- Name: entity_stage entity_stage_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_stage
    ADD CONSTRAINT entity_stage_fk1 FOREIGN KEY (raction_id) REFERENCES pls.ref_action(raction_id);


--
-- Name: entity_stage entity_stage_fk2; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.entity_stage
    ADD CONSTRAINT entity_stage_fk2 FOREIGN KEY (rstage_id) REFERENCES pls.ref_stage(rstage_id);


--
-- Name: ref_attr_actor ref_attr_actor_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_actor
    ADD CONSTRAINT ref_attr_actor_fk FOREIGN KEY (ractor_id) REFERENCES pls.ref_actor(ractor_id);


--
-- Name: ref_attr_actor ref_attr_actor_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_actor
    ADD CONSTRAINT ref_attr_actor_fk1 FOREIGN KEY (rattr_id) REFERENCES pls.ref_attr(rattr_id);


--
-- Name: ref_attr_actor ref_attr_actor_fk2; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_actor
    ADD CONSTRAINT ref_attr_actor_fk2 FOREIGN KEY (rstage_id) REFERENCES pls.ref_stage(rstage_id);


--
-- Name: ref_attr_dict ref_attr_dict_ref_attr_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_dict
    ADD CONSTRAINT ref_attr_dict_ref_attr_fk FOREIGN KEY (rattr_id) REFERENCES pls.ref_attr(rattr_id);


--
-- Name: ref_attr ref_attr_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr
    ADD CONSTRAINT ref_attr_fk FOREIGN KEY (rattr_group_id) REFERENCES pls.ref_attr_group(rattr_group_id);


--
-- Name: ref_attr_group_actor ref_attr_group_actor_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group_actor
    ADD CONSTRAINT ref_attr_group_actor_fk FOREIGN KEY (ractor_id) REFERENCES pls.ref_actor(ractor_id) DEFERRABLE;


--
-- Name: ref_attr_group_actor ref_attr_group_actor_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group_actor
    ADD CONSTRAINT ref_attr_group_actor_fk1 FOREIGN KEY (rattr_group_id) REFERENCES pls.ref_attr_group(rattr_group_id) DEFERRABLE;


--
-- Name: ref_attr_group ref_attr_group_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_attr_group
    ADD CONSTRAINT ref_attr_group_fk FOREIGN KEY (rentity_type_id) REFERENCES pls.ref_entity_type(rentity_type_id);


--
-- Name: ref_entity_filter_attr ref_entity_filter_attr_ref_entity_filter; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_filter_attr
    ADD CONSTRAINT ref_entity_filter_attr_ref_entity_filter FOREIGN KEY (rentity_filter_id) REFERENCES pls.ref_entity_filter(rentity_filter_id);


--
-- Name: ref_entity_filter_attr ref_entity_filter_attr_ref_rattr; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_filter_attr
    ADD CONSTRAINT ref_entity_filter_attr_ref_rattr FOREIGN KEY (rattr_id) REFERENCES pls.ref_attr(rattr_id);


--
-- Name: ref_entity_filter ref_entity_filter_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_filter
    ADD CONSTRAINT ref_entity_filter_fk FOREIGN KEY (rentity_type_id) REFERENCES pls.ref_entity_type(rentity_type_id);


--
-- Name: ref_entity_type ref_entity_type_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_entity_type
    ADD CONSTRAINT ref_entity_type_fk FOREIGN KEY (rroute_id) REFERENCES pls.ref_route(rroute_id);


--
-- Name: ref_route ref_route_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_route
    ADD CONSTRAINT ref_route_fk FOREIGN KEY (rstage_id_start) REFERENCES pls.ref_stage(rstage_id) DEFERRABLE;


--
-- Name: ref_stage_action_actor ref_stage_action_actor_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_actor
    ADD CONSTRAINT ref_stage_action_actor_fk FOREIGN KEY (rstage_action_id) REFERENCES pls.ref_stage_action(rstage_action_id);


--
-- Name: ref_stage_action_actor ref_stage_action_actor_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_actor
    ADD CONSTRAINT ref_stage_action_actor_fk1 FOREIGN KEY (ractor_id) REFERENCES pls.ref_actor(ractor_id);


--
-- Name: ref_stage_action ref_stage_action_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action
    ADD CONSTRAINT ref_stage_action_fk FOREIGN KEY (raction_id) REFERENCES pls.ref_action(raction_id);


--
-- Name: ref_stage_action ref_stage_action_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action
    ADD CONSTRAINT ref_stage_action_fk1 FOREIGN KEY (rstage_id) REFERENCES pls.ref_stage(rstage_id);


--
-- Name: ref_stage_action_stage ref_stage_action_stage_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_stage
    ADD CONSTRAINT ref_stage_action_stage_fk FOREIGN KEY (rstage_action_id) REFERENCES pls.ref_stage_action(rstage_action_id);


--
-- Name: ref_stage_action_stage ref_stage_action_stage_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage_action_stage
    ADD CONSTRAINT ref_stage_action_stage_fk1 FOREIGN KEY (rstage_id) REFERENCES pls.ref_stage(rstage_id);


--
-- Name: ref_stage ref_stage_fk; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage
    ADD CONSTRAINT ref_stage_fk FOREIGN KEY (rroute_id) REFERENCES pls.ref_route(rroute_id) DEFERRABLE;


--
-- Name: ref_stage ref_stage_fk1; Type: FK CONSTRAINT; Schema: pls; Owner: root
--

ALTER TABLE ONLY pls.ref_stage
    ADD CONSTRAINT ref_stage_fk1 FOREIGN KEY (rentity_type_id) REFERENCES pls.ref_entity_type(rentity_type_id);


--
-- PostgreSQL database dump complete
--

