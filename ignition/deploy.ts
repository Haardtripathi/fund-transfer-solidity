import { network, ethers } from "hardhat"

import "dotenv/config"

async function main() {
    const FundTransferFactory = await ethers.getContractFactory("FundTransfer")
    console.log("Deploying contract...")

    const FundTransfer = await FundTransferFactory.deploy()
    console.log(`Contract deployed at ${FundTransfer.target}`)
    const currentBalanceofDeployer = await FundTransfer.getAddressBalance('0x618F3FE9CaC17eFA1034040f7b74D9D66d86D843')
    console.log(`Balance of deployer before funding : ${currentBalanceofDeployer}`)
    const currentAddress1Balance = await FundTransfer.getAddressBalance('0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC')
    console.log(`Balance of address1 before funding : ${currentAddress1Balance}`)

    console.log(`Adding funds to contract balance...\n`)
    const addFund = await FundTransfer.fund({ value: ethers.utils.parseEther("0.02"), gasPrice: ethers.utils.parseUnits('10', 'gwei') })
    await addFund.wait()

    console.log("Adding people to PeopleList...\n")
    const addPeople = await FundTransfer.addToPeopleList(['0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC'], { gasPrice: ethers.utils.parseUnits('10', 'gwei') })
    await addPeople.wait(1)



    const updatedBalanceofDeployer = await FundTransfer.getAddressBalance('0x618F3FE9CaC17eFA1034040f7b74D9D66d86D843')
    console.log(`Balance of deployer after funding : ${updatedBalanceofDeployer}\n`)

    const divideFunds = await FundTransfer.divideFund()
    await divideFunds.wait()

    let updatedAddress1Balance = await FundTransfer.getAddressBalance('0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC')
    console.log(`Balance of address1 after funding : ${updatedAddress1Balance}\n`)

}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })