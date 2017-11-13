import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';

import { startSetFeatures } from './actions/actions';

const store = configureStore();

// console.log(store.dispatch(myAction()));

const loading = (
  <MuiThemeProvider>
    <RefreshIndicator
      size={80}
      loadingColor="#1E88E5"
      status="loading"
      style={{
        top: '40%',
        left: '40%',
        display: 'inline-block',
        position: 'fixed'
      }}
    />
  </MuiThemeProvider>
);

const jsx = (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(loading, document.getElementById('app'));

store.dispatch(startSetFeatures()).then(() => {
  console.log('DONE');
  ReactDOM.render(jsx, document.getElementById('app'));
});

// console.log(store.dispatch(myAction2()));
