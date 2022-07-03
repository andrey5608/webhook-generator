"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeWebhookData = void 0;
var moment = require("moment");
var StripeWebhookData = (function () {
    function StripeWebhookData(webhookDataParams) {
        this.id = 'evt_3LKmL0II7OUAzLPg22gBFO3O';
        this.apiVersion = '2020-03-02';
        this.unixEventDatetime = moment().unix();
        this.sessionId = 'pi_3LCVMyDS7AYLzLPg1W9HrRun';
        this.amountInCents = 9978;
        this.descriptor = 'COMPANYNAME';
        this.metadata = {
            booking_id: 'BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e',
        };
        this.transferGroup = 'BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e';
        this.currency = 'EUR';
        this.clientSecret = 'pi_3LCVMyDS7AYLzLPg1W9HrRun_secret_rh9aCzDD1R6sENjADttIa23Ab';
        this.paymentMethod = 'visa';
        this.executionResult = true;
        this.expiryMonth = 3;
        this.expiryYear = 2030;
        this.cardLast4 = '1111';
        this.countryCode = 'DE';
        this.stripeHmacKey = 'TESTHMAC';
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
    return StripeWebhookData;
}());
exports.StripeWebhookData = StripeWebhookData;
