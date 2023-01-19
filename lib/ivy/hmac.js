"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHmac = void 0;
var crypto_1 = require("crypto");
function calculateHmac(data, key) {
    var hmac = (0, crypto_1.createHmac)('sha-256', key);
    hmac.update(JSON.stringify(data));
    return hmac.digest('hex');
}
exports.calculateHmac = calculateHmac;
