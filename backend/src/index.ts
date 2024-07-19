import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { login } from "./Controller/Login/controller";
import { createAccount, updateAccount, getAllAccounts } from "./Controller/Account/controller";

const app = express();
const PORT = 8082;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Login API
app.post("/api/v1/login", (req: Request, res: Response) => {
  login(req, res);
});

// Accounts
app.post("/api/v1/createAccount", (req: Request, res: Response) => { //create
  createAccount(req, res);
});

app.put("/api/v1/updateAccount", (req: Request, res: Response) => { //update
  updateAccount(req, res);
});

app.get("/api/v1/getAllAccounts", (req: Request, res: Response) => {
  getAllAccounts(req, res);
});

app.listen(PORT, () => {
  console.log(`App is started at port ${PORT}`);
});
