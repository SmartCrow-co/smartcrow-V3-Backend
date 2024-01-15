import { getPropertyDetails } from "./getPropertyDetails";

export async function checkSalesConditions(stringArray: string[], propertyNumber:string, apiKey:any, streetAddress:string, postalCode:number){
    console.log("Checking Sales Conditions ...")
    // Store sales details from agreement
    const expectedSalesPrice:number = parseInt(stringArray[7],10);
    const startDate:number = parseInt(stringArray[3]);
    const endDate:number = parseInt(stringArray[4]);

    // Get sales data from API
    const {lastSaleDate, lastSalePrice } = await getPropertyDetails(apiKey, streetAddress, postalCode, propertyNumber)

    // 1. Check if property is sold
    if (lastSaleDate && lastSalePrice) {
        // 2. Check if property is sold within start and end time.
        const dateObject = new Date(lastSaleDate);
        const timestamp: number = Math.floor(dateObject.getTime() / 1000);
        console.log("start date, timestamp, end date",startDate, timestamp, endDate)
        if (startDate < timestamp && timestamp <= endDate){
            
            // 3. Check if agreement has expectedSalesPrice
            const hasExpectedSalesPrice: boolean = stringArray[7] === "true" ? true : false;
            if(hasExpectedSalesPrice){
                // 4. Check if sales price has been met
                console.log("Last sales price, Expected sales price", lastSalePrice,expectedSalesPrice)
                if(parseInt(lastSalePrice) >= expectedSalesPrice){
                    // Meets sales price
                    return {condition:true,reason: "Meets sales price, deadline and all criterias"}
                }else{
                    // Doesn't meet sales price
                    return {condition:false,reason: "Doesn't meet sales price"}         
                }
            }else {
                // Meets condition without expected sales price
                return {condition:true,reason: "Meets condition without expected sales price"}
            }      
        }else {
            // Didn't perform sales within timeframe
            return {condition:false,reason: "Didn't perform sales within timeframe"}
        }
      } else {
        // No latest sales data available
        return {condition:false,reason: "No latest sales data available"}
      }
    // Check Sales time within agreement's start or end date
    

 
   
}