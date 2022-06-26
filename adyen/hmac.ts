import * as crypto from 'crypto';

export function calculateHmac(
    key: string,
    pspReference: string,
    originalReference: string,
    merchantAccountCode: string,
    merchantReference: string,
    amountInCents: number,
    currency: string,
    executionResult: string
) {
    const rawKey = Buffer.from(key, 'hex');
    let data = `${pspReference}:${originalReference}:${merchantAccountCode}:${merchantReference}:${amountInCents}:${currency}:AUTHORISATION:${executionResult}`;
    let hmac = crypto
        .createHmac('sha256', rawKey)
        .update(data, 'utf-8')
        .digest('base64');
    return hmac;
}
