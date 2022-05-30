
## Procedure
- clone starter project
- install npm i -D hardhat
- initialize hardhat: npx hardhat
- install .env: npm i -D dotenv
- install etherscaner: npm i -D @nomiclabs/hardhat-etherscan
- build your smart contract
- after finishing your smart contract prepare your deploy script file
- prepare your .env file & add your API_KEY, POLYGON_MUMBAI, PRIVATE_KEY
- prepare your hardhat.config.js & add the networks to connect your contract
- prepare to compile & deploy: npx hardhat compile => itn should return Compiled 2 Solidity files successfully
- then deploy: `npx hardhat run scripts/deployMarketSentiment.js --network mumbai`
- save the MarketSentiment deployed address to: x
- To verify your contract(Optional): `npx hardhat verify 0x7f7825eBE22dCC9b4935848e2b47f79EaF376aD3 --network mumbai`
- we can use the polygon interface to interact with our contract to add tickers & vote for them https://mumbai.polygonscan.com/address/0xE0999E5f5dbF69Ee22dCaCaF012977cB49a118E7#readContract



# Basic Sample Hardhat Project


This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
