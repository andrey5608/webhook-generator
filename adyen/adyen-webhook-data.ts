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

    /**
     * 
     * @param webhookDataParams 
     */

    public constructor(webhookDataParams: AdyenWebhookDataParams
    ) {
        this.checkoutSessionId = webhookDataParams.checkoutSessionId ?? this.checkoutSessionId;
        this.adyenHmacKey = webhookDataParams.adyenHmacKey ?? this.adyenHmacKey;
        this.amountInCents = webhookDataParams.amountInCents ?? this.amountInCents;
        this.unixEventDatetime = webhookDataParams.unixEventDatetime ?? this.unixEventDatetime;
        this.merchantAccountCode = webhookDataParams.merchantAccountCode ?? this.merchantAccountCode;
        this.merchantReference = webhookDataParams.merchantReference ?? this.merchantReference;
        this.paymentMethod = webhookDataParams.paymentMethod ?? this.paymentMethod;
        this.pspReference = webhookDataParams.pspReference ?? this.pspReference;
        this.executionResult = webhookDataParams.executionResult ?? this.executionResult;
        this.currency = webhookDataParams.currency ?? this.currency;
        this.expiryDate = webhookDataParams.expiryDate ?? this.expiryDate;
        this.authCode = webhookDataParams.authCode ?? this.authCode;
        this.cardLast4 = webhookDataParams.cardLast4 ?? this.cardLast4;
        this.originalReference = webhookDataParams.originalReference ?? this.originalReference;
    }
}
