"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdyenWebhook = void 0;
var adyen_generator_1 = require("../adyen/adyen-generator");
var webhook_data_1 = require("../adyen/webhook-data");
function generateAdyenWebhook(webhookDataParams) {
    console.log('adyen');
    var webhookData = new webhook_data_1.WebhookData(webhookDataParams);
    var event = (0, adyen_generator_1.generateEvent)(webhookData);
    console.log(JSON.stringify(event));
    return event;
}
exports.generateAdyenWebhook = generateAdyenWebhook;
