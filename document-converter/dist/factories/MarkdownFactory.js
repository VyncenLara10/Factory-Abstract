"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownFactory = void 0;
const AbstractDocumentFactory_1 = require("./AbstractDocumentFactory");
const MarkdownTitle_1 = require("../products/markdown/MarkdownTitle");
const MarkdownParagraph_1 = require("../products/markdown/MarkdownParagraph");
const MarkdownQuote_1 = require("../products/markdown/MarkdownQuote");
const MarkdownImage_1 = require("../products/markdown/MarkdownImage");
class MarkdownFactory extends AbstractDocumentFactory_1.AbstractDocumentFactory {
    createTitle(content, level) {
        return new MarkdownTitle_1.MarkdownTitle(content, level);
    }
    createParagraph(content) {
        return new MarkdownParagraph_1.MarkdownParagraph(content);
    }
    createQuote(content) {
        return new MarkdownQuote_1.MarkdownQuote(content);
    }
    createImage(url, alt) {
        return new MarkdownImage_1.MarkdownImage(url, alt);
    }
}
exports.MarkdownFactory = MarkdownFactory;
//# sourceMappingURL=MarkdownFactory.js.map