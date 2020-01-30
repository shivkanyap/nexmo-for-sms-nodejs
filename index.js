const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: '',
});

const from = 'Nexmo';
const to = '918317418780';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);