const stripe = require('../stripe/lib/Webhooks.js');

export function calculateHmacHeader(data: any, stripeKey: string){
    return stripe.generateTestHeaderString({
        payload: data,
        secret: stripeKey
    })
  }