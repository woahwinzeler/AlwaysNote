import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    const preloadedState = {};

    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: {[window.currentUser.id]: window.currentUser}
        },
        session: {id: window.currentUser.id}
      }
      delete window.currentUser; 
      console.log(preloadedState)
    } 
    console.log(preloadedState)
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store} />, main);

    //functions added to the window for debugging 
    window.store = store; 
})