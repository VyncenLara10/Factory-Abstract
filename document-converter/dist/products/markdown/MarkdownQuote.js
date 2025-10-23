"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownQuote = void 0;
const AbstractQuote_1 = require("../AbstractQuote");
class MarkdownQuote extends AbstractQuote_1.AbstractQuote {
    render() {
        return `> ${this.content}\n\n`;
    }
}
exports.MarkdownQuote = MarkdownQuote;
//# sourceMappingURL=MarkdownQuote.js.map