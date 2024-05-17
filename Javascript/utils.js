"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixUrl = void 0;
var fixUrl = function (url) {
    var fixedUrl = url.replace(/\\/g, '/');
    // Remove single quotes
    fixedUrl = fixedUrl.replace(/'/g, '');
    // Escape double quotes
    fixedUrl = fixedUrl.replace(/"/g, '\\"');
    // Remove unnecessary spaces around query parameters
    fixedUrl = fixedUrl.replace(/([?&])\s+/g, '$1') // Remove spaces after ? or &
        .replace(/\s+([=&])/g, '$1'); // Remove spaces before = or &
    return fixedUrl;
};
exports.fixUrl = fixUrl;
//# sourceMappingURL=utils.js.map