const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.get('/', (req, res) => {
    console.log("Hello")
    res.send('Hello World!');
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  console.log("Hello")

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
