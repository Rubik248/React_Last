import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import dataReducer from './dataReducer';


export const store = createStore(dataReducer, applyMiddleware(thunk));