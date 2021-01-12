const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const Stripe = require('stripe');

const app = express();
const httpServer = http.createServer(app);
const HTTP_PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/sandbox/create-session', async (req, res) => {
  const stripe = Stripe('sk_test_51HGjVfCcIG0MPJSGqWXIyvid7alHehKxkha54GxTEvxdR2U5HDVSNAjLDk5r8FS0SBVRCCxiRUAEYJM3cQ3j1euU00YxPPx5rh');
  const { name, images, currency, amount, quantity } = req.body;
  console.log(name, images, currency, amount, quantity)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency,
          product_data: {
            name,
            images: [images]
          },
          unit_amount: amount,
        },
        quantity,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:8000/success', // here should success page
    cancel_url: 'http://localhost:8000/cancel', // here should be cancel page
  });

  res.json({ id: session.id });
});

app.use('*', (req, res) => res.send('Not found'))

try {
  httpServer.listen(HTTP_PORT, async () => {
    console.log(`Listening on port ${HTTP_PORT}`);
  });
} catch (error) {
  console.error(`date: ${new Date()}\n`, error, '\n');
  httpServer.close();
}

