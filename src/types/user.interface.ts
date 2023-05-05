import { Document } from "mongoose";

export interface User {
    email: string;
    username: string;
    password: string;
    createdAt: Date;
}

// any object that is of type UserDocument
// must have all the properties and methods
// defined in the User and Document interfaces,
// as well as the validatePassword method.

export interface UserDocument extends User, Document {
    validatePassword(param1: string): Promise<boolean>;
}
