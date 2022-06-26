import moment = require('moment');

export function generateWebhook() {
  console.log('adyen');
  let event = generateEvent(
    'CSC8CDFFFFFFFFFFFF',
    'YmxhaGJsYWhobWFjMTExMzMz',
    1001,
    moment().unix(),
    'BlahBlahGmbHECOM',
    '024b2fc4-b2d7-456f-ada0-51a4554ff60e:9999',
    'visa',
    'BADCASDSDASDASDS',
    true,
    'EUR',
    '03/2030',
    '067000',
    '1111'
  );
  console.log(JSON.stringify(event));
  return event;
}

function generateEvent(
  checkoutSessionId: string,
  hmacSignature: string,
  amountInCents: number,
  unixEventDatetime: number,
  merchantAccountCode: string,
  merchantReference: string,
  paymentMethod: string,
  pspReference: string,
  executionResult: boolean = true,
  currency: string = 'EUR',
  expiryDate: string = '03/2030',
  authCode: string = '067000',
  cardLast4: string = '1111'
) {
  return {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            expiryData: expiryDate,
            authCode: authCode,
            cardSummary: cardLast4,
            'threeds2.cardEnrolled': 'false',
            checkoutSessionId: checkoutSessionId,
            hmacSignature: hmacSignature,
          },
          amount: {
            currency: currency,
            value: amountInCents,
          },
          eventCode: 'AUTHORISATION',
          eventDate: moment.unix(unixEventDatetime).format('YYYY-MM-DDTHH:mm:ssZ'),
          merchantAccountCode: merchantAccountCode,
          merchantReference: merchantReference,
          operations: ['CANCEL', 'CAPTURE', 'REFUND'],
          paymentMethod: paymentMethod,
          pspReference: pspReference,
          reason: `${authCode}:${cardLast4}:${expiryDate}`,
          success: executionResult,
        },
      },
    ],
  };
}

generateWebhook(); // TODO remove
