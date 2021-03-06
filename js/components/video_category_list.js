import React, {Component} from 'react';

export default class VideoCategoryList extends Component{
    onClick(e) {
        let searchText = e.target.innerText;
        this.props.updateCurrentSearch(searchText);
        this.props.fetchVideos(searchText);
    }

    render() {
        let categoryListItems = this.props.categories.map((category, index)=>{
            return(<li className="video-categories-list__item" key={index} onClick={this.onClick.bind(this)}>{category}</li>)
        });
    
        return(
            <ul className="video-categories-list">{categoryListItems}</ul>
        )
    }
}