import { EventType, ExtendedEvent } from "../..";

export interface GameEventListener {
  events: EventType[];
  eventFired(event: ExtendedEvent): void;
  registerEvents(events: EventType[]): void;
}
