export enum EventType {
  MouseMoved,
  MouseDragged,
  MousePressed,
  MouseReleased,
  MouseClicked,
  DoubleClicked,
  MouseWheel,
  KeyPressed,
  KeyReleased,
}

//https://stackoverflow.com/questions/28150739/typescript-add-functions-to-an-enum/51511190
export namespace EventType {
  export const allEventTypes = (): string[] => {
    //https://github.com/Microsoft/TypeScript/issues/17198
    // return Object.keys(EventType).filter(
    //   (k) => typeof EventType[k as any] === "number"
    // );
    return Object.keys(EventType).map((eventType) => eventType);
  };
  export const getValue = (type: EventType) => {
    return EventType[type];
  };
}
