enum EventType {
  entityCreated = "Создание сущности",
  attributeChanged = "Изменение атрибута",
  linkAdded = "Добавление связи",
  linkDeleted = "Удаление связи",
  stagePassed = "Выполнение этапа",
  stageStarted = "Старт этапа",
  entityDeleted = "Удаление сущности",
}

interface Event {
  event_type: string;
  event_type_name: EventType;
  event_description: string;
  event_date: Date;
  event_user: string;
}

class EventList {
  private events: Event[] = [];

  constructor() {}

  addEvent(event: Event) {
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

export { Event, EventList, EventType };
