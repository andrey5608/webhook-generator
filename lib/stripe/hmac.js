"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHmacHeader = void 0;
var stripe = require('../stripe/lib/Webhooks.js');
function calculateHmacHeader(data, stripeKey) {
    return stripe.generateTestHeaderString({
        payload: data,
        secret: stripeKey
    });
}
exports.calculateHmacHeader = calculateHmacHeader;
