import p5 = require("p5");
import {
  doubleClicked,
  keyPressed,
  keyReleased,
  mouseClicked,
  mouseDragged,
  mouseMoved,
  mousePressed,
  mouseReleased,
  mouseWheel,
} from "./Input";

export function setupInputs(p: p5) {
  p.mouseMoved = (event: MouseEvent) => mouseMoved(event);
  p.mouseDragged = (event: MouseEvent) => mouseDragged(event);
  p.mousePressed = (event: MouseEvent) => mousePressed(event);
  p.mouseReleased = (event: MouseEvent) => mouseReleased(event);
  p.mouseClicked = (event: MouseEvent) => mouseClicked(event);
  p.doubleClicked = (event: MouseEvent) => doubleClicked(event);
  p.mouseWheel = (event: MouseEvent) => mouseWheel(event);
  p.keyPressed = () => keyPressed(p);
  p.keyReleased = () => keyReleased(p);
}
