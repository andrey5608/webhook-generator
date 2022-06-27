import { generateEvent } from "../adyen/generator";
import { AdyenWebhookData, AdyenWebhookDataParams } from '../adyen/adyen-webhook-data';

export function generateAdyenWebhook(webhookDataParams: AdyenWebhookDataParams) {
    console.log('adyen');
    let webhookData = new AdyenWebhookData(webhookDataParams);
    let event = generateEvent(webhookData);
    console.log(JSON.stringify(event));
    return event;
}