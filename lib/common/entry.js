"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStripeWebhook = exports.generateAdyenWebhook = void 0;
var generator_1 = require("../adyen/generator");
var generator_2 = require("../stripe/generator");
var hmac_1 = require("../stripe/hmac");
var adyen_webhook_data_1 = require("../adyen/adyen-webhook-data");
var stripe_webhook_data_1 = require("../stripe/stripe-webhook-data");
function generateAdyenWebhook(webhookDataParams) {
    console.log('adyen');
    var webhookData = new adyen_webhook_data_1.AdyenWebhookData(webhookDataParams);
    var event = (0, generator_1.generateAdyenEvent)(webhookData);
    console.log(JSON.stringify(event));
    return event;
}
exports.generateAdyenWebhook = generateAdyenWebhook;
function generateStripeWebhook(webhookDataParams) {
    console.log('stripe');
    var webhookData = new stripe_webhook_data_1.StripeWebhookData(webhookDataParams);
    var event = (0, generator_2.generateStripeEvent)(webhookData);
    var header = (0, hmac_1.calculateHmacHeader)(webhookData, webhookDataParams.stripeHmacKey);
    var webhookAndHeader = { event: event, header: { 'stripe-signature': header } };
    console.log(JSON.stringify(webhookAndHeader));
    return webhookAndHeader;
}
exports.generateStripeWebhook = generateStripeWebhook;
