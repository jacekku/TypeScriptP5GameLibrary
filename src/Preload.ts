import * as p5 from "p5";
import { GraphicsHandler } from "..";

export function preload(p: p5) {
  GraphicsHandler.instance.loadImages(p);
}
