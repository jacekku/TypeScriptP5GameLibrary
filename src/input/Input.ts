import { ExtendedEvent, EventType, InputHandler } from "../..";
import * as p5 from "p5";

function mouseEvent(event: MouseEvent, eventType: EventType) {
  const extendedEvent: ExtendedEvent = ExtendedEvent.builder()
    .event(event)
    .eventType(eventType)
    .build();
  InputHandler.instance.fireEvent(extendedEvent);
}

function keyEvent(p: p5, eventType: EventType) {
  const event: ExtendedEvent = ExtendedEvent.builder()
    .eventType(eventType)
    .key(p.key)
    .keyCode(p.keyCode)
    .build();
  InputHandler.instance.fireEvent(event);
}

export function mouseMoved(event: MouseEvent) {
  mouseEvent(event, EventType.MouseMoved);
}

export function mouseDragged(event: MouseEvent) {
  mouseEvent(event, EventType.MouseDragged);
}
export function mousePressed(event: MouseEvent) {
  mouseEvent(event, EventType.MousePressed);
}
export function mouseReleased(event: MouseEvent) {
  mouseEvent(event, EventType.MouseReleased);
}

export function mouseClicked(event: MouseEvent) {
  mouseEvent(event, EventType.MouseClicked);
}

export function doubleClicked(event: MouseEvent) {
  mouseEvent(event, EventType.MouseClicked);
}

export function mouseWheel(event: MouseEvent) {
  mouseEvent(event, EventType.MouseWheel);
}

export function keyPressed(p: p5) {
  keyEvent(p, EventType.KeyPressed);
}

export function keyReleased(p: p5) {
  keyEvent(p, EventType.KeyReleased);
}
