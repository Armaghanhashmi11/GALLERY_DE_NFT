import web3 from "../web3/web3";

const address = "0xAc850E6017793A47820634a07316b1a82f6bC7b6";
const abi = [
  {
    inputs: [{ internalType: "address", name: "seller", type: "address" }],
    name: "purchaseNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x4a1b88cc",
  },
];
export default new web3.eth.Contract(abi, address);
