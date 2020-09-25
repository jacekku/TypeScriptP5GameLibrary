import * as p5 from "p5";
import { StageableImage, StageableImageConfiguration } from "./StageableImage";

export class GraphicsHandler {
  private static singleton: GraphicsHandler;
  private images: Array<StageableImage> = [];

  loadImages(p: p5) {
    p.loadJSON("../assets/images/images.json", (json: any) =>
      this.handleJSON(json, p)
    );
  }

  private handleJSON(json: any, p: p5) {
    json.images.forEach((config: StageableImageConfiguration) =>
      this.loadImage(config, p)
    );
  }

  private loadImage(configuration: StageableImageConfiguration, p: p5) {
    p.loadImage(configuration.file, (loadedImage) =>
      this.addImage(loadedImage, configuration)
    );
  }
  private addImage(
    image: p5.Image,
    configuration: StageableImageConfiguration
  ) {
    this.images.push(new StageableImage(image, configuration));
  }

  getImage(name: string, stage: number = 0): p5.Image {
    const img = this.tryGetImage(name);
    return img ? img.getStage(stage) : this.tryGetImage("no_texture").images[0];
  }

  private tryGetImage(name: string) {
    return this.images.find((img: StageableImage) => img.name === name);
  }

  static get instance(): GraphicsHandler {
    if (!GraphicsHandler.singleton) {
      GraphicsHandler.singleton = new GraphicsHandler();
    }
    return GraphicsHandler.singleton;
  }
}
