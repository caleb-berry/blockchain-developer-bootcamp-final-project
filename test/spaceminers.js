const SpaceMiners = artifacts.require("SpaceMiners");
const Portals = artifacts.require("Portals");

contract("SpaceMiners", async accounts => {
  it("should mint 1 miner when payment = ETH fee", async () => {
    const instance = await SpaceMiners.deployed();
    const mintMiner = await instance.mintMiner(1, {value: web3.utils.toWei('1', 'ether')});
    const balanceOf = await instance.balanceOf(accounts[0], 1);
    const tx = await web3.eth.getTransaction(mintMiner.receipt.transactionHash);
    
    assert.equal(balanceOf, 1, "miner balance still 0");
    assert.equal(tx.value, web3.utils.toWei('1', 'ether'), "check transaction value");
  });
  //loop through all miners
  // it("should warp miner through portal, and prevent warping if: inactive miners > active miners", async () => {
  //   const instance = await SpaceMiners.deployed();
  //   const mintMiner = await instance.mintMiner(0, {value: web3.utils.toWei('1', 'ether')});
  //   const warp = await instance.warp(0);
  //   const activeMiners = await instance.getActiveMiners(0);
    
  //   assert.equal(activeMiners.valueOf(), 1, "activeMiners count still 0");
  // });
});