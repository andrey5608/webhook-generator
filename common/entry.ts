import { generateAdyenEvent } from '../adyen/generator';
import { generateStripeEvent } from '../stripe/generator';
import { AdyenWebhookData, AdyenWebhookDataParams } from '../adyen/adyen-webhook-data';
import { StripeWebhookData, StripeWebhookDataParams } from '../stripe/stripe-webhook-data';
import { IvyWebhookData, IvyWebhookDataParams } from '../ivy/ivy-webhook-data';
import { generateIvyEvent } from '../ivy/generator';

export function generateAdyenWebhook(webhookDataParams: AdyenWebhookDataParams): any {
    let webhookData = new AdyenWebhookData(webhookDataParams);
    let event = generateAdyenEvent(webhookData);
    return event;
}

export function generateStripeWebhook(webhookDataParams: StripeWebhookDataParams): any {
    let webhookData = new StripeWebhookData(webhookDataParams);
    let webhookAndHeader = generateStripeEvent(webhookData);
    let result = { event: webhookAndHeader.event, header: { 'stripe-signature': webhookAndHeader.header } };
    return result;
}

export function generateIvyWebhook(webhookDataParams: IvyWebhookDataParams): any {
    let webhookData = new IvyWebhookData(webhookDataParams);
    let webhookAndHeader = generateIvyEvent(webhookData);
    let result = { event: webhookAndHeader.data, header: { 'x-ivy-signature': webhookAndHeader.hmac } };
    return result;
}
