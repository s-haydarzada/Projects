import {createStore}  from 'redux';
import RootReducers from './reducers';


const store = createStore(RootReducers);

export default store;