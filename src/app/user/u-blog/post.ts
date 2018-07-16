export class Post{
    constructor(
        public header: string,
        public imgSrc: string,
        public text: string,
        public date?: string,
        public time?: string,
        
    ){}
}