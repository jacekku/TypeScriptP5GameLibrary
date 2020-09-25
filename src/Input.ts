import { ExtendedEvent, EventType, InputHandler } from "..";
import * as p5 from "p5";

export function mouseClicked(event: MouseEvent) {
  const extendedEvent: ExtendedEvent = ExtendedEvent.builder()
    .event(event)
    .eventType(EventType.MouseTapped)
    .build();
  InputHandler.instance.fireEvent(extendedEvent);
}

export function keyPressed(p: p5) {
  const event: ExtendedEvent = ExtendedEvent.builder()
    .eventType(EventType.KeyPressed)
    .key(p.key)
    .keyCode(p.keyCode)
    .build();
  InputHandler.instance.fireEvent(event);
}
