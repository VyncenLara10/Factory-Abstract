import { AbstractImage } from '../AbstractImage';

export class HtmlImage extends AbstractImage {
  render(): string {
    return <img src="${this.url}" alt="${this.alt}" />\n;
  }
}