import { ImageComponent } from "./components/pages/image.js";
import { PageComponent } from "./components/pages/page.js";

class App {
  private page: PageComponent;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);
    const image = new ImageComponent("image", "https://picsum.photos/200/300");
    image.attachTo(root, "beforeend");
  }
}

new App(document.querySelector(".contents__container")! as HTMLElement);
