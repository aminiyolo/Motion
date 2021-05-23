import { Task } from "./components/pages/task.js";
import { ImageComponent } from "./components/pages/image.js";
import { Note } from "./components/pages/note.js";
import { PageComponent } from "./components/pages/page.js";
import { Video } from "./components/pages/video.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
class App {
    constructor(root, dialogRoot) {
        this.page = new PageComponent();
        this.page.attachTo(root);
        const image = new ImageComponent("image", "https://picsum.photos/200/300");
        this.page.appendChild(image);
        const video = new Video("video", "https://www.youtube.com/watch?v=6UsqalA78Wk&t=11108s");
        this.page.appendChild(video);
        const imgBtn = document.querySelector("#imageBtn");
        imgBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.appendChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnAddListener(() => {
                const image = new ImageComponent(mediaSection.title, mediaSection.url);
                this.page.appendChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
        const videoBtn = document.querySelector("#videoBtn");
        videoBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.appendChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnAddListener(() => {
                const video = new Video(mediaSection.title, mediaSection.url);
                this.page.appendChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });
        const noteBtn = document.querySelector("#noteBtn");
        noteBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const noteSection = new TextSectionInput();
            dialog.appendChild(noteSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnAddListener(() => {
                const task = new Note(noteSection.title, noteSection.body);
                this.page.appendChild(task);
                dialog.removeFrom(dialogRoot);
            });
        });
        const taskBtn = document.querySelector("#taskBtn");
        taskBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const taskSection = new TextSectionInput();
            dialog.appendChild(taskSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnAddListener(() => {
                const task = new Task(taskSection.title, taskSection.body);
                this.page.appendChild(task);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector(".contents__container"), document.body);
