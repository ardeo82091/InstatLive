import Credential from "./credential";
import { v4 as uuid } from "uuid";

interface AccountInterface {
    firstName: string;
    lastName: string;
    credential: Credential;
    bio: string;
    dateOfBirth: string;
    isActive: boolean;
    blockedAccounts: any[];
    pics: any[];
    messages: any[];
}

class Account {
    static allAccount: Account[] = [];

    constructor(
        public firstName: string,
        public lastName: string,
        public credential: Credential,
        public bio: string,
        public dateOfBirth: string,
        public isActive: boolean,
        public blockedAccounts: any[] = [],
        public pics: any[] = [],
        public messages: any[] = []
    ) {}

    static createMyAccount(
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        bio: string,
        dateOfBirth: string
    ): [boolean, string] {
        const isActive: boolean = true;
        const [isCredentialsCreated, newCredential, message] = Credential.createCredential(userName, password);
        if (!isCredentialsCreated) {
            return [false, message];
        }
        const newAccount = new Account(firstName, lastName, newCredential, bio, dateOfBirth, isActive);
        Account.allAccount.push(newAccount);
        return [true, "Account Created Successfully"];
    }

    static getallAccount(): [boolean, Account[]] {
        return [true, this.allAccount];
    }

    static updateFirstName(indexOfUser: number, firstName: string): void {
        this.allAccount[indexOfUser].firstName = firstName;
    }

    static updateLastName(indexOfUser: number, lastName: string): void {
        this.allAccount[indexOfUser].lastName = lastName;
    }

    static updateUserName(indexOfUser: number, userName: string): [boolean, string] {
        const [isUserExist, newIndexOfUser] = Credential.isUserExist(userName);
        if (isUserExist) {
            return [false, "This Username already exists."];
        }
        this.allAccount[indexOfUser].credential.userName = userName;
        return [true, "Username updated successfully."];
    }

    static updatePassword(indexOfUser: number, password: string): void {
        this.allAccount[indexOfUser].credential.password = password;
    }

    static updateBio(indexOfUser: number, bio: string): void {
        this.allAccount[indexOfUser].bio = bio;
    }

    static updateDateOfBirth(indexOfUser: number, dateOfBirth: string): void {
        this.allAccount[indexOfUser].dateOfBirth = dateOfBirth;
    }

    static deActivateMyAccount(indexOfUser: number): void {
        this.allAccount[indexOfUser].isActive = false;
    }

    static activateMyAccount(indexOfUser: number): void {
        this.allAccount[indexOfUser].isActive = true;
    }

    static deleteMyAccount(indexOfUser: number): void {
        this.allAccount.splice(indexOfUser, 1);
        Credential.allCredentials.splice(indexOfUser, 1);
    }

    static updateAccount(userName: string, propertyToUpdate: string, value: any): [boolean, string] {
        const [isUserExist, indexOfUser] = Credential.isUserExist(userName);
        if (!isUserExist) {
            return [false, "User Not Exist"];
        }

        switch (propertyToUpdate) {
            case "firstName":
                this.updateFirstName(indexOfUser, value);
                return [true, "Updated Successfully"];

            case "lastName":
                this.updateLastName(indexOfUser, value);
                return [true, "Updated Successfully"];

            case "userName":
                const [isNewUserNameExist, message] = this.updateUserName(indexOfUser, value);
                return [isNewUserNameExist, message];

            case "password":
                this.updatePassword(indexOfUser, value);
                return [true, "Updated Successfully"];

            case "bio":
                this.updateBio(indexOfUser, value);
                return [true, "Updated Successfully"];

            case "dateOfBirth":
                this.updateDateOfBirth(indexOfUser, value);
                return [true, "Updated Successfully"];

            case "activateMyAccount":
                this.activateMyAccount(indexOfUser);
                return [true, "Updated Successfully"];

            case "deActivateMyAccount":
                this.deActivateMyAccount(indexOfUser);
                return [true, "Updated Successfully"];

            case "deleteMyAccount":
                this.deleteMyAccount(indexOfUser);
                return [true, "Updated Successfully"];

            default:
                return [false, "Not Updated"];
        }
    }
}

export default Account;
