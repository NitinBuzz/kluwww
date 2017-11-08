import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';

import { startSetFeatures } from './actions/actions';

const store = configureStore();

// console.log(store.dispatch(myAction()));

const jsx = (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

store.dispatch(startSetFeatures()).then(() => {
  console.log('DONE');
  ReactDOM.render(jsx, document.getElementById('app'));
});

// console.log(store.dispatch(myAction2()));
