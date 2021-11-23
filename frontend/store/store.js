import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import root_reducer from '../reducers/root_reducer'


const configureStore = (preloadedState={}) => createStore(root_reducer, preloadedState, applyMiddleware(thunk, logger))

export default configureStore; 
