#NGRX NOTES 
1. Props in selector 
 - We can send payload in the selector 
 - Real time sample -> if we edit value and we need to pass that state or id to the store to do the update action 
 - Example 
    *In the component 
        - this.store.select(selectorName, {id}),subscribe(data => {
            this.data = data 
        })
    *In the selector store 
        - export const getPostById = createSelector(getState, (state,props) => {
            return state.post[props.id]
        })

2. lazy load in NGRX
 - Based on module we can load the ngrx 
 - To achive this we have to write the code in the imports of the module 
 - Example 
    *StoreModule.forFuture('counter', counterruducer)

# Norx Effects Library

    - Library manages side effects to keep components clean.

    - Side effects means calling to the external state like API.

    - Using HTTP to get data from backend server is nothing but a side effect

    - Having this logic in the components we can manage this code in the ngrx effects architecture
----------------------------------------------------------------------------------------------------------------
    - We cannot call the http and the store in the components as we want to keep them clean.

    - We cannot also call the http in the reducer as the reducer functions are pure functions

    - We cannot inject the postsservice into the reducers as they are pure.

    - So the best place to manage these side effects are the ngrx effects

# What Ngrx Effects Does?

    - Effects takes the action, does some work and again dispatches new action.

    - This could be success or the fail action.

    - Lets see the ngrx diagram with side effects taking into consideration
    
# NGRX basic code syntax 
    @Injectable()
    export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    login$ = createEffect(() => {
    return this.actions$.pipe(
    ofType(loginStart) ,
    exhaustMa $his: this => {
    return this.authService.login(action.email, action.password) .pipe(
    map((data) => {
    [ return loginSuccess()];
    })
    )3
    })
