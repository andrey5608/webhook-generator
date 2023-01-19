"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyWebhookData = void 0;
var IvyWebhookData = (function () {
    function IvyWebhookData(webhookDataParams) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.hmacKey = "CSC8CDFFFFFFFFFFFF";
        this.type = "order_created";
        this.status = "waiting_for_payment";
        this.paymentStatus = "requires_capture";
        this.price = 11.1;
        this.currency = "EUR";
        this.appId = "63lllasdasddabcasdasdd11";
        this.payloadId = "63abcasdasddabcasdasdd11";
        this.reference = "024b2fc4-b2d7-456f-ada0-51a4554ff60e:9999";
        this.hmacKey = (_a = webhookDataParams.hmacKey) !== null && _a !== void 0 ? _a : this.hmacKey;
        this.type = (_b = webhookDataParams.type) !== null && _b !== void 0 ? _b : this.type;
        this.status = (_c = webhookDataParams.status) !== null && _c !== void 0 ? _c : this.status;
        this.paymentStatus = (_d = webhookDataParams.paymentStatus) !== null && _d !== void 0 ? _d : this.paymentStatus;
        this.price = (_e = webhookDataParams.price) !== null && _e !== void 0 ? _e : this.price;
        this.currency = (_f = webhookDataParams.currency) !== null && _f !== void 0 ? _f : this.currency;
        this.appId = (_g = webhookDataParams.appId) !== null && _g !== void 0 ? _g : this.appId;
        this.payloadId = (_h = webhookDataParams.payloadId) !== null && _h !== void 0 ? _h : this.payloadId;
        this.reference = (_j = webhookDataParams.reference) !== null && _j !== void 0 ? _j : this.reference;
    }
    return IvyWebhookData;
}());
exports.IvyWebhookData = IvyWebhookData;
