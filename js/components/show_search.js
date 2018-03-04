import React from 'react';

export default(props) => {

    let showSearchText = '';
    if(props.searchIsShowing) {
        showSearchText = (<i class="fas fa-search"></i>);
    } else {
        showSearchText = (<i class="fas fa-search"></i>);
    }
    
    return(<span className={props.className} onClick={props.onClick}>{showSearchText}</span>);
}