import Account from "../../View/account";
import { Request, Response } from "express";

function createAccount(req: Request, resp: Response): void {
    const { firstName, lastName, userName, password, bio, dateOfBirth } = req.body;
    const [isAccountCreated, message] = Account.createMyAccount(firstName, lastName, userName, password, bio, dateOfBirth);
    if (!isAccountCreated) {
        resp.status(200).send(message);
        return;
    }
    resp.status(200).send(message);
}

function getAllAccounts(req: Request, resp: Response): void {
    const [isAccount, allAccount] = Account.getallAccount();
    resp.status(200).send(allAccount);
}

function updateAccount(req: Request, resp: Response): void {
    const { userName, propertyToUpdate, value } = req.body;
    const [isUpdated, message] = Account.updateAccount(userName, propertyToUpdate, value);
    if (!isUpdated) {
        resp.status(200).send(message);
        return;
    }
    resp.status(200).send(message);
}

export { createAccount, getAllAccounts, updateAccount };
