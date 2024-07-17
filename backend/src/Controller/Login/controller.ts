import { Request, Response } from "express";
import Credential from "../../View/credential";

function login(req: Request, resp: Response): void {
  const { userName, password } = req.body;
  const [isCorrectPassword, message] = Credential.isPasswordCorrect(
    userName,
    password
  );

  if (!isCorrectPassword) {
    resp.status(200).send(message);
    return;
  }

  resp.status(200).send(message);
}

export { login };
