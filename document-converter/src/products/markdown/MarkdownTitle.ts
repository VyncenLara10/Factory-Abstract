import { AbstractTitle } from '../AbstractTitle';

export class MarkdownTitle extends AbstractTitle {
  render(): string {
    const hashes = '#'.repeat(this.level);
    return `${hashes} ${this.content}\n\n`;
  }
}