import {
  EventType,
  ExtendedEvent,
  InputHandler
} from "../..";

export abstract class GameEventListener {
  events: EventType[];
  eventFired(event: ExtendedEvent): void {};
  registerEvents(events: EventType[]): void {
    events.forEach((eventType: EventType) => {
      InputHandler.instance.register(eventType, this);
    });
  }
}