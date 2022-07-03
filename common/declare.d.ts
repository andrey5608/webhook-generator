import { AdyenWebhookDataParams } from '../adyen/adyen-webhook-data';
import { StripeWebhookDataParams } from '../stripe/stripe-webhook-data';

declare module 'webhook-generator' {
    export function generateAdyenWebhook(webhookDataParams: AdyenWebhookDataParams): any
    export function generateStripeWebhook(webhookDataParams: StripeWebhookDataParams): any;
}