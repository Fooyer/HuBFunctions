import { verify } from "jsonwebtoken";

export async function authorizated(token) {
    const decoded = verify(token, process.env.JWT_SECRET);
    
    return decoded;
}