const TestContract = artifacts.require("TestContract");

module.exports =async function(deployer) {
 await deployer.deploy(TestContract);
 const  testcontract= await TestContract.deployed();
  console.log("Deployed on" , testcontract.address)

};
