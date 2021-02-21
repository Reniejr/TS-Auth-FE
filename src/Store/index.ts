import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

//IMPORT REDUCERS
import { userReducer } from './users/reducers'

//IMPORT ACTIONS
import { UsersActions } from './users/actions'

//REDUX TOOLS
declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//MAIN REDUCER
const rootReducer = combineReducers({
    users: userReducer    
})

//ALL ACTIONS
type AllActions = UsersActions

//EXPORT MAIN STATE
export type MainState = ReturnType<typeof rootReducer>

//EXPORT STORE
export const reduxStore = createStore(rootReducer, composedEnhancers(applyMiddleware(thunk as ThunkMiddleware<MainState, AllActions>)))