import React, { Component } from 'react';
import Video from './video';


export default class VideoList extends Component {

    componentWillMount(){
        let videos = this.props.fetchVideos();
        console.log(videos);

    }

    render() {
        let videoItems = this.props.videos.map((videoId, index)=>{
            return (
                <div class="row">
                    <Video videoId={videoId} />
                </div>
            )
        });

        return (
            <div>{videoItems}</div>
        )
    }
}
