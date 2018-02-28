import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoSearchBox from './components/video_search_box';
import Video from './components/video';
import VideoList from './containers/video_list'; 
import VideoCategoryList from './components/video_category_list';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {logger, ytMiddleware} from './middleware';

let categories = ['funny', 'movies', 'news'];
const createStoreWithMiddleware = applyMiddleware(promise, ytMiddleware, logger)(createStore);
let videos = [];

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
        <VideoSearchBox />
        <VideoCategoryList categories={categories} />
        <VideoList videos={videos} />
    </div>
    </Provider>,
    document.getElementById('app')
);