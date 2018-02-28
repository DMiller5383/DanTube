import React from 'react';
export default (props) => {
    let url = `https://www.youtube.com/embed/${props.videoId}`;
    return <iframe width="560" height="315" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
}