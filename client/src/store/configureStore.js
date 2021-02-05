import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducer'

const configureStore =()=>{
    const store =  createStore(combineReducers({
          user : usersReducer
   }),applyMiddleware(thunk))
   return store
}
export default configureStore
