"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHmac = void 0;
var crypto = require("crypto");
function calculateHmac(key, pspReference, originalReference, merchantAccountCode, merchantReference, amountInCents, currency, executionResult) {
    var rawKey = Buffer.from(key, 'hex');
    var data = "".concat(pspReference, ":").concat(originalReference, ":").concat(merchantAccountCode, ":").concat(merchantReference, ":").concat(amountInCents, ":").concat(currency, ":AUTHORISATION:").concat(executionResult);
    var hmac = crypto
        .createHmac('sha256', rawKey)
        .update(data, 'utf-8')
        .digest('base64');
    return hmac;
}
exports.calculateHmac = calculateHmac;
