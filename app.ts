// // /* eslint-disable no-console */


// Import required modules
import express, { Request, Response } from 'express';
import cors from 'cors';
import type { RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';
import { checkAndUpdate } from './src/checkAndUpdate';


// Load environment variables from .env file
import * as dotenv from 'dotenv';
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({ origin: '*' }));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// const limiter: RequestHandler = rateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   max: 25, // Max 5 requests per minute
// });

// app.use('/api', limiter);

// Define a route for your API
app.post('/api/update-contract', async (req: Request, res: Response) => {
  try {
    // Extract variables from the request body
    const requestbody = req.body;
    console.log(requestbody)
    const sender:string= requestbody.sender.toString();
    const receiver:string= requestbody.receiver.toString();
    const propertyNumber:string= requestbody.propertyNumber.toString();

    // Check and update using the provided variables
    const { meetSalesCondition, postDeadlineCheck } = await checkAndUpdate(sender, receiver, propertyNumber);

    // Send the response with the required values and status
    res.json({
      meetSalesCondition,
      postDeadlineCheck,
      status: 'Contract Updated',
    });
   
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export {app}

// getPropertyDetails(
//   process.env.PROPERTY_API_KEY, 
//   "3315 ALDRIDGE RD",
//   95688,
//   "3315-Aldridge-Road-VACAVILLE-CA-95688",
//   );

// readBonusInfo(
//   "0x0557ECA5D17918EeB2c8b68C050C290b2811021f",
//   "0xde21750cf3A76931bAAc0A91e75706e6B3bEa1c5",
//   abcd
// )

// updateContract(
//   "0x0557ECA5D17918EeB2c8b68C050C290b2811021f",
//   "0xde21750cf3A76931bAAc0A91e75706e6B3bEa1c5",
//   123456,
//   true,
//   true,
//   true
// )
