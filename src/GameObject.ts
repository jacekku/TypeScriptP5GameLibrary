import * as p5 from "p5";
import { GameObjectHandler } from "./GameObjectHandler";
import { GraphicsHandler } from "./GraphicsHandler";

export class GameObject {
  x: number;
  y: number;
  age: number;

  constructor(x: number = -Infinity, y: number = -Infinity) {
    this.x = x;
    this.y = y;
    this.age = 0;
    GameObjectHandler.instance.addObject(this);
  }

  show(p: p5.Graphics) {
    const img: p5.Image = GraphicsHandler.instance.getImage("no_texture");
    p.image(img, this.x, this.y);
  }
  tick() {}

  superTick() {
    this.age += 1;
  }
}
