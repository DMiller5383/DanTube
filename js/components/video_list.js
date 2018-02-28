import React, { Component } from 'react';
import Video from './video';
import _ from 'lodash';

export default class VideoList extends Component {

    componentWillMount(){
        this.props.fetchVideos(this.props.currentSearch);
    }

    render() {
        if (this.props.videos.isFetching == true) {
            return(
                <h1>Loading...</h1>
            )
        }
        let videoItems = this.props.videos.videoList.map((videoId, index)=>{
            return (
                <div className="row" key={index}>
                    <Video videoId={videoId} />
                </div>
            )
        });

        return (
            <div>{videoItems}</div>
        )
    }
}
