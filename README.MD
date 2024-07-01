# OTP Validation API

This project is an OTP (One Time Password) validation API built with Node.js. It handles OTP generation, validation, and expiration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/node-otp.git
    ```
2. Change into the project directory:
    ```sh
    cd node-otp
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will start on the port specified in the `.env` file or default to port `5000`.

## Endpoints

### Generate OTP

- **URL:** `/api/v1/generate`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com"
  }

### Validate OTP

- **URL:** `/api/v1/validate`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "code" : 12345
  }

### Configuration

To configure the email service using Nodemailer, update the `node-OTP\utils\nodemailerConfig.js` file with your Ethereal email credentials. You will need to set the following environment variables:

1. Create a `.env` file in the root directory if it doesn't exist.

2. Add the following environment variables to the `.env` file:
    ```env
    ETHEREAL_EMAIL=your-ethereal-email@example.com
    ETHEREAL_PASSWORD=your-ethereal-password
    ```

3. Ensure your `node-OTP\utils\nodemailerConfig.js` file uses these variables:
    ```javascript

    export default {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.ETHEREAL_EMAIL,
      pass: process.env.ETHEREAL_PASSWORD,
    }
    }
    ```


### Environment Variables

- **ACCOUNTSID** = <TWILIO_ACCOUNTSID>
- **AUTHTOKEN** = <TWILIO_AUTHTOKEN>


