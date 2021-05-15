import { BaseComponent } from "./base.js";

export class Task extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="task">
            <h2 class="task__title"></h2>
            <input type="checkbox" class="task__checkbox" />
          </section>`);

    const taskTitle = this.element.querySelector(
      ".task__title"
    )! as HTMLHeadingElement;
    taskTitle.textContent = title;

    const taskBox = this.element.querySelector(
      ".task__checkbox"
    )! as HTMLInputElement;
    taskBox.insertAdjacentText("afterend", body);
  }
}
