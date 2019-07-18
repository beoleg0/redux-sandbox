import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions';
import reducer from './reducer';


const store = createStore(reducer);
const {dispatch} = store;

const {dec, rnd, inc} = bindActionCreators(actions, dispatch);


const update = () => {
  ReactDOM.render(
    <Counter counter={store.getState()}
             inc={inc}
             dec={dec}
             rnd={() => {
               const value = Math.floor(Math.random() * 10);
               rnd(value);
             }}/>,
    document.getElementById('root'));
};

update();

store.subscribe(update);