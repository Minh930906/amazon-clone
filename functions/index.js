const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvatINUIkIvkrKHk2TTduNED6djluyTrRVJy4ac5dQP86sVxKtjj3xtJCFzcGtdyk4bp1XtZNyijNeWfnDscCM00FzbbDWlD"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub units of the currency
    currency: "usd",
  });

  //201-OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-8a081/us-central1/api
