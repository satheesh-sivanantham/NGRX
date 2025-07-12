import { Post } from "../model/post.model";

export interface PostState {
    post:Post[];
}

export const initialState:PostState ={
    post:[ {id:'1',title:'title 1', description:'description 1'},
        {id:'2',title:'title 2', description:'description 2'}
    ]
}