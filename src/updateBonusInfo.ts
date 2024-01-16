import {abi} from '../contract/contract';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const PK =process.env.WALLET_PRIVATE_KEY?process.env.WALLET_PRIVATE_KEY:"";
const contractAddress = process.env.CONTRACT_ADDRESS?process.env.CONTRACT_ADDRESS:"";

export async function updateContract(sender: string, receiver: string, propertyNumber: string, meetSalesCondition: boolean, postDeadlineCheck: boolean) {
    console.log("Updating the Contract BonusInfo ...")
    // Import Wallet
    const provider = new ethers.AlchemyProvider("maticmum",process.env.MUMBAI_API_KEY);
    const wallet = new ethers.Wallet( PK , provider);

    // Read our ABI JSON file to create an ABIContract object
    const contract = new ethers.Contract(contractAddress, abi, wallet);
    
    // Call method
    // Call the updateBonusInfo function
    const tx = await contract.updateBonusInfo(
        sender, 
        receiver, 
        propertyNumber, 
        meetSalesCondition, 
        postDeadlineCheck
        );
    const receipt = await tx.wait();

    //For update
    console.log('Transaction Hash:', tx.hash);
    console.log('Receipt:', receipt);

  }