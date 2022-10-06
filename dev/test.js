const Blockchain = require("./blockchain");

const bitCoin = new Blockchain();
bitCoin.createNewBlock(2701, "MJ2701", "JAIMAHAK");
bitCoin.createNewTranscation(323245, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewBlock(0304, "MJ0304", "JANAK");
bitCoin.createNewTranscation(300, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewTranscation(500, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewTranscation(400, "JAI88938BJKBJ", "MAHAK8367JNJKBF");
bitCoin.createNewBlock(0304, "MJ0304", "JANAK");

console.log(bitCoin.chain[289]);
