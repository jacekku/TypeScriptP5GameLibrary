import { EventType } from "./enums/EventType";
import { Key } from "./Key";

export class ExtendedEvent {
  constructor(
    event?: CombinedEvent,
    key?: string,
    eventType?: EventType,
    keyCode?: number,
    keys?: Key[]
  ) {
    this.event = event;
    this.key = key;
    this.eventType = eventType;
    this.keyCode = keyCode;
    this.keys = keys;
  }
  readonly event: CombinedEvent;
  readonly key: string;
  readonly eventType: EventType;
  readonly keyCode: number;
  readonly keys: Key[];

  static builder() {
    return new ExtendedEventBuilder();
  }
}

class ExtendedEventBuilder {
  private _event: CombinedEvent;
  private _key: string;
  private _eventType: EventType;
  private _keyCode: number;
  private _keys: Key[];

  event(event: CombinedEvent) {
    this._event = event;
    return this;
  }
  key(key: string) {
    this._key = key;
    return this;
  }
  eventType(eventType: EventType) {
    this._eventType = eventType;
    return this;
  }
  keyCode(keyCode: number) {
    this._keyCode = keyCode;
    return this;
  }
  keys(keys: Key[]) {
    this._keys = keys;
    return this;
  }

  build() {
    return new ExtendedEvent(
      this._event,
      this._key,
      this._eventType,
      this._keyCode,
      this._keys
    );
  }
}

type CombinedEvent = MouseEvent | KeyboardEvent | Event;
