var stripe = require('../stripe/lib/Webhooks.js');
function calculateHmac(data, stripeKey) {
    return stripe.generateTestHeaderString({
        payload: data,
        secret: stripeKey
    });
}
console.log(JSON.stringify(calculateHmac({}, 'ASDA')));
