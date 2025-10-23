"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlFactory = void 0;
const AbstractDocumentFactory_1 = require("./AbstractDocumentFactory");
const HtmlTitle_1 = require("../products/html/HtmlTitle");
const HtmlParagraph_1 = require("../products/html/HtmlParagraph");
const HtmlQuote_1 = require("../products/html/HtmlQuote");
const HtmlImage_1 = require("../products/html/HtmlImage");
class HtmlFactory extends AbstractDocumentFactory_1.AbstractDocumentFactory {
    createTitle(content, level) {
        return new HtmlTitle_1.HtmlTitle(content, level);
    }
    createParagraph(content) {
        return new HtmlParagraph_1.HtmlParagraph(content);
    }
    createQuote(content) {
        return new HtmlQuote_1.HtmlQuote(content);
    }
    createImage(url, alt) {
        return new HtmlImage_1.HtmlImage(url, alt);
    }
}
exports.HtmlFactory = HtmlFactory;
//# sourceMappingURL=HtmlFactory.js.map