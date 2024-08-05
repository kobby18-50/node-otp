import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const mailConfig = {
    host:  process.env.ETHEREAL_HOST,
    port:  process.env.ETHEREAL_PORT,
    auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASSWORD,
    }
}

export default mailConfig