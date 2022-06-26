# webhooks-generator

## Adyen

To use this generation, just call `generateAdyenWebhook({prop: value, ...})` using these data:

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
```
const webhookGenerator = require('webhook-generator'); // or import { generateAdyenWebhook } from 'webhook-generator';

// just default webhook
let webhook = webhookGenerator.generateAdyenWebhook({});

// customized one
let customWebhook = webhookGenerator.generateAdyenWebhook({
  adyenHmacKey:
    '44782DEF547AAA06C910C43932B1EB0C71FC68D9D0C057550C48EC2ACF6BA056',
  checkoutSessionId: 'ASJDJSFNJABNFJN',
  currency: 'USD',
});

```

If you will not specify these data, library will use the default data.