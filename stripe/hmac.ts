const stripe = require('../stripe/lib/Webhooks.js');

function calculateHmac(data: any, stripeKey: string){
    return stripe.generateTestHeaderString({
        payload: data,
        secret: stripeKey
    })
  }

console.log(JSON.stringify(calculateHmac({}, 'ASDA')));