import { createAction, props } from "@ngrx/store";
import { Post } from "../model/post.model";



export const ADD_POST_ACTION = '[Post Page] add post';

export const addPost = createAction(ADD_POST_ACTION, props<{post:Post}>());