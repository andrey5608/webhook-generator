import { generateAdyenEvent } from '../adyen/generator';
import { generateStripeEvent } from '../stripe/generator';
import { calculateHmacHeader } from '../stripe/hmac';
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
    let event = generateStripeEvent(webhookData);
    let header = calculateHmacHeader(webhookData, webhookDataParams.stripeHmacKey);
    let webhookAndHeader = { event: event, header: { 'stripe-signature': header } };
    console.log(JSON.stringify(webhookAndHeader));
    return webhookAndHeader;
}
