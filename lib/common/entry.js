"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdyenWebhook = void 0;
var generator_1 = require("../adyen/generator");
var adyen_webhook_data_1 = require("../adyen/adyen-webhook-data");
function generateAdyenWebhook(webhookDataParams) {
    console.log('adyen');
    var webhookData = new adyen_webhook_data_1.AdyenWebhookData(webhookDataParams);
    var event = (0, generator_1.generateEvent)(webhookData);
    console.log(JSON.stringify(event));
    return event;
}
exports.generateAdyenWebhook = generateAdyenWebhook;
