import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoSearchBox from './components/video_search_box';
import YouTube from 'youtube-node';
import Video from './components/video';
import VideoList from './components/video_list'; 
import VideoCategoryList from './components/video_category_list';

//let youTube = new YouTube(); 
//youTube.setKey('AIzaSyBhiCYZwT2PW7kZ_LUDGv4cyFm4K7zegDI'); 
let videos = ['T5ahmzySUB8', 'qdOzsNnAsFk', 'FHCy6wOJh48'];
let searchOnKeyUpFunc = function() {
    console.log('Key has been pressed');
}

let categories = ['funny', 'movies', 'news'];

ReactDOM.render(
    <div>
        <VideoSearchBox onKeyUpFunc={searchOnKeyUpFunc}/>
        <VideoCategoryList categories={categories} />
        <VideoList videos={videos} />
    </div>,
    document.getElementById('app')
);