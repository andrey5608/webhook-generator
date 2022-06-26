# webhooks-generator

## Adyen

To use this generation, just call `generateWebhook({prop: value, ...})` using these data:
```
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
```

e.g.
`generateWebhook({checkoutSessionId: 'ASJDJSFNJABNFJN', currency: 'USD'})`

If you will no specify these data, library will use the default data.