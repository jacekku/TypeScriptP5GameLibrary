import { GameObject } from "./GameObject";
import * as p5 from "p5";

export class GameObjectHandler {
  private objects: GameObject[] = [];
  private static singleton: GameObjectHandler;

  addObject(object: GameObject) {
    this.objects.push(object);
    this.objects = this.sortByZAxis(this.objects)
  }
  removeObject(object: GameObject) {
    this.objects = this.objects.filter((obj) => obj !== object);
  }
  show(p: p5.Graphics) {
    this.objects.forEach((obj) => {
      obj.show ? obj.show(p) : null;
    });
  }
  tick(p: p5.Graphics) {
    this.objects.forEach((obj) => {
      obj.tick ? obj.tick(p) : null;
      obj.superTick ? obj.superTick(p) : null;
    });
  }

  static get instance(): GameObjectHandler {
    if (!GameObjectHandler.singleton) {
      GameObjectHandler.singleton = new GameObjectHandler();
    }
    return GameObjectHandler.singleton;
  }

  sortByZAxis(objects: GameObject[]) {
    return objects.sort((a,b)=> b.zLevel - a.zLevel)
  }
}
