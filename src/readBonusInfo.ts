import {abi} from '../contract/contract';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const PK =process.env.WALLET_PRIVATE_KEY?process.env.WALLET_PRIVATE_KEY:"";
const contractAddress = process.env.CONTRACT_ADDRESS?process.env.CONTRACT_ADDRESS:"";

export async function readBonusInfo(sender: string, receiver: string, propertyNumber: string) {
    console.log("Reading BonusInfo from the contract ...")
    // Import Wallet
    const provider = new ethers.JsonRpcProvider(process.env.MUMBAI_RPC_URL);

    const wallet = new ethers.Wallet( PK , provider);

    // Read our ABI JSON file to create an ABIContract object
    const contract = new ethers.Contract(contractAddress, abi, wallet);
    
     // Call method
    // Call the updateBonusInfo function
    const tx = await contract.bonusInfo(
        sender, 
        receiver, 
        propertyNumber
        );

    //For update
    console.log('Result:',tx)
    return tx
  }