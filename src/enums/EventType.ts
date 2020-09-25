export enum EventType {
    KeyPressed,
    KeyTapped,
    MousePressed,
    MouseTapped,
    MouseDragged,
    MouseReleased,
    MouseWheel,
    
}

//https://stackoverflow.com/questions/28150739/typescript-add-functions-to-an-enum/51511190
export namespace EventType {
    export const allEventTypes = (): string[] => {
        //https://github.com/Microsoft/TypeScript/issues/17198
        return Object.keys(EventType).filter(k => typeof EventType[k as any] === "number")
    }
    export const getValue = (type: EventType) => {
        return EventType[type]
    }
}