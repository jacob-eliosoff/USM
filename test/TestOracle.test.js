const TestOracle = artifacts.require("./TestOracle.sol");

const EVM_REVERT = "VM Exception while processing transaction: revert";

require('chai')
    .use(require('chai-as-promised'))
    .should();

contract("TestOracle", accounts => {
    deployer = accounts[0];
    let oracle;

    beforeEach(async() => {
        oracle = await TestOracle.new({from: deployer});
    });

    describe("deployment", async () => {
        it("returns the correct price", async () => {
            let price = await oracle.latestPrice();
            price.toString().should.equal("25000");
        });

        it("returns the correct decimal shift", async () => {
            let shift = await oracle.decimalShift()
            shift.toString().should.equal("2");
        })
    });
});