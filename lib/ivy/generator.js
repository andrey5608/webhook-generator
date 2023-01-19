"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIvyEvent = void 0;
var moment = require("moment");
var hmac_1 = require("./hmac");
function generateIvyEvent(webhookData) {
    var datetime = moment
        .utc()
        .format('YYYY-MM-DDTHH:mm:ssZ');
    var data = {
        'id': '63c931f0ab9cd7bea79e146a',
        'type': webhookData.type,
        'payload': {
            'shopper': [],
            'updatedAt': datetime,
            'createdAt': datetime,
            'refunds': [],
            'status': webhookData.status,
            'paymentStatus': webhookData.paymentStatus,
            'shippingMethod': {
                'id': '63c000dcab9cd4bea79e0000',
                'countries': [],
                'name': 'Shipping',
                'price': 0
            },
            'billingAddress': {
                'line1': 'Blahblah Str. 11',
                'city': 'Berlin',
                'zipCode': '10405',
                'country': 'DE'
            },
            'lineItems': [
                {
                    'quantity': 1,
                    'amount': webhookData.price,
                    'singleVat': 1,
                    'singleNet': webhookData.price,
                    'name': 'Something'
                }
            ],
            'price': {
                'totalNet': webhookData.price,
                'vat': 1,
                'shipping': 0,
                'total': webhookData.price,
                'currency': webhookData.currency
            },
            'applicationFeeAmount': 2,
            'offsetProject': 'io10',
            'displayId': webhookData.reference,
            'referenceId': webhookData.reference,
            'shopName': 'Company name',
            'appId': webhookData.appId,
            'id': webhookData.payloadId
        },
        'date': datetime
    };
    var hmac = (0, hmac_1.calculateHmac)(data, webhookData.hmacKey);
    return {
        hmac: hmac,
        data: data
    };
}
exports.generateIvyEvent = generateIvyEvent;
