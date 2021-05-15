import { Task } from "./components/pages/task.js";
import { ImageComponent } from "./components/pages/image.js";
import { Note } from "./components/pages/note.js";
import { PageComponent } from "./components/pages/page.js";
import { Video } from "./components/pages/video.js";

class App {
  private page: PageComponent;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);

    const image = new ImageComponent("image", "https://picsum.photos/200/300");
    image.attachTo(root, "beforeend");

    const note = new Note("note", "body");
    note.attachTo(root, "beforeend");

    const task = new Task("title", "todo");
    task.attachTo(root, "beforeend");

    const video = new Video("title", "https://youtu.be/6UsqalA78Wk");
    video.attachTo(root, "beforeend");
  }
}

new App(document.querySelector(".contents__container")! as HTMLElement);
