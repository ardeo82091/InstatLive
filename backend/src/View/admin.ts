class Admin {
    firstName: string;
    lastName: string;
    userName: string;
    dob: Date;
    queries: string[];

    constructor(firstName: string, lastName: string, userName: string, dob: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.dob = dob;
        this.queries = [];
    }
}

export default Admin;