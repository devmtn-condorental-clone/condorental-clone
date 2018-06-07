import { createStore, applyMiddleware } from 'redux'
import PromiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(PromiseMiddleware()))