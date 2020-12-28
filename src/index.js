import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import movieListReducer from './store/reducers/movieListReducer';
import loginReducer from './store/reducers/loginReducer';
import watchListReducer from './store/reducers/watchListReducer'

const appReducer = combineReducers({
  searchResult: movieListReducer,
  loggedInInfo: loginReducer,
  watchList: watchListReducer
});

const store = createStore(appReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
