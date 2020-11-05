import { createStore, applyMiddleware} from 'redux'
import {rootReducer} from '../redux/reducers/rootreducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))) 
