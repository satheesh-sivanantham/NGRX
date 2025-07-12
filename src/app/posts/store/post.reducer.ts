import { createReducer } from "@ngrx/store";
import { initialState, PostState } from "./post.state";


const _postReducer = createReducer(initialState);


export function postReducer(state:PostState | undefined,action:any){
    return _postReducer(state,action);
}