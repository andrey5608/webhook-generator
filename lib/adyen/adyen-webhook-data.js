"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdyenWebhookData = void 0;
var moment = require("moment");
var AdyenWebhookData = (function () {
    function AdyenWebhookData(webhookDataParams) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
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
        this.checkoutSessionId = (_a = webhookDataParams.checkoutSessionId) !== null && _a !== void 0 ? _a : this.checkoutSessionId;
        this.adyenHmacKey = (_b = webhookDataParams.adyenHmacKey) !== null && _b !== void 0 ? _b : this.adyenHmacKey;
        this.amountInCents = (_c = webhookDataParams.amountInCents) !== null && _c !== void 0 ? _c : this.amountInCents;
        this.unixEventDatetime = (_d = webhookDataParams.unixEventDatetime) !== null && _d !== void 0 ? _d : this.unixEventDatetime;
        this.merchantAccountCode = (_e = webhookDataParams.merchantAccountCode) !== null && _e !== void 0 ? _e : this.merchantAccountCode;
        this.merchantReference = (_f = webhookDataParams.merchantReference) !== null && _f !== void 0 ? _f : this.merchantReference;
        this.paymentMethod = (_g = webhookDataParams.paymentMethod) !== null && _g !== void 0 ? _g : this.paymentMethod;
        this.pspReference = (_h = webhookDataParams.pspReference) !== null && _h !== void 0 ? _h : this.pspReference;
        this.executionResult = (_j = webhookDataParams.executionResult) !== null && _j !== void 0 ? _j : this.executionResult;
        this.currency = (_k = webhookDataParams.currency) !== null && _k !== void 0 ? _k : this.currency;
        this.expiryDate = (_l = webhookDataParams.expiryDate) !== null && _l !== void 0 ? _l : this.expiryDate;
        this.authCode = (_m = webhookDataParams.authCode) !== null && _m !== void 0 ? _m : this.authCode;
        this.cardLast4 = (_o = webhookDataParams.cardLast4) !== null && _o !== void 0 ? _o : this.cardLast4;
        this.originalReference = (_p = webhookDataParams.originalReference) !== null && _p !== void 0 ? _p : this.originalReference;
    }
    return AdyenWebhookData;
}());
exports.AdyenWebhookData = AdyenWebhookData;
