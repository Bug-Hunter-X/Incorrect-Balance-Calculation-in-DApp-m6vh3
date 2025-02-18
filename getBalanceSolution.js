const BigNumber = require('bignumber.js');

async function getBalance() {
  const balance = await web3.eth.getBalance(address);
  const bigNumberBalance = new BigNumber(balance);
  return bigNumberBalance.toString();
}

//This solution uses BigNumber.js to accurately represent and handle potentially large balances.
//Using BigNumber.js prevents integer overflow and ensures the balance is correctly calculated and represented.