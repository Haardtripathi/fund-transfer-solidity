import { expect } from "chai";
import { ethers } from "hardhat";
import { FundTransfer, FundTransfer__factory } from "../typechain-types";
import { assert } from "chai";

describe("FundTransfer", function () {
  let fundTransfer: FundTransfer
  let fundTransferFactory: FundTransfer__factory
  let currentBalanceofDeployerbeforeDeploy: bigint, currentAddress1BalancebeforeDeploy: bigint

  beforeEach(async function () {
    fundTransferFactory = await ethers.getContractFactory("FundTransfer")
    fundTransfer = (await fundTransferFactory.deploy()) as FundTransfer

    currentBalanceofDeployerbeforeDeploy = await fundTransfer.getAddressBalance('0x618F3FE9CaC17eFA1034040f7b74D9D66d86D843')
    currentAddress1BalancebeforeDeploy = await fundTransfer.getAddressBalance('0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC')


  })

  it("should be deployed", async function () {
    expect(fundTransfer.address).to.properAddress;
  });

  describe("fund", function () {
    let addFund
    beforeEach(async function () {
      addFund = await fundTransfer.fund({ value: ethers.utils.parseEther("0.02"), gasPrice: ethers.utils.parseUnits('100', 'gwei') })
      await addFund.wait()
    })

    it("balance equal to funded amount", async function () {
      let currectBalance = await fundTransfer.currentBalance()
      let cB = ethers.utils.formatEther(currectBalance)
      assert.equal(cB.toString(), "0.02")
    })

    it("check updated Balance of funder/deployer", async function () {
      let currentBalanceofDeployer = await fundTransfer.getAddressBalance('0x618F3FE9CaC17eFA1034040f7b74D9D66d86D843')
      let x = Number(currentBalanceofDeployerbeforeDeploy)
      let y = 0.02
      let z = x - y
      assert.closeTo(z, Number(currentBalanceofDeployer), 30394000000000000)
    })
  })

  describe("addToPeopleList", function () {
    beforeEach(async function () {
      let addPeople = await fundTransfer.addToPeopleList(['0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC'], { gasPrice: ethers.utils.parseUnits('10', 'gwei') })
      await addPeople.wait(1)
      // console.log(fundTransfer.peopleList.length)
    })
    it("peopleList length should be greater than 0", async function () {
      const l = await fundTransfer.getListLength()
      expect(l).to.be.gt(0)
    })


  })
})