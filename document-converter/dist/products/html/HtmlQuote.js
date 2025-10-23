"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlQuote = void 0;
const AbstractQuote_1 = require("../AbstractQuote");
class HtmlQuote extends AbstractQuote_1.AbstractQuote {
    render() {
        return `<blockquote>${this.content}</blockquote>\n`;
    }
}
exports.HtmlQuote = HtmlQuote;
//# sourceMappingURL=HtmlQuote.js.map