import React from 'react';
export default (props) => {
    let url = `https://www.youtube.com/embed/${props.videoId}`;
    console.log(url);
    return <iframe width="560" height="315" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}