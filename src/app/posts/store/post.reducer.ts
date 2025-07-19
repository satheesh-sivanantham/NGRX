import { createReducer, on } from "@ngrx/store";
import { initialState, PostState } from "./post.state";
import { addPost } from "./post.action";


const _postReducer = createReducer(initialState, 
    on(addPost, (state, action) =>{

         let post = {...action.post};
         post.id = (state.post.length + 1).toString();
        return {
            ...state,
            post: [...state.post, post]
        }
    })
);


export function postReducer(state:PostState | undefined,action:any){
    return _postReducer(state,action);
}