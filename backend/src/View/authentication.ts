// import jwt from 'jsonwebtoken';
import Credential from "./credential";

class JWTPayload {
    user: Credential;

    constructor(user: Credential) {
        this.user = user;
    }
}

export default JWTPayload;