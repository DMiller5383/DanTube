import React from 'react';

export default (props) => {
    let categoryListItems = props.categories.map((category, index)=>{
        return(<li id={index}>{category}</li>)
    });

    return(
        <ul>{categoryListItems}</ul>
    )
}