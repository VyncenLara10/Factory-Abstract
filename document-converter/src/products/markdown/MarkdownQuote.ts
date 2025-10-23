import { AbstractQuote } from '../AbstractQuote';

export class MarkdownQuote extends AbstractQuote {
  render(): string {
    return `> ${this.content}\n\n`;
  }
}