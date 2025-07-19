export interface Post{
    id?:string;
    title:string;
    description:string;
}


export class PostDetail {
    constructor(
        public title:string,
        public description:string,
        public id?:string,
    ){ }
}
