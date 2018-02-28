import React, { Component } from 'react';

export default class VideoSearchBox extends Component {
    onClick() {
        this.props.fetchVideos(this.props.currentSearch)
    }

    setSearchText(e) {
        if(e.keyCode == 13) {
            this.props.fetchVideos(this.props.currentSearch);
            return;
        }
        let currentSearch = e.target.value;
        this.props.updateCurrentSearch(currentSearch);
    }

    render() {
        return(
            <div>
                <input type="text" onKeyUp={this.setSearchText.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Search</button>
            </div>
                
        )
    }
}
