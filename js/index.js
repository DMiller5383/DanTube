import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoSearchBox from './containers/video_search_box';
import Video from './components/video';
import VideoList from './containers/video_list'; 
import AppTitle from './components/app_title';
import VideoCategoryList from './containers/video_category_list';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {logger, ytMiddleware} from './middleware';
import {isMobile} from 'react-device-detect';
import { BrowserRouter as Router, Route, Link } from "react-router";

let categories = ['funny', 'movies', 'news'];
const createStoreWithMiddleware = applyMiddleware(promise, ytMiddleware)(createStore);
let videos = [];
const initialState = { videos: {videoList: [], isFetching: true, pageToken: ''}, currentSearch: '', searchbox: {isShowing: false} };

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, initialState)}>
    <div>
        <div className="row">
            <div className="col-4">
                <AppTitle appTitle="DanTube" />
            </div>
            <div className="col-8">
                <VideoSearchBox isMobile={isMobile}/>
            </div>
        </div>
        <VideoCategoryList categories={categories} />
        <VideoList videos={videos} />
    </div>
    </Provider>,
    document.getElementById('app')
);

