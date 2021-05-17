import { BaseComponent } from "./base.js";
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__btn">
              <button class="remove">&times;</button>
            </div>
          </li>`);
    }
    appendChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page"></ul>');
    }
    appendChild(section) {
        const item = new PageItemComponent();
        item.appendChild(section);
        item.attachTo(this.element, "beforeend");
    }
}
