const {ethers,run,network}=require("hardhat")
require("dotenv").config()

async function main(){

    const FundTransferFactory=await ethers.getContractFactory("FundTransfer")
    console.log("Deploying contract...")
    const FundTransfer=await FundTransferFactory.deploy()
    console.log(`Contract deployed by ${FundTransfer.target}`)
    const currentBalanceofDeployer=await getBalance('0x618F3FE9CaC17eFA1034040f7b74D9D66d86D843')
    console.log(`Balance of deployer before funding : ${currentBalanceofDeployer}`)
    const currentAddress1Balance=await getBalance('0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC')
    const currentAddress2Balance=await getBalance('0xC1E6e8443A90524BeB43986a72C40609F0CB535F')
    console.log(`Balance of address1 before funding : ${currentAddress1Balance}`)
    console.log(`Balance of address2 before funding : ${currentAddress2Balance}\n`)


    console.log(`Adding funds to contract balance...\n`)
    const addFund=await FundTransfer.fund({value:ethers.parseEther("0.02")})
    await addFund.wait()
    const currentContractBalance=await FundTransfer.currentBalance()
    console.log(`Current contract balance:${currentContractBalance}`)

    console.log("Adding people to PeopleList...\n")
    const addPeople=await FundTransfer.addToPeopleList(['0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC','0xC1E6e8443A90524BeB43986a72C40609F0CB535F'],{ gasPrice: ethers.parseUnits('10', 'gwei') })
    await addPeople.wait(1)

    

    const updatedBalanceofDeployer=await getBalance('0x618F3FE9CaC17eFA1034040f7b74D9D66d86D843')
    console.log(`Balance of deployer after funding : ${updatedBalanceofDeployer}\n`)

    const divideFunds=await FundTransfer.divideFund()
    await divideFunds.wait()

    updatedAddress1Balance=await getBalance('0x73dbF569a3f1c69f452749ca2EC28D1b1Da3b1aC')
    updatedAddress2Balance=await getBalance('0xC1E6e8443A90524BeB43986a72C40609F0CB535F')
    console.log(`Balance of address1 after funding : ${updatedAddress1Balance}\n`)
    console.log(`Balance of address2 after funding : ${updatedAddress2Balance}\n`)

    

    // const divideFunds=await 

}

async function getBalance(address) {
    const provider = ethers.provider;
    const balance = await provider.getBalance(address);
    return balance
}


main()
.then(()=>{
  process.exit(0);
})
.catch((error)=>{
  console.log(error);
  process.exit(1);
})