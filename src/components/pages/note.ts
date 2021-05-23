import { BaseComponent } from "./base.js";

export class Note extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
            <h2 class="page-item__title note__title"></h2>
            <p class=" note__body"></p>
          </section>`);

    const noteTitle = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadingElement;
    noteTitle.textContent = title;

    const noteBody = this.element.querySelector(
      ".note__body"
    )! as HTMLHeadingElement;
    noteBody.textContent = body;
  }
}
