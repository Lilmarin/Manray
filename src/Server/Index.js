const express = require("express");
const app = express();
const cors = require("cors");
const hubspot = require("@hubspot/api-client");

const hubspotClient = new hubspot.Client({
  apiKey: "be39c6fd-de65-4c29-8c81-8c1106bca2f4",
});

app.use(express.static("."));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/submit", async (req, res) => {
  console.log("Recibido");
  if (req.body) {
    const properties = {
      firstname: req.body.firstname,
      email: req.body.email,
      phone: req.body.phone,
      proyecto: req.body.project,
    };
    const SimplePublicObjectInput = { properties };
    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
        SimplePublicObjectInput
      );
      console.log(JSON.stringify(apiResponse.body, null, 2));
      res.json({ apiResponse: apiResponse });
    } catch (e) {
      e.message === "HTTP request failed"
        ? res.send(JSON.stringify(e.response, null, 2))
        : res.send(e);
    }
  }
});

app.listen();
