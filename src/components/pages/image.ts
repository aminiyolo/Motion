import { BaseComponent } from "./base.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
    <div class="image__holder">
      <img class="image" />
    </div>
    <h2 class="image__title"></h2>
  </section>`);

    const imageElement = this.element.querySelector(
      ".image"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }
}
