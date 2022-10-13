const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();
const uuid = require("uuid").v4;
const port = process.argv[2];
const portConnection = process.argv[3];

const newAddress = uuid();
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
app.get("/mine", (req, res) => {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBlockData = {
    transation: bitcoin.pendingTransaction,
    index: lastBlock["index"] + 1,
  };

  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  const transactions = bitcoin.createNewTranscation(12.5, "00", newAddress);

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: "new block mined successfully",
    block: newBlock,
  });
});

app.post("/register-and-boradcast-node", (req, res) => {
  const newNodeUrl = req.body.newNodeUrl;
});

app.post("/register-node", () => {});

app.post("/register-nodes-bulk", () => {});

app.listen(port, () => {
  console.log("started", portConnection);
});
