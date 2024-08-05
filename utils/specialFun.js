import { randomBytes } from 'node:crypto';

export const genUserId = ()=>{
    return randomBytes(16).toString('hex');
}

export const genVerificationCode = ()=>{
    return Math.floor(1000 + Math.random() * 900000)
}

