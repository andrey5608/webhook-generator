/**
 * hmacKey: string,
 * type?: string, 'order_created' | 'order_updated',
 * status?: string, 'waiting_for_payment' | 'paid' | 'canceled',
 * paymentStatus?: string, 'requires_capture' | 'succeeded' | 'canceled',
 * price?: number,
 * currency?: string, 'USD' | 'EUR',
 * appId?: string,
 * payloadId?: string,
 * reference?: string
 */
export interface IvyWebhookDataParams {
  hmacKey: string;
  type?: string;
  status?: string;
  paymentStatus?: string;
  price?: number;
  currency?: string;
  appId?: string;
  payloadId?: string;
  reference?: string;
}

export class IvyWebhookData implements IvyWebhookDataParams {
  public hmacKey: string = "CSC8CDFFFFFFFFFFFF";
  public type: string = "order_created";
  public status: string = "waiting_for_payment";
  public paymentStatus: string = "requires_capture";
  public price: number = 11.1;
  public currency = "EUR";
  public appId: string = "63lllasdasddabcasdasdd11";
  public payloadId: string = "63abcasdasddabcasdasdd11";
  public reference: string = "024b2fc4-b2d7-456f-ada0-51a4554ff60e:9999";

  /**
     * 
     * @param webhookDataParams 
     * hmacKey: string,
     * type?: string, 'order_created' | 'order_updated',
     * status?: string, 'waiting_for_payment' | 'paid' | 'canceled',
     * paymentStatus?: string, 'requires_capture' | 'succeeded' | 'canceled',
     * price?: number,
     * currency?: string, 'USD' | 'EUR',
     * appId?: string,
     * payloadId?: string,
     * reference?: string
     */

  public constructor(webhookDataParams: IvyWebhookDataParams) {
    this.hmacKey = webhookDataParams.hmacKey ?? this.hmacKey;
    this.type = webhookDataParams.type ?? this.type;
    this.status = webhookDataParams.status ?? this.status;
    this.paymentStatus = webhookDataParams.paymentStatus ?? this.paymentStatus;
    this.price = webhookDataParams.price ?? this.price;
    this.currency = webhookDataParams.currency ?? this.currency;
    this.appId = webhookDataParams.appId ?? this.appId;
    this.payloadId = webhookDataParams.payloadId ?? this.payloadId;
    this.reference = webhookDataParams.reference ?? this.reference;
  }
}
