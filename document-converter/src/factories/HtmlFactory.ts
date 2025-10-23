import { AbstractDocumentFactory } from './AbstractDocumentFactory';
import { AbstractTitle } from '../products/AbstractTitle';
import { AbstractParagraph } from '../products/AbstractParagraph';
import { AbstractQuote } from '../products/AbstractQuote';
import { AbstractImage } from '../products/AbstractImage';
import { HtmlTitle } from '../products/html/HtmlTitle';
import { HtmlParagraph } from '../products/html/HtmlParagraph';
import { HtmlQuote } from '../products/html/HtmlQuote';
import { HtmlImage } from '../products/html/HtmlImage';

export class HtmlFactory extends AbstractDocumentFactory {
  createTitle(content: string, level: number): AbstractTitle {
    return new HtmlTitle(content, level);
  }

  createParagraph(content: string): AbstractParagraph {
    return new HtmlParagraph(content);
  }

  createQuote(content: string): AbstractQuote {
    return new HtmlQuote(content);
  }

  createImage(url: string, alt: string): AbstractImage {
    return new HtmlImage(url, alt);
  }
}
