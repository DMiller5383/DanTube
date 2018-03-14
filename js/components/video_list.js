import React, { Component } from 'react';
import Video from './video';
import _ from 'lodash';

export default class VideoList extends Component {

    componentWillMount(){
        this.props.fetchVideos(this.props.currentSearch);
    }

    componentDidMount() {
        let self = this;
        window.addEventListener('scroll', function(e){
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                self.props.updateFetchVideos(self.props.currentSearch);
            } 
        });
    }

    getVideoRowItems(videos, rowSize) {
        let rows = [];
        let videoRow = [];
        _.each(videos, function(video, key){
            let videoItem = <div className="col-3" key={key}><Video video={video} /></div>;
            if ((key + 1) % rowSize == 0) {
                videoRow.push(videoItem);
                rows.push(videoRow);
                videoRow = [];
            } else if (key+1 == videos.length ) {
                videoRow.push(videoItem);
                rows.push(videoRow);
            } else {
                videoRow.push(videoItem);
            }
        });
        return rows;
    }

    render() {
        let loadingIndicator = <div className="col-12"><p>Loading...</p></div>;
        if (this.props.videos.isFetching != true) {
            loadingIndicator = <div className="col-12"></div>;
        }         
        
        let videoRowItems = this.getVideoRowItems(this.props.videos.videoList, 3);
        let videoRows = videoRowItems.map((videoRowItem, index)=>{
            return (
                <div className="video-row" key={index} >
                    {videoRowItem}
                </div>
            )
        });

        return (
            <div>
                {videoRows}
                {loadingIndicator}
            </div>
        )
    }
}
