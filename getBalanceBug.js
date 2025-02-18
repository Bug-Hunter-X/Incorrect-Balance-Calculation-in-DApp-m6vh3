function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//This function is susceptible to errors if the contract's balance is larger than Number.MAX_SAFE_INTEGER.
//It will return an incorrect value, potentially leading to unexpected behavior in DApps.