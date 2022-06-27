import moment = require('moment');

export interface AdyenWebhookDataParams {
    checkoutSessionId?: string,
    adyenHmacKey?: string,
    amountInCents?: number,
    unixEventDatetime?: number,
    merchantAccountCode?: string,
    merchantReference?: string,
    paymentMethod?: string,
    pspReference?: string,
    executionResult?: boolean,
    currency?: string,
    expiryDate?: string,
    authCode?: string,
    cardLast4?: string,
    originalReference?: string
}

export class AdyenWebhookData implements AdyenWebhookDataParams {
    /**
     *
     * @param checkoutSessionId
     * @param adyenHmacKey
     * @param amountInCents
     * @param unixEventDatetime
     * @param merchantAccountCode
     * @param merchantReference
     * @param paymentMethod
     * @param pspReference
     * @param executionResult
     * @param currency
     * @param expiryDate
     * @param authCode
     * @param cardLast4
     * @param originalReference
     */

    public constructor(webhookDataParams: AdyenWebhookDataParams
    ) {
        webhookDataParams.checkoutSessionId = this.checkoutSessionId;
        webhookDataParams.adyenHmacKey = this.adyenHmacKey;
        webhookDataParams.amountInCents = this.amountInCents;
        webhookDataParams.unixEventDatetime = this.unixEventDatetime;
        webhookDataParams.merchantAccountCode = this.merchantAccountCode;
        webhookDataParams.merchantReference = this.merchantReference;
        webhookDataParams.paymentMethod = this.paymentMethod;
        webhookDataParams.pspReference = this.pspReference;
        webhookDataParams.executionResult = this.executionResult;
        webhookDataParams.currency = this.currency;
        webhookDataParams.expiryDate = this.expiryDate;
        webhookDataParams.authCode = this.authCode;
        webhookDataParams.cardLast4 = this.cardLast4;
        webhookDataParams.originalReference = this.originalReference;
    }
    public checkoutSessionId: string = 'CSC8CDFFFFFFFFFFFF';
    public adyenHmacKey: string = 'ABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGH';
    public amountInCents: number = 9978;
    public unixEventDatetime: number = moment().unix();
    public merchantAccountCode: string = 'BlahBlahGmbHECOM';
    public merchantReference: string = '024b2fc4-b2d7-456f-ada0-51a4554ff60e:9999';
    public paymentMethod: string = 'visa';
    public pspReference: string = 'BADCASDSDASDASDS';
    public executionResult: boolean = true;
    public currency: string = 'EUR';
    public expiryDate: string = '03/2030';
    public authCode: string = '067000';
    public cardLast4: string = '1111';
    public originalReference: string = '';
}
