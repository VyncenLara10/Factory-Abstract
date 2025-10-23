import { AbstractParagraph } from '../AbstractParagraph';

export class HtmlParagraph extends AbstractParagraph {
  render(): string {
    return `<p>${this.content}</p>\n`;
  }
}