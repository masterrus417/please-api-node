"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = exports.EventList = void 0;
var EventType;
(function (EventType) {
    EventType["entityCreated"] = "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438";
    EventType["attributeChanged"] = "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430";
    EventType["linkAdded"] = "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0438";
    EventType["linkDeleted"] = "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0438";
    EventType["stagePassed"] = "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u044D\u0442\u0430\u043F\u0430";
    EventType["stageStarted"] = "\u0421\u0442\u0430\u0440\u0442 \u044D\u0442\u0430\u043F\u0430";
    EventType["entityDeleted"] = "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438";
})(EventType || (exports.EventType = EventType = {}));
class EventList {
    constructor() {
        this.events = [];
    }
    addEvent(event) {
        this.events.push(event);
    }
    getEvents() {
        return this.events;
    }
    sortEvents() {
        this.events.sort((a, b) => a.event_date.getTime() - b.event_date.getTime());
    }
    toJSON() {
        return this.events.map((event) => ({
            event_type: event.event_type,
            event_type_name: event.event_type_name,
            event_description: event.event_description,
            event_date: event.event_date.toISOString(),
            event_user: event.event_user,
        }));
    }
}
exports.EventList = EventList;
