import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

export const getPoststate = createFeatureSelector<PostState>('posts');

export const getPost = createSelector(getPoststate, state =>{
    return state.post
})