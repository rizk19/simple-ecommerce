import {combineReducers} from 'redux'
import data from './app'
import counter from './counter'

const rootReducer = combineReducers({
  data,
  counter
})

export default rootReducer