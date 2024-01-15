import { checkDeadline } from "./checkDeadline";
import { checkSalesConditions } from "./checkSalesConditions";
import { readBonusInfo } from "./readBonusInfo";
import { updateContract } from "./updateBonusInfo";
export async function checkAndUpdate(
    sender:string,
    receiver:string, 
    propertyNumber:string, 
    ){
    try {
        console.log("Running Check and Update ...")
        const myArray = await readBonusInfo(sender, receiver, propertyNumber)
        const stringArray = myArray.map((value: any) => String(value));
        
        // // Check to update propertySold and meetSalesCondition
        const meetSalesCondition = await checkSalesConditions(stringArray,propertyNumber);
        console.log("Meet Sales Condition",meetSalesCondition)
        // // Check to update postDeadlineCheck
        const endDate = parseInt(stringArray[4],10);
        const postDeadlineCheck = await checkDeadline(endDate);
    
        // // Update Final Values
        if(meetSalesCondition.condition){
            await updateContract(sender, receiver, propertyNumber, true, postDeadlineCheck);
        }
        else{
            await updateContract(sender, receiver, propertyNumber, false, postDeadlineCheck);
        }
        return {meetSalesCondition,postDeadlineCheck}
    } catch (error:any) {
        throw new Error('Error fetching property information: ' + error.message);
    }
}