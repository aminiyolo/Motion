import { BaseComponent, Component } from "./base.js";

export interface Composable {
  appendChild(child: Component): void;
}

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__btn">
              <button class="remove">&times;</button>
            </div>
          </li>`);
  }
  appendChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super('<ul class="page"></ul>');
  }

  appendChild(section: Component) {
    const item = new PageItemComponent();
    item.appendChild(section);
    item.attachTo(this.element, "beforeend");
  }
}
