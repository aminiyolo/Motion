import { BaseComponent } from "./base.js";
export class Task extends BaseComponent {
    constructor(title, body) {
        super(`<section class="task">
            <h2 class="page-item__title task__title"></h2>
            <input type="checkbox" class="task__checkbox" />
            <label for="checkbox" id="task-label"></label>
          </section>`);
        const taskTitle = this.element.querySelector(".task__title");
        taskTitle.textContent = title;
        const taskBox = this.element.querySelector("#task-label");
        taskBox.textContent = body;
    }
}
