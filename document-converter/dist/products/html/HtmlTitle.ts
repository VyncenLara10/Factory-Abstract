import { AbstractTitle } from '../AbstractTitle';

export class HtmlTitle extends AbstractTitle {
  render(): string {
    return <h${this.level}>${this.content}</h${this.level}>\n;
  }
}