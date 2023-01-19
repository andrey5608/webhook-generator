import { createHmac } from 'crypto';

export function calculateHmac(data: any, key: string){
    const hmac = createHmac('sha-256', key);
    hmac.update(JSON.stringify(data));
    return hmac.digest('hex');
}