"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAddressAndZip = void 0;
function extractAddressAndZip(input) {
    // Regular expression pattern to match address and zip code
    const addressRegex = /(\d+\s+\w+\s+\w+).*?(\d{5})/;
    // Match the pattern in the input string
    const match = input.match(addressRegex);
    const formattedAddress = input.replace(/[\s,]+/g, '-');
    if (match) {
        const address = match[1]; // Extracted address
        const zipCode = match[2]; // Extracted zip code
        console.log([formattedAddress, address, zipCode]);
        return [formattedAddress, address, zipCode];
    }
    else {
        throw new Error("Invalid input format");
    }
}
exports.extractAddressAndZip = extractAddressAndZip;
