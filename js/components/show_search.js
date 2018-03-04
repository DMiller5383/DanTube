import React from 'react';

export default(props) => {

    let showSearchText = '';
    if(props.searchIsShowing) {
        showSearchText = (<i className="fas fa-times"></i>);
    } else {
        showSearchText = (<i className="fas fa-search"></i>);
    }
    
    return(<span className={props.className} onClick={props.onClick}>{showSearchText}</span>);
}