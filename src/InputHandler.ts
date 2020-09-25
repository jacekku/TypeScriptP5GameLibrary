import { EventType } from "./enums/EventType";
import { ExtendedEvent } from "./ExtendedEvent";
import { Key } from "./Key";

export class InputHandler {
  private static singleton: any;
  private registry: EventRegistry;

  constructor() {
    this.registry = new EventRegistry();
  }

  static get instance(): InputHandler {
    if (!InputHandler.singleton) {
      InputHandler.singleton = new InputHandler();
    }
    return InputHandler.singleton;
  }

  register(eventType: EventType, object: GameEventListener): boolean {
    this.registry.register(eventType, object);

    return true;
  }

  fireEvent(event: ExtendedEvent) {
    const affectedObjects: Array<GameEventListener> =
      this.registry.registry[event.eventType] || [];
    affectedObjects.forEach((object: GameEventListener) =>
      object.eventFired(event)
    );
  }
}

export interface GameEventListener {
  events: EventType[];
  eventFired(event: ExtendedEvent): void;
}

class EventRegistry {
  registry: any;

  constructor() {
    this.registry = {};
    EventType.allEventTypes().forEach((type) => (this.registry[type] = []));
  }

  register(eventType: EventType, object: GameEventListener) {
    eventType in this.registry
      ? this.registry[eventType].push(object)
      : (this.registry[eventType] = [object]);
  }
}
