import { AbstractDocumentFactory } from './AbstractDocumentFactory';
import { AbstractTitle } from '../products/AbstractTitle';
import { AbstractParagraph } from '../products/AbstractParagraph';
import { AbstractQuote } from '../products/AbstractQuote';
import { AbstractImage } from '../products/AbstractImage';
export declare class MarkdownFactory extends AbstractDocumentFactory {
    createTitle(content: string, level: number): AbstractTitle;
    createParagraph(content: string): AbstractParagraph;
    createQuote(content: string): AbstractQuote;
    createImage(url: string, alt: string): AbstractImage;
}
//# sourceMappingURL=MarkdownFactory.d.ts.map