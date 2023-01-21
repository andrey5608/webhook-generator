import { AdyenWebhookDataParams } from '../adyen/adyen-webhook-data';
import { IvyWebhookDataParams } from '../ivy/ivy-webhook-data';
import { StripeWebhookDataParams } from '../stripe/stripe-webhook-data';

declare module 'webhook-generator' {
    export function generateAdyenWebhook(webhookDataParams: AdyenWebhookDataParams): any
    export function generateStripeWebhook(webhookDataParams: StripeWebhookDataParams): any;
    export function generateIvyWebhook(webhookDataParams: IvyWebhookDataParams): any;
}