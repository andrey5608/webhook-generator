"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeWebhookData = void 0;
var moment = require("moment");
var StripeWebhookData = (function () {
    function StripeWebhookData(webhookDataParams) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.id = "evt_3LKmL0II7OUAzLPg22gBFO3O";
        this.apiVersion = "2020-03-02";
        this.unixEventDatetime = moment().unix();
        this.sessionId = "pi_3LCVMyDS7AYLzLPg1W9HrRun";
        this.amountInCents = 9978;
        this.descriptor = "COMPANYNAME";
        this.metadata = {
            booking_id: "BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e",
        };
        this.transferGroup = "BLAHBLAH_024b2fc4-b2d7-456f-ada0-51a4554ff60e";
        this.currency = "EUR";
        this.clientSecret = "pi_3LCVMyDS7AYLzLPg1W9HrRun_secret_rh9aCzDD1R6sENjADttIa23Ab";
        this.paymentMethod = "visa";
        this.executionResult = true;
        this.expiryMonth = 3;
        this.expiryYear = 2030;
        this.cardLast4 = "1111";
        this.countryCode = "DE";
        this.stripeHmacKey = "TESTHMAC";
        this.id = (_a = webhookDataParams.id) !== null && _a !== void 0 ? _a : this.id;
        this.apiVersion = (_b = webhookDataParams.apiVersion) !== null && _b !== void 0 ? _b : this.apiVersion;
        this.unixEventDatetime = (_c = webhookDataParams.unixEventDatetime) !== null && _c !== void 0 ? _c : this.unixEventDatetime;
        this.sessionId = (_d = webhookDataParams.sessionId) !== null && _d !== void 0 ? _d : this.sessionId;
        this.amountInCents = (_e = webhookDataParams.amountInCents) !== null && _e !== void 0 ? _e : this.amountInCents;
        this.descriptor = (_f = webhookDataParams.descriptor) !== null && _f !== void 0 ? _f : this.descriptor;
        this.metadata = (_g = webhookDataParams.metadata) !== null && _g !== void 0 ? _g : this.metadata;
        this.transferGroup = (_h = webhookDataParams.transferGroup) !== null && _h !== void 0 ? _h : this.transferGroup;
        this.currency = (_j = webhookDataParams.currency) !== null && _j !== void 0 ? _j : this.currency;
        this.clientSecret = (_k = webhookDataParams.clientSecret) !== null && _k !== void 0 ? _k : this.clientSecret;
        this.paymentMethod = (_l = webhookDataParams.paymentMethod) !== null && _l !== void 0 ? _l : this.paymentMethod;
        this.executionResult = (_m = webhookDataParams.executionResult) !== null && _m !== void 0 ? _m : this.executionResult;
        this.expiryMonth = (_o = webhookDataParams.expiryMonth) !== null && _o !== void 0 ? _o : this.expiryMonth;
        this.expiryYear = (_p = webhookDataParams.expiryYear) !== null && _p !== void 0 ? _p : this.expiryYear;
        this.cardLast4 = (_q = webhookDataParams.cardLast4) !== null && _q !== void 0 ? _q : this.cardLast4;
        this.countryCode = (_r = webhookDataParams.countryCode) !== null && _r !== void 0 ? _r : this.countryCode;
        this.stripeHmacKey = (_s = webhookDataParams.stripeHmacKey) !== null && _s !== void 0 ? _s : this.stripeHmacKey;
    }
    return StripeWebhookData;
}());
exports.StripeWebhookData = StripeWebhookData;
