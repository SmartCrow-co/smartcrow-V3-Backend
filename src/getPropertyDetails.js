"use strict";
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
exports.getPropertyDetails = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const API_KEY = process.env.PROPERTY_API_KEY;
function getPropertyDetails(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.rentcast.io/v1/properties?address=${encodeURIComponent(address)}`;
        console.log("API KEY", API_KEY);
        const headers = { accept: 'application/json', 'X-Api-Key': API_KEY };
        try {
            const response = yield axios_1.default.get(url, { headers });
            console.log("RESPONSE >>>>>>>>>>>>..", response);
            const json = response.data[0];
            if (json) {
                const lastSaleDate = json.lastSaleDate;
                const lastSalePrice = json.lastSalePrice;
                console.log(lastSaleDate, lastSalePrice);
                return { lastSaleDate, lastSalePrice };
            }
            else {
                throw new Error('No property found for the given ID');
            }
        }
        catch (error) {
            throw new Error('Error fetching property information: ' + error.message);
        }
    });
}
exports.getPropertyDetails = getPropertyDetails;
