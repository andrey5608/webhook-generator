import moment = require('moment');

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
    stripeHmacKey?: string,
}

export class StripeWebhookData implements StripeWebhookDataParams {
    /**
     *
     * @param webhookDataParams
     */

    public constructor(webhookDataParams: StripeWebhookDataParams) {
        webhookDataParams.id = this.id;
        webhookDataParams.apiVersion = this.apiVersion;
        webhookDataParams.unixEventDatetime = this.unixEventDatetime;
        webhookDataParams.sessionId = this.sessionId;
        webhookDataParams.amountInCents = this.amountInCents;
        webhookDataParams.descriptor = this.descriptor;
        webhookDataParams.metadata = this.metadata;
        webhookDataParams.transferGroup = this.transferGroup;
        webhookDataParams.currency = this.currency;
        webhookDataParams.clientSecret = this.clientSecret;
        webhookDataParams.paymentMethod = this.paymentMethod;
        webhookDataParams.executionResult = this.executionResult;
        webhookDataParams.expiryMonth = this.expiryMonth;
        webhookDataParams.expiryYear = this.expiryYear;
        webhookDataParams.cardLast4 = this.cardLast4;
        webhookDataParams.countryCode = this.countryCode;
        webhookDataParams.stripeHmacKey = this.stripeHmacKey;
    }

    public id: string = 'evt_3LKmL0II7OUAzLPg22gBFO3O';
    public apiVersion: string = '2020-03-02';
    public unixEventDatetime: number = moment().unix();
    public sessionId: string = 'pi_3LCVMyDS7AYLzLPg1W9HrRun';
    public amountInCents: number = 9978;
    public descriptor: string = 'COMPANYNAME';
    public metadata: object = {
        booking_id: 'BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e',
    };
    public transferGroup: string =
        'BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e';
    public currency: string = 'EUR';
    public clientSecret: string =
        'pi_3LCVMyDS7AYLzLPg1W9HrRun_secret_rh9aCzDD1R6sENjADttIa23Ab';
    public paymentMethod: string = 'visa';
    public executionResult: boolean = true;
    public expiryMonth: number = 3;
    public expiryYear: number = 2030;
    public cardLast4: string = '1111';
    public countryCode: string = 'DE';
    public stripeHmacKey: string = 'TESTHMAC';
}
