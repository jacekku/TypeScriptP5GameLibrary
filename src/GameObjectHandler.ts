import { GameObject } from "./GameObject";
import * as p5 from "p5";

export class GameObjectHandler {
  private objects: GameObject[] = [];
  private static singleton: GameObjectHandler;

  addObject(object: GameObject) {
    this.objects.push(object);
  }
  removeObject(object: GameObject) {
    this.objects = this.objects.filter((obj) => obj !== object);
  }
  show(p: p5.Graphics) {
    this.objects.forEach((obj) => {
      obj.show ? obj.show(p) : null;
    });
  }
  tick() {
    this.objects.forEach((obj) => {
      obj.tick ? obj.tick() : null;
      obj.superTick ? obj.superTick() : null;
    });
  }

  static get instance(): GameObjectHandler {
    if (!GameObjectHandler.singleton) {
      GameObjectHandler.singleton = new GameObjectHandler();
    }
    return GameObjectHandler.singleton;
  }
}
