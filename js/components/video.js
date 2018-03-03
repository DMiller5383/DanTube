import React from 'react';
export default (props) => {
    return (
        <div className="video">
            <p className="video__title">{props.video.title}</p>
            <img className="video__thumbnail" src={props.video.thumbnail} />
        </div>
    )
}