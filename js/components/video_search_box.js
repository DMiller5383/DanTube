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
            <div class="col-12">
                <div className="searchbox">
                    <input type="text" className="searchbox__textbox" onKeyUp={this.setSearchText.bind(this)}/>
                    <button className="searchbox__btn" onClick={this.onClick.bind(this)}>Search</button>
                </div>
            </div>
                
        )
    }
}
