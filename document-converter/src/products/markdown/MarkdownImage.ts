import { AbstractImage } from '../AbstractImage';

export class MarkdownImage extends AbstractImage {
  render(): string {
    return `![${this.alt}](${this.url})\n\n`;
  }
}