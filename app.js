"use strict";
// // /* eslint-disable no-console */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Import required modules
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const checkAndUpdate_1 = require("./src/checkAndUpdate");
// Load environment variables from .env file
const dotenv = __importStar(require("dotenv"));
dotenv.config();
// Create Express app
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT || 3000;
// Enable CORS for all routes
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Parse JSON bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded bodies
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 25, // Max 5 requests per minute
});
app.use('/api', limiter);
// Define a route for your API
app.post('/api/update-contract', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract variables from the request body
        const requestbody = req.body;
        console.log(requestbody);
        const sender = requestbody.sender.toString();
        const receiver = requestbody.receiver.toString();
        const propertyNumber = requestbody.propertyNumber.toString();
        // Check and update using the provided variables
        const { meetSalesCondition, postDeadlineCheck } = yield (0, checkAndUpdate_1.checkAndUpdate)(sender, receiver, propertyNumber);
        // Send the response with the required values and status
        res.json({
            meetSalesCondition,
            postDeadlineCheck,
            status: 'Contract Updated',
        });
    }
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
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
