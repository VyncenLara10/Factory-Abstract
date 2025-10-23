import { AbstractDocumentFactory } from './AbstractDocumentFactory';
import { AbstractTitle } from '../products/AbstractTitle';
import { AbstractParagraph } from '../products/AbstractParagraph';
import { AbstractQuote } from '../products/AbstractQuote';
import { AbstractImage } from '../products/AbstractImage';
import { MarkdownTitle } from '../products/markdown/MarkdownTitle';
import { MarkdownParagraph } from '../products/markdown/MarkdownParagraph';
import { MarkdownQuote } from '../products/markdown/MarkdownQuote';
import { MarkdownImage } from '../products/markdown/MarkdownImage';

export class MarkdownFactory extends AbstractDocumentFactory {
  createTitle(content: string, level: number): AbstractTitle {
    return new MarkdownTitle(content, level);
  }

  createParagraph(content: string): AbstractParagraph {
    return new MarkdownParagraph(content);
  }

  createQuote(content: string): AbstractQuote {
    return new MarkdownQuote(content);
  }

  createImage(url: string, alt: string): AbstractImage {
    return new MarkdownImage(url, alt);
  }
}
