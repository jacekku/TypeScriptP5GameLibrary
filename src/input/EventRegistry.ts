import { EventType } from "../..";
import { GameEventListener } from "./GameEventListener";

export default class EventRegistry {
  registry: any;

  constructor() {
    this.registry = {};
    EventType.allEventTypes().forEach((type) => (this.registry[type] = []));
    this.registry = Object.freeze(this.registry);
  }

  register(eventType: EventType, object: GameEventListener) {
    eventType in this.registry
      ? this.registry[eventType].push(object)
      : (this.registry[eventType] = [object]);
  }
}
