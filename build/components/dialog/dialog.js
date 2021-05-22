import { BaseComponent } from "../pages/base.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`
      <section class="dialog">
        <div class="dialog__container">
          <button class="close">&times;</button>
          <div id="dialog__body"></div>
          <button class="dialog__submit">ADD</button>
        </div>
      </section>
    `);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const addBtn = this.element.querySelector(".dialog__submit");
        addBtn.onclick = () => {
            this.addListener && this.addListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnAddListener(listener) {
        this.addListener = listener;
    }
    appendChild(child) {
        const body = this.element.querySelector("#dialog__body");
        child.attachTo(body);
    }
}
