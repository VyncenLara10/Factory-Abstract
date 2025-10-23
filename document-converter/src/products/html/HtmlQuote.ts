import { AbstractQuote } from '../AbstractQuote';

export class HtmlQuote extends AbstractQuote {
  render(): string {
    return `<blockquote>${this.content}</blockquote>\n`;
  }
}