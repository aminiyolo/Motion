import { BaseComponent } from "./base.js";
export class Note extends BaseComponent {
    constructor(title, body) {
        super(`<section class="note">
            <h2 class="page-item__title note__title"></h2>
            <p class=" note__body"></p>
          </section>`);
        const noteTitle = this.element.querySelector(".note__title");
        noteTitle.textContent = title;
        const noteBody = this.element.querySelector(".note__body");
        noteBody.textContent = body;
    }
}
