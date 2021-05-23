import { BaseComponent } from "../../pages/base.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
      <div>
        <div class="form__container">
          <label for="title">Title</label>
          <input type="text" id="title">
        </div>
        <div class="form__container">
          <label for="body">Body</label>
          <textarea type="text" id="body" row="2"></textarea>
        </div>
      </div>
    `);
  }

  get title(): string {
    const titleInput = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    return titleInput.value;
  }

  get body(): string {
    const bodyInput = this.element.querySelector("#body")! as HTMLInputElement;
    return bodyInput.value;
  }
}
