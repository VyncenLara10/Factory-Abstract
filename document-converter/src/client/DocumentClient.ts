import { AbstractDocumentFactory } from '../factories/AbstractDocumentFactory';
import { DocumentInput } from '../models/RawDocument';

export class DocumentClient {
  constructor(private factory: AbstractDocumentFactory) {}

  convertDocument(input: DocumentInput): string {
    let result = '';
    const data = input.data;

    // Procesar title1
    if (data.title1) {
      const title = this.factory.createTitle(data.title1, 1);
      result += title.render();
    }

    // Procesar title2
    if (data.title2) {
      const title = this.factory.createTitle(data.title2, 2);
      result += title.render();
    }

    // Procesar title3
    if (data.title3) {
      const title = this.factory.createTitle(data.title3, 3);
      result += title.render();
    }

    // Procesar paragraph
    if (data.paragraph) {
      const paragraph = this.factory.createParagraph(data.paragraph);
      result += paragraph.render();
    }

    // Procesar quote
    if (data.quote) {
      const quote = this.factory.createQuote(data.quote);
      result += quote.render();
    }

    // Procesar image
    if (data.image) {
      // Separar URL y alt text si vienen en formato "url|alt"
      const parts = data.image.split('|');
      const url = parts[0].trim();
      const alt = parts[1] ? parts[1].trim() : 'imagen';
      const image = this.factory.createImage(url, alt);
      result += image.render();
    }

    return result;
  }
}