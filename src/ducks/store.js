import { createStore, applyMiddleware } from 'redux'
import PromiseMiddleware from 'redux-promise-middleware'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './reducer'

export default createStore(reducer,devToolsEnhancer(), applyMiddleware(PromiseMiddleware()))