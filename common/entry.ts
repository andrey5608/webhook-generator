import { generateAdyenEvent } from '../adyen/generator';
import { generateStripeEvent } from '../stripe/generator';
import { AdyenWebhookData, AdyenWebhookDataParams } from '../adyen/adyen-webhook-data';
import { StripeWebhookData, StripeWebhookDataParams } from '../stripe/stripe-webhook-data';

export function generateAdyenWebhook(webhookDataParams: AdyenWebhookDataParams) {
    console.log('adyen');
    let webhookData = new AdyenWebhookData(webhookDataParams);
    let event = generateAdyenEvent(webhookData);
    console.log(JSON.stringify(event));
    return event;
}

export function generateStripeWebhook(webhookDataParams: StripeWebhookDataParams) {
    console.log('stripe');
    let webhookData = new StripeWebhookData(webhookDataParams);
    let webhookAndHeader = generateStripeEvent(webhookData);
    let result = { event: webhookAndHeader.event, header: { 'stripe-signature': webhookAndHeader.header } };
    console.log(JSON.stringify(result));
    return result;
}
