import { generateEvent } from "../adyen/adyen-generator";
import { WebhookData, WebhookDataParams } from '../adyen/webhook-data';

export function generateAdyenWebhook(webhookDataParams: WebhookDataParams) {
    console.log('adyen');
    let webhookData = new WebhookData(webhookDataParams);
    let event = generateEvent(webhookData);
    console.log(JSON.stringify(event));
    return event;
}