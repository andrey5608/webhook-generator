"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStripeWebhook = exports.generateAdyenWebhook = void 0;
var generator_1 = require("../adyen/generator");
var generator_2 = require("../stripe/generator");
var adyen_webhook_data_1 = require("../adyen/adyen-webhook-data");
var stripe_webhook_data_1 = require("../stripe/stripe-webhook-data");
function generateAdyenWebhook(webhookDataParams) {
    var webhookData = new adyen_webhook_data_1.AdyenWebhookData(webhookDataParams);
    var event = (0, generator_1.generateAdyenEvent)(webhookData);
    return event;
}
exports.generateAdyenWebhook = generateAdyenWebhook;
function generateStripeWebhook(webhookDataParams) {
    var webhookData = new stripe_webhook_data_1.StripeWebhookData(webhookDataParams);
    var webhookAndHeader = (0, generator_2.generateStripeEvent)(webhookData);
    var result = { event: webhookAndHeader.event, header: { 'stripe-signature': webhookAndHeader.header } };
    return result;
}
exports.generateStripeWebhook = generateStripeWebhook;
