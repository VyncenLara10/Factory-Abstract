"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlTitle = void 0;
const AbstractTitle_1 = require("../AbstractTitle");
class HtmlTitle extends AbstractTitle_1.AbstractTitle {
    render() {
        return `<h${this.level}>${this.content}</h${this.level}>\n`;
    }
}
exports.HtmlTitle = HtmlTitle;
//# sourceMappingURL=HtmlTitle.js.map