"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownTitle = void 0;
const AbstractTitle_1 = require("../AbstractTitle");
class MarkdownTitle extends AbstractTitle_1.AbstractTitle {
    render() {
        const hashes = '#'.repeat(this.level);
        return `${hashes} ${this.content}\n\n`;
    }
}
exports.MarkdownTitle = MarkdownTitle;
//# sourceMappingURL=MarkdownTitle.js.map