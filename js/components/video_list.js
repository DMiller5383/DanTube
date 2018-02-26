import React from 'react';
import Video from './video';

export default(props) => {
    let videoItems = props.videos.map((videoId, index)=>{
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