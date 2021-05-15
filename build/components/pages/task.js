import { BaseComponent } from "./base.js";
export class Task extends BaseComponent {
    constructor(title, body) {
        super(`<section class="task">
            <h2 class="task__title"></h2>
            <input type="checkbox" class="task__checkbox" />
          </section>`);
        const taskTitle = this.element.querySelector(".task__title");
        taskTitle.textContent = title;
        const taskBox = this.element.querySelector(".task__checkbox");
        taskBox.insertAdjacentText("afterend", body);
    }
}
