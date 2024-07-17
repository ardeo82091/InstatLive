import PicComments from "./picComments";

class Pics {
    photos: string[];
    likescount: number;
    picComments: PicComments[];

    constructor(photos: string[], likescount: number) {
        this.photos = photos;
        this.likescount = likescount;
        this.picComments = [];
    }
}

export default Pics;