import moment = require('moment');
import { calculateHmac } from './hmac';
import { WebhookData, WebhookDataParams } from './webhook-data';

export function generateWebhook(webhookDataParams: WebhookDataParams) {
    console.log('adyen');
    let webhookData = new WebhookData(webhookDataParams);
    let event = generateEvent(webhookData);
    console.log(JSON.stringify(event));
    return event;
}

function generateEvent(webhookData: WebhookData) {
    let isSuccessful = webhookData.executionResult.toString().toLowerCase();
    let hmac = calculateHmac(
        webhookData.adyenHmacKey,
        webhookData.pspReference,
        webhookData.originalReference,
        webhookData.merchantAccountCode,
        webhookData.merchantReference,
        webhookData.amountInCents,
        webhookData.currency,
        isSuccessful
    );

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
                    reason: `${webhookData.authCode}:${webhookData.cardLast4}:${webhookData.expiryDate}`,
                    success: isSuccessful,
                },
            },
        ],
    };
}

generateWebhook({ amountInCents: 1111 }); // TODO remove
