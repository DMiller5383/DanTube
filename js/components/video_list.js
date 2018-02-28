import React, { Component } from 'react';
import Video from './video';
import _ from 'lodash';

export default class VideoList extends Component {

    componentWillMount(){
        let videos = this.props.fetchVideos();
    }

    render() {
        // if (_.isEmpty(this.props.videos)) {
        //     return(
        //         <div>Loading...</div>
        //     )
        // }
        if (this.props.videoLoadState == 'Loading') {
            return(
                <h1>{this.props.videoLoadState}</h1>
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
