
let Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
web3.eth.getBalance("0xB5e6cb3Bf995a5973882C5d2d3B28bcC5dd088f5").then(console.log);
web3.eth.getBalance("0xB5e6cb3Bf995a5973882C5d2d3B28bcC5dd088f5").then(function(result) {console.log(web3.utils.fromWei(result, "ether"))});
web3.eth.sendTransaction({from: "0xB5e6cb3Bf995a5973882C5d2d3B28bcC5dd088f5", to: "0x80BB5501624b73260A375D3722fc76908196105c", value: web3.utils.toWei("1", "ether")});

web3.eth.call({from: "0xB5e6cb3Bf995a5973882C5d2d3B28bcC5dd088f5", to: "0xCD7aEC85c6C631Db33987A74E562B1eEAEeD4005", data: web3.utils.sha3("myUint()").substr(0,10)}).then(console.log)
let contract = new web3.eth.Contract(ABI, ADDR)
contract.methods.myUint().call().then(console.log); // myUint is a part of the contract code (solidity)
contract.methods.setUint(59).send({from: "account_address"}).then(console.log);

mycontract.methods.setUint(3).send({from: "0xB5e6cb3Bf995a5973882C5d2d3B28bcC5dd088f5"});
mycontract.methods.myUint().call().then(result => console.log(result.toString()));