"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlParagraph = void 0;
const AbstractParagraph_1 = require("../AbstractParagraph");
class HtmlParagraph extends AbstractParagraph_1.AbstractParagraph {
    render() {
        return `<p>${this.content}</p>\n`;
    }
}
exports.HtmlParagraph = HtmlParagraph;
//# sourceMappingURL=HtmlParagraph.js.map