export class ImageComponent {
    constructor(title, url) {
        const template = document.createElement("template");
        template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image" />
    </div>
    <p class="image__title"></p>
  </section>`;
        this.element = template.content.firstElementChild;
        const imageElement = this.element.querySelector(".image");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
