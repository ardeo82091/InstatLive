class Messages {
    userName: string;
    addMessage: string[];

    constructor(userName: string) {
        this.userName = userName;
        this.addMessage = [];
    }
}


export default Messages;