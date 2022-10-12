const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", (req, res) => {
  res.send(bitcoin);
});

app.post("/transction", (req, res) => {
  const blockIndex = bitcoin.createNewTranscation(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({
    note: `Transaction will be added in block ${blockIndex}`,
  });
});
app.get("/mine", (req, res) => {});

app.listen(8000, () => {
  console.log("started");
});
