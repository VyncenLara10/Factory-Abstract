"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownParagraph = void 0;
const AbstractParagraph_1 = require("../AbstractParagraph");
class MarkdownParagraph extends AbstractParagraph_1.AbstractParagraph {
    render() {
        return `${this.content}\n\n`;
    }
}
exports.MarkdownParagraph = MarkdownParagraph;
//# sourceMappingURL=MarkdownParagraph.js.map