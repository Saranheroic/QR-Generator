# QR Code Generator

This is a simple QR code generator built using Node.js. It uses the `inquirer` package to get input from the user and the `qr-image` package to generate the QR code as a PNG file.

## Features

- Command-line interface (CLI) to input data.
- Generates a QR code from the input string.
- Saves the QR code as a PNG file.

## Installation

To use this project, clone the repository and install the required dependencies.

```bash
# Clone the repository
https://github.com/Saranheroic/QR-Generator.git

# Navigate into the directory
cd qrGenerator

# Install dependencies
npm install inquirer qr-image

---Usage---
1.Run the script
node index.js

2.Enter the URL or text:
? Enter the text or URL to generate a QR code: https://example.com

The QR code will be generated and saved as qr_code.png in the current directory.
