import { Component } from "./components/pages/base.js";
import { Task } from "./components/pages/task.js";
import { ImageComponent } from "./components/pages/image.js";
import { Note } from "./components/pages/note.js";
import { PageComponent, Composable } from "./components/pages/page.js";
import { Video } from "./components/pages/video.js";

class App {
  private readonly page: Component & Composable;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);

    const image = new ImageComponent("image", "https://picsum.photos/200/300");
    this.page.appendChild(image);

    const note = new Note("note", "body");
    this.page.appendChild(note);

    const task = new Task("title", "todo");
    this.page.appendChild(task);

    const video = new Video(
      "title",
      "https://www.youtube.com/watch?v=6UsqalA78Wk&t=11108s"
    );
    this.page.appendChild(video);
  }
}

new App(document.querySelector(".contents__container")! as HTMLElement);
