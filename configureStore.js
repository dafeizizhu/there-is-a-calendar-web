import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerReducer } from 'react-router-redux'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

export default function configureStore(rootReducer, initialState) {
  return createStoreWithMiddleware(combineReducers({
    root: rootReducer,
    routing: routerReducer
  }), initialState)
}
