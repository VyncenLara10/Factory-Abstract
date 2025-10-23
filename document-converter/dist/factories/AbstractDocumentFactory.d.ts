import { AbstractTitle } from '../products/AbstractTitle';
import { AbstractParagraph } from '../products/AbstractParagraph';
import { AbstractQuote } from '../products/AbstractQuote';
import { AbstractImage } from '../products/AbstractImage';
export declare abstract class AbstractDocumentFactory {
    abstract createTitle(content: string, level: number): AbstractTitle;
    abstract createParagraph(content: string): AbstractParagraph;
    abstract createQuote(content: string): AbstractQuote;
    abstract createImage(url: string, alt: string): AbstractImage;
}
//# sourceMappingURL=AbstractDocumentFactory.d.ts.map