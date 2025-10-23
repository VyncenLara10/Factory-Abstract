import { AbstractDocumentFactory } from '../factories/AbstractDocumentFactory';
import { DocumentInput } from '../models/RawDocument';
export declare class DocumentClient {
    private factory;
    constructor(factory: AbstractDocumentFactory);
    convertDocument(input: DocumentInput): string;
}
//# sourceMappingURL=DocumentClient.d.ts.map