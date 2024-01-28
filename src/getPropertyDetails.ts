import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

export async function getPropertyDetails(address: string) {
  console.log("Fetching Property details from rentcast ...")
  const url = `https://api.rentcast.io/v1/properties?address=${encodeURIComponent(address)}`;
  const headers = { accept: 'application/json', 'X-Api-Key': process.env.PROPERTY_API_KEY };

  try {
    const response = await axios.get(url, { headers });
    const json = response.data[0];

    if (json) {
      const lastSaleDate = json.lastSaleDate;
      const lastSalePrice = json.lastSalePrice;
      return { lastSaleDate, lastSalePrice };
    } else {
      throw new Error('No property found for the given ID');
    }
  } catch (error:any) {
    throw new Error('Error fetching property information: ' + error.message);
  }
}