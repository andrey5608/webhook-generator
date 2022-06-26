"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookData = void 0;
var moment = require("moment");
var WebhookData = (function () {
    function WebhookData(webhookDataParams) {
        this.checkoutSessionId = 'CSC8CDFFFFFFFFFFFF';
        this.adyenHmacKey = 'ABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGH';
        this.amountInCents = 9978;
        this.unixEventDatetime = moment().unix();
        this.merchantAccountCode = 'BlahBlahGmbHECOM';
        this.merchantReference = '024b2fc4-b2d7-456f-ada0-51a4554ff60e:9999';
        this.paymentMethod = 'visa';
        this.pspReference = 'BADCASDSDASDASDS';
        this.executionResult = true;
        this.currency = 'EUR';
        this.expiryDate = '03/2030';
        this.authCode = '067000';
        this.cardLast4 = '1111';
        this.originalReference = '';
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
    return WebhookData;
}());
exports.WebhookData = WebhookData;
