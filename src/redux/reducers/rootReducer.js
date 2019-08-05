import { combineReducers } from 'redux'
import { cientistasReducer } from './cientistas'
import { counterReducer } from './counter'

const rootReducer = combineReducers({
  cientistas: cientistasReducer,
  counter: counterReducer
})

export default rootReducer;