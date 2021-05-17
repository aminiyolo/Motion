import { BaseComponent } from "./base.js";

export class Video extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
              <iframe class="video__iframe"></iframe>
              </div>
              <h3 class="video__title"></h3>
          </section>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = this.convertUrl(url);

    const videoTitle = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    videoTitle.textContent = title;
  }
  // Url 경우의 수
  // ex) https://www.youtube.com/watch?v=6UsqalA78Wk&t=11108s
  //     https://youtu.be/6UsqalA78Wk

  private convertUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
