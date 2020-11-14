import { GameObject, GameEventListener, EventType, InputHandler } from "..";
import { ZLayers } from "./enums/ZLayers";
import { ExtendedEvent } from "./ExtendedEvent";
import { pointInRect } from "./_old/helperFunctions";

export class Button extends GameObject implements GameEventListener {
    width: number;
    height: number;
    events: EventType[] = [EventType.MouseMoved, EventType.MouseClicked,EventType.MousePressed];
    zLevel = ZLayers.GUI

    constructor(x: number, y: number, width: number, height: number) {
        super(x,y);
        this.width = width;
        this.height = height;
        this.registerEvents(this.events)
    }

    registerEvents(events: EventType[]): void {
        events.forEach((eventType: EventType) => {
            InputHandler.instance.register(eventType, this);
          });
    }

    eventFired(event: ExtendedEvent): void {
        switch(event.eventType) {
            case EventType.MouseMoved: 
                this.onMouseMoved(event)
                break;
            case EventType.MouseClicked: 
                this.onClick(event)
                break;
        }
    }

    onClick(event: ExtendedEvent): boolean {
        return true
    }

    onMouseMoved(event: ExtendedEvent): boolean {
        return true
    }

    mouseOnButton(event: ExtendedEvent): boolean {
        const mouseEvent: MouseEvent = event.event as MouseEvent;
        return pointInRect(mouseEvent.offsetX, mouseEvent.offsetY, this.x, this.y, this.width, this.height)
    }

}