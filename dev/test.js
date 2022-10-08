const Blockchain = require("./blockchain");

const bitCoin = new Blockchain();
bitCoin.createNewBlock(2701, "MJ2701", "JAIMAHAK");
bitCoin.createNewTranscation(323245, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewBlock(0304, "MJ0304", "JANAK");
bitCoin.createNewTranscation(300, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewTranscation(500, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewTranscation(400, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewBlock(0304, "MJ0304", "JANAK");

const previousBlockHash = "JKBVFYEER8T7V8VGEGV";
const currentBlockData = [
  {
    nonce: 2701,
    hash: "JAIMAHAK",
    previousBlockHash: "MJ2701",
  },
  {
    nonce: 68687,
    hash: "BEJWJBE98F7F98EWBF",
    previousBlockHash: "BIHDF74664GH",
  },
  {
    nonce: 65767,
    hash: "BHFBD87RDFG5",
    previousBlockHash: "VJHFHBGI67352G",
  },
];
const nonce = 89787;

// console.log(bitCoin.proofOfWork(previousBlockHash, currentBlockData));

console.log(bitCoin.hashBlock(previousBlockHash, currentBlockData, 1));
// console.log(bitCoin.proofOfWork(previousBlockHash, currentBlockData));

// console.log(bitCoin.chain[0]);
