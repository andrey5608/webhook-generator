import { v4 as uuidv4 } from 'uuid';
import { StripeWebhookData } from './stripe-webhook-data';

export function generateStripeEvent(webhookData: StripeWebhookData) {
    return {
        'id': webhookData.id,
        'object': 'event',
        'api_version': webhookData.apiVersion,
        'created': webhookData.unixEventDatetime,
        'data': {
            'object': {
                'id': webhookData.sessionId,
                'object': 'payment_intent',
                'amount': webhookData.amountInCents,
                'amount_capturable': 0,
                'amount_details': {
                    'tip': []
                },
                'amount_received': webhookData.amountInCents,
                'application': null,
                'application_fee_amount': 260,
                'automatic_payment_methods': null,
                'canceled_at': null,
                'cancellation_reason': null,
                'capture_method': 'automatic',
                'charges': {
                    'object': 'list',
                    'data': [
                        {
                            'id': 'ch_3LDmN1DS7AYLzLPg2R8RHElw',
                            'object': 'charge',
                            'amount': webhookData.amountInCents,
                            'amount_captured': webhookData.amountInCents,
                            'amount_refunded': 0,
                            'application': null,
                            'application_fee': 'fee_1LDmLMIRRQvnjB5sMxjswrS6',
                            'application_fee_amount': 262,
                            'balance_transaction': 'txn_3LDmV9AS7AYLzLIg2ADIq0dx',
                            'billing_details': {
                                'address': {
                                    'city': null,
                                    'country': webhookData.countryCode,
                                    'line1': null,
                                    'line2': null,
                                    'postal_code': null,
                                    'state': null
                                },
                                'email': null,
                                'name': null,
                                'phone': null
                            },
                            'calculated_statement_descriptor': webhookData.descriptor,
                            'captured': true,
                            'created': webhookData.unixEventDatetime,
                            'currency': 'eur',
                            'customer': null,
                            'description': null,
                            'destination': 'acct_1LCjJVDIRQvnjC5s',
                            'dispute': null,
                            'disputed': false,
                            'failure_balance_transaction': null,
                            'failure_code': null,
                            'failure_message': null,
                            'fraud_details': [],
                            'invoice': null,
                            'livemode': false,
                            'metadata': {
                                'booking_id': webhookData.transferGroup,
                            },
                            'on_behalf_of': null,
                            'order': null,
                            'outcome': {
                                'network_status': 'approved_by_network',
                                'reason': null,
                                'risk_level': 'normal',
                                'risk_score': 23,
                                'seller_message': 'Payment complete.',
                                'type': 'authorized'
                            },
                            'paid': true,
                            'payment_intent': webhookData.sessionId,
                            'payment_method': 'pm_1LDmOPES7RYLzLPgVbQluuEz',
                            'payment_method_details': {
                                'card': {
                                    'brand': webhookData.paymentMethod,
                                    'checks': {
                                        'address_line1_check': null,
                                        'address_postal_code_check': null,
                                        'cvc_check': 'pass'
                                    },
                                    'country': webhookData.countryCode,
                                    'exp_month': webhookData.expiryMonth,
                                    'exp_year': webhookData.expiryYear,
                                    'fingerprint': 'O77CsH2hHCN6yei9',
                                    'funding': 'credit',
                                    'installments': null,
                                    'last4': webhookData.cardLast4,
                                    'mandate': null,
                                    'network': webhookData.paymentMethod,
                                    'three_d_secure': null,
                                    'wallet': null
                                },
                                'type': 'card'
                            },
                            'receipt_email': null,
                            'receipt_number': null,
                            'receipt_url': 'https://pay.stripe.com/receipts/payment/TESTURL',
                            'refunded': false,
                            'refunds': {
                                'object': 'list',
                                'data': [],
                                'has_more': false,
                                'total_count': 0,
                                'url': '/v1/charges/ch_3KMmN1DS7AYLzLPg2P9OOOlw/refunds'
                            },
                            'review': null,
                            'shipping': null,
                            'source': null,
                            'source_transfer': null,
                            'statement_descriptor': null,
                            'statement_descriptor_suffix': null,
                            'status': 'succeeded',
                            'transfer': 'tr_3KMmN1DS7AYLzLPg2E9OOOlw',
                            'transfer_data': {
                                'amount': null,
                                'destination': 'acct_1OLjJVDIOPvnjV6s'
                            },
                            'transfer_group': webhookData.transferGroup,
                        }
                    ],
                    'has_more': false,
                    'total_count': 1,
                    'url': `/v1/charges?payment_intent=${webhookData.sessionId}`
                },
                'client_secret': webhookData.clientSecret,
                'confirmation_method': 'automatic',
                'created': webhookData.unixEventDatetime,
                'currency': 'eur',
                'customer': null,
                'description': null,
                'invoice': null,
                'last_payment_error': null,
                'livemode': false,
                'metadata': {
                    'booking_id': webhookData.transferGroup,
                },
                'next_action': null,
                'on_behalf_of': null,
                'payment_method': 'pm_1LDmNEDS7AYLzLPgVbCmxxEz',
                'payment_method_options': {
                    'card': {
                        'installments': null,
                        'mandate_options': null,
                        'network': null,
                        'request_three_d_secure': 'automatic'
                    },
                    'giropay': [],
                    'klarna': {
                        'preferred_locale': null
                    },
                    'paypal': {
                        'preferred_locale': null
                    },
                    'sofort': {
                        'preferred_language': null
                    }
                },
                'payment_method_types': [
                    'card',
                    'giropay',
                    'klarna',
                    'sofort',
                    'paypal'
                ],
                'processing': null,
                'receipt_email': null,
                'review': null,
                'setup_future_usage': null,
                'shipping': null,
                'source': null,
                'statement_descriptor': null,
                'statement_descriptor_suffix': null,
                'status': 'succeeded',
                'transfer_data': {
                    'destination': 'acct_1LCjJVDIRQvnjS5s'
                },
                'transfer_group': webhookData.transferGroup,
            }
        },
        'livemode': false,
        'pending_webhooks': 1,
        'request': {
            'id': 'req_2oRycohmOgITiD',
            'idempotency_key': uuidv4,
        },
        'type': webhookData.executionResult ? 'payment_intent.succeeded' : 'payment_intent.payment_failed'
    };
}
