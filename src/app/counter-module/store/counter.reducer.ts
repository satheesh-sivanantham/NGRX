import { createReducer, on } from "@ngrx/store";
import { changeProjectName, customIncrement, decrement, increment, reset } from "./counter.actions";
import {CounterState, initialState} from './counter.state'

const _counterReducer = createReducer(
    initialState,
     on(increment, (state) => {
        return {
            ...state,
            counter:state.counter + 1
        }
}),
on(decrement, (state) =>{
    return{
        ...state,
        counter:state.counter - 1
    }
}),
on(reset, (state) =>{
    return{
        ...state,
        counter:0
    }
}),
on(customIncrement, (state,action) =>{
    return{
        ...state,
        counter:action.value + state.counter
    }
}),
on(changeProjectName, (state) => {
    return{
        ...state,
        projectName: 'Advanced counter method'
    }
})
)


export function counterReducer(state:CounterState | undefined, action:any){
    return _counterReducer(state, action);
}