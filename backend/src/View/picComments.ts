class PicComments {
    userName: string;
    commentStatement: string;
    commentReplies: string[];

    constructor(userName: string, commentStatement: string) {
        this.userName = userName;
        this.commentStatement = commentStatement;
        this.commentReplies = [];
    }
}

export default PicComments
