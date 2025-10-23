import { AbstractParagraph } from '../AbstractParagraph';

export class MarkdownParagraph extends AbstractParagraph {
  render(): string {
    return `${this.content}\n\n`;
  }
}