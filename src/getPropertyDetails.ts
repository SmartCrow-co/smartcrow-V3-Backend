import axios, { AxiosResponse } from 'axios';

const apiUrl = 'https://api.propmix.io/pubrec/assessor/v1/GetPropertyDetails';

export async function getPropertyDetails(
  accessToken:any, 
  streetAddress:string, 
  postalCode: number, 
  orderId:string) {
    console.log("Fetching data from Prpomix API ...")
        const headers = {
            'Access-Token': accessToken,
          };
          
          // Define query parameters
          const params = {
            OrderId: orderId,
            StreetAddress: streetAddress,
            PostalCode: postalCode,
          };
          
          try {
            // Make the API call using Axios
            const response: AxiosResponse = await axios.get(apiUrl, { headers, params });
        
            // Extract LastSaleDate and LastSalePrice from the API response
            const lastSaleDate: string = response.data.Data.Listing.LastSaleDate;
            const lastSalePrice: string = response.data.Data.Listing.LastSalePrice;
        
            // Return the extracted values
            return { lastSaleDate, lastSalePrice };
          } catch (error) {
            // Handle errors
            console.error('Error calling API:', error);
            throw error; // Rethrow the error for the calling code to handle
          }
}