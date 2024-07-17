import Account from "./account";

class Credential {
  static allCredentials: Credential[] = [];
  userName: string;
  password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }

  static isUserExist(userName: string): [boolean, number] {
    if (Credential.allCredentials.length === 0) return [false, -1];
    
    for (let index = 0; index < Credential.allCredentials.length; index++) {
      if (userName === Credential.allCredentials[index].userName) {
        return [true, index];
      }
    }
    
    return [false, -1];
  }

  static isPasswordCorrect(userName: string, password: string): [boolean, string] {
    const [isUserExist, indexOfUser] = this.isUserExist(userName);

    if (!isUserExist) {
      return [false, "Invalid UserName"];
    }

    if (Credential.allCredentials[indexOfUser].password !== password) {
      return [false, "Please enter correct Password"];
    }

    return [true, "Login Successfully"];
  }

  static createCredential(userName: string, password: string): [boolean, Credential, string] {
    const [isUserExist, indexOfUser] = this.isUserExist(userName);

    if (isUserExist) {
      return [false, Account.allAccount[indexOfUser].credential , "UserName Already Exist"];
    }

    const newCredential = new Credential(userName, password);
    Credential.allCredentials.push(newCredential);

    return [true, newCredential, "Credential Created Successfully"];
  }
}

export default Credential;
