class AddMessage {
    replyMessage: string;
    isMessage: boolean;

    constructor(replyMessage: string) {
        this.replyMessage = replyMessage;
        this.isMessage = false;
    }
}

export default AddMessage;