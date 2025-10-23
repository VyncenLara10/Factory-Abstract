"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlImage = void 0;
const AbstractImage_1 = require("../AbstractImage");
class HtmlImage extends AbstractImage_1.AbstractImage {
    render() {
        return `<img src="${this.url}" alt="${this.alt}" />\n`;
    }
}
exports.HtmlImage = HtmlImage;
//# sourceMappingURL=HtmlImage.js.map