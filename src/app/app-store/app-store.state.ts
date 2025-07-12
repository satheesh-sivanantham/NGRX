import { counterReducer } from "../counter-module/store/counter.reducer";
import { CounterState } from "../counter-module/store/counter.state";
import { postReducer } from "../posts/store/post.reducer";
import { PostState } from "../posts/store/post.state";

export interface appState{
    counter:CounterState,
    posts:PostState
}

export const appReducer = {
    counter:counterReducer,
    posts:postReducer
}