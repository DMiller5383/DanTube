import React, { Component } from 'react';
import Video from './video';
import _ from 'lodash';

export default class VideoList extends Component {

    componentWillMount(){
        this.props.fetchVideos(this.props.currentSearch);
    }

    getVideoRowItems(videos, rowSize) {
        let rows = [];
        let videoRow = [];
        _.each(videos, function(video, key){
            console.log(video);
            let videoItem = <div className="col-3"><Video video={video} /></div>;
            if (key % rowSize == 0) {
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
        if (this.props.videos.isFetching == true) {
            return(
                <h1>Loading...</h1>
            )
        }
        let videoRowItems = this.getVideoRowItems(this.props.videos.videoList, 3);
        let videoRows = videoRowItems.map((videoRowItem, index)=>{
            return (
                <div className="row">
                    {videoRowItem}
                </div>
            )
        });

        return (
            <div>{videoRows}</div>
        )
    }
}
