import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';
import TweetService from './service/tweet';

const baseURL= process.env.REACT_APP_BASE_URL;
const tweetService = new TweetService(baseURL);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App tweetService = {tweetService}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);