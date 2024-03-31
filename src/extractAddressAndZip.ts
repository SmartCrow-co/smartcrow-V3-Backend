export function extractAddressAndZip(input: string): [string,string, string] {
    // Regular expression pattern to match address and zip code
    const addressRegex = /(\d+\s+\w+\s+\w+).*?(\d{5})/;
    
    // Match the pattern in the input string
    const match = input.match(addressRegex);
    const formattedAddress = input.replace(/[\s,]+/g, '-');

    
    if (match) {
        const address = match[1]; // Extracted address
        const zipCode = match[2]; // Extracted zip code
        console.log([formattedAddress,address, zipCode]);
        return [formattedAddress,address, zipCode];
    } else {
        throw new Error("Invalid input format");
    }
}