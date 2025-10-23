"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownImage = void 0;
const AbstractImage_1 = require("../AbstractImage");
class MarkdownImage extends AbstractImage_1.AbstractImage {
    render() {
        return `![${this.alt}](${this.url})\n\n`;
    }
}
exports.MarkdownImage = MarkdownImage;
//# sourceMappingURL=MarkdownImage.js.map