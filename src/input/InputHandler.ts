import { EventType } from "../enums/EventType";
import { ExtendedEvent } from "../ExtendedEvent";
import { Key } from "../Key";
import EventRegistry from "./EventRegistry";
import { GameEventListener } from "./GameEventListener";

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
