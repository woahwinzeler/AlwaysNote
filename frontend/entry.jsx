import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, main);

    //functions added to the window for debugging 
    window.store = store; 
})