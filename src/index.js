import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from './Article';
import CommentForm from './Comments';
import Post from './Post'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Article />
    <Post postDate="2020-04-08 20:00:00" />
    <Post postDate="2020-04-09 20:00:00" />    
    <CommentForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
