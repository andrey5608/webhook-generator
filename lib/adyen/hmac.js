"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
function calculateHmac(key, pspReference, originalReference, merchantAccountCode, merchantReference, amountInCents, currency, executionResult) {
    var rawKey = Buffer.from(key, 'hex');
    var data = pspReference + ":" + originalReference + ":" + merchantAccountCode + ":" + merchantReference + ":" + amountInCents + ":" + currency + ":AUTHORISATION:" + executionResult;
    var hmac = crypto
        .createHmac('sha256', rawKey)
        .update(data, 'utf-8')
        .digest('base64');
    return hmac;
}
exports.calculateHmac = calculateHmac;
