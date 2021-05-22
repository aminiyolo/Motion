import { Composable } from "./../pages/page.js";
import { BaseComponent, Component } from "../pages/base.js";

type OnCloseListener = () => void;
type OnAddListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  private addListener?: OnAddListener;
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

    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    const addBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;
    addBtn.onclick = () => {
      this.addListener && this.addListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnAddListener(listener: OnAddListener) {
    this.addListener = listener;
  }

  appendChild(child: Component) {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
