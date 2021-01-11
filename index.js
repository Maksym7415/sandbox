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

app.post('/create-session', async (req, res) => {
  const stripe = Stripe('sk_test_51HGjVfCcIG0MPJSGqWXIyvid7alHehKxkha54GxTEvxdR2U5HDVSNAjLDk5r8FS0SBVRCCxiRUAEYJM3cQ3j1euU00YxPPx5rh');
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:8000/success',
    cancel_url: 'http://localhost:8000/cancel',
  });

  res.json({ id: session.id });
});

try {
  httpServer.listen(HTTP_PORT, async () => {
    console.log(`Listening on port ${HTTP_PORT}`);
  });
} catch (error) {
  console.error(`date: ${new Date()}\n`, error, '\n');
  httpServer.close();
}

