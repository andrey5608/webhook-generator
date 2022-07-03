import moment = require("moment");

export interface StripeWebhookDataParams {
    id?: string;
    apiVersion?: string;
    unixEventDatetime?: number;
    sessionId?: string;
    amountInCents?: number;
    descriptor?: string;
    metadata?: object;
    transferGroup?: string;
    currency?: string;
    clientSecret?: string;
    paymentMethod?: string;
    executionResult?: boolean;
    expiryMonth?: number;
    expiryYear?: number;
    cardLast4?: string;
    countryCode?: string;
    stripeHmacKey?: string;
}

export class StripeWebhookData implements StripeWebhookDataParams {
    public id: string = "evt_3LKmL0II7OUAzLPg22gBFO3O";
    public apiVersion: string = "2020-03-02";
    public unixEventDatetime: number = moment().unix();
    public sessionId: string = "pi_3LCVMyDS7AYLzLPg1W9HrRun";
    public amountInCents: number = 9978;
    public descriptor: string = "COMPANYNAME";
    public metadata: object = {
        booking_id: "BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e",
    };
    public transferGroup: string =
        "BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e";
    public currency: string = "EUR";
    public clientSecret: string =
        "pi_3LCVMyDS7AYLzLPg1W9HrRun_secret_rh9aCzDD1R6sENjADttIa23Ab";
    public paymentMethod: string = "visa";
    public executionResult: boolean = true;
    public expiryMonth: number = 3;
    public expiryYear: number = 2030;
    public cardLast4: string = "1111";
    public countryCode: string = "DE";
    public stripeHmacKey: string = "TESTHMAC";

    /**
     *
     * @param webhookDataParams
     */

    public constructor(webhookDataParams: StripeWebhookDataParams) {
        this.id = webhookDataParams.id ?? this.id;
        this.apiVersion = webhookDataParams.apiVersion ?? this.apiVersion;
        this.unixEventDatetime = webhookDataParams.unixEventDatetime ?? this.unixEventDatetime;
        this.sessionId = webhookDataParams.sessionId ?? this.sessionId;
        this.amountInCents = webhookDataParams.amountInCents ?? this.amountInCents;
        this.descriptor = webhookDataParams.descriptor ?? this.descriptor;
        this.metadata = webhookDataParams.metadata ?? this.metadata;
        this.transferGroup = webhookDataParams.transferGroup ?? this.transferGroup;
        this.currency = webhookDataParams.currency ?? this.currency;
        this.clientSecret = webhookDataParams.clientSecret ?? this.clientSecret;
        this.paymentMethod = webhookDataParams.paymentMethod ?? this.paymentMethod;
        this.executionResult = webhookDataParams.executionResult ?? this.executionResult;
        this.expiryMonth = webhookDataParams.expiryMonth ?? this.expiryMonth;
        this.expiryYear = webhookDataParams.expiryYear ?? this.expiryYear;
        this.cardLast4 = webhookDataParams.cardLast4 ?? this.cardLast4;
        this.countryCode = webhookDataParams.countryCode ?? this.countryCode;
        this.stripeHmacKey = webhookDataParams.stripeHmacKey ?? this.stripeHmacKey;
    }
}
