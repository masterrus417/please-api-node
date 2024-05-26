declare enum EventType {
    entityCreated = "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438",
    attributeChanged = "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430",
    linkAdded = "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0438",
    linkDeleted = "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0438",
    stagePassed = "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u044D\u0442\u0430\u043F\u0430",
    stageStarted = "\u0421\u0442\u0430\u0440\u0442 \u044D\u0442\u0430\u043F\u0430",
    entityDeleted = "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438"
}
interface Event {
    event_type: string;
    event_type_name: EventType;
    event_description: string;
    event_date: Date;
    event_user: string;
}
declare class EventList {
    private events;
    constructor();
    addEvent(event: Event): void;
    getEvents(): Event[];
    sortEvents(): void;
    toJSON(): {
        event_type: string;
        event_type_name: EventType;
        event_description: string;
        event_date: string;
        event_user: string;
    }[];
}
export { Event, EventList, EventType };
