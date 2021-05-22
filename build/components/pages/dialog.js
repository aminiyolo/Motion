import { BaseComponent } from "./base";
export class Dialog extends BaseComponent {
    constructor() {
        super(`
      <div class="image-input__container">
        <button class="xBtn">x</button>
        <button class="addBtn">add</button>
      <div>
    `);
        this.xBtn = this.element.querySelector(".xBtn");
        this.addBtn = this.element.querySelector(".addBtn");
    }
    closeTab() {
        this.xBtn.addEventListener("click", () => console.log("close"));
        this.addBtn.addEventListener("click", () => console.log("close"));
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error("It's different parent!");
        }
        parent.removeChild(this.element);
    }
}
