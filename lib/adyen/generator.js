"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdyenEvent = void 0;
var moment = require("moment");
var hmac_1 = require("./hmac");
function generateAdyenEvent(webhookData) {
    var isSuccessful = webhookData.executionResult.toString().toLowerCase();
    var hmac = (0, hmac_1.calculateHmac)(webhookData.adyenHmacKey, webhookData.pspReference, webhookData.originalReference, webhookData.merchantAccountCode, webhookData.merchantReference, webhookData.amountInCents, webhookData.currency, isSuccessful);
    return {
        live: 'false',
        notificationItems: [
            {
                NotificationRequestItem: {
                    additionalData: {
                        expiryData: webhookData.expiryDate,
                        authCode: webhookData.authCode,
                        cardSummary: webhookData.cardLast4,
                        'threeds2.cardEnrolled': 'false',
                        checkoutSessionId: webhookData.checkoutSessionId,
                        hmacSignature: hmac,
                    },
                    amount: {
                        currency: webhookData.currency,
                        value: webhookData.amountInCents,
                    },
                    eventCode: 'AUTHORISATION',
                    eventDate: moment
                        .unix(webhookData.unixEventDatetime)
                        .format('YYYY-MM-DDTHH:mm:ssZ'),
                    merchantAccountCode: webhookData.merchantAccountCode,
                    merchantReference: webhookData.merchantReference,
                    operations: ['CANCEL', 'CAPTURE', 'REFUND'],
                    paymentMethod: webhookData.paymentMethod,
                    pspReference: webhookData.pspReference,
                    reason: "".concat(webhookData.authCode, ":").concat(webhookData.cardLast4, ":").concat(webhookData.expiryDate),
                    success: isSuccessful,
                },
            },
        ],
    };
}
exports.generateAdyenEvent = generateAdyenEvent;
