import React, { Component } from 'react';
import ShowSearch from './show_search';

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

    showOrHideSearchBox() {
        if(this.props.searchbox.isShowing == true) {
            this.props.showOrHideSearchBox(false);
        } else {
            this.props.showOrHideSearchBox(true);
        }
    }

    renderMobile() {
        let textBoxClass = 'searchbox__textbox hide';

        if(this.props.searchbox.isShowing) {
            textBoxClass = 'searchbox__textbox show';
        } else {
            textBoxClass = 'searchbox__textbox hide';
        }
        return(
            <div className="col-12">
                <div className="searchbox">
                    <div className="col-7">
                        <input type="text" className={textBoxClass} onKeyUp={this.setSearchText.bind(this)}/>
                    </div>
                    <div className="col-5">
                        <ShowSearch className="seachbox__mobile-show" onClick={this.showOrHideSearchBox.bind(this)} searchIsShowing={this.props.searchbox.isShowing}/>
                    </div>
                </div>
            </div>
                
        )
    }

    renderDesktop() {
        return(
            <div className="col-12">
                <div className="searchbox">
                    <input type="text" className="searchbox__textbox" onKeyUp={this.setSearchText.bind(this)}/>
                    <button className="searchbox__btn" onClick={this.onClick.bind(this)}>Search</button>
                    <ShowSearch className="seachbox__mobile-show" onClick={this.showOrHideSearchBox.bind(this)} searchIsShowing={this.props.searchbox.isShowing}/>
                </div>
            </div>
                
        )
    }

    render() {
        if(this.props.isMobile) {
            return(this.renderMobile());
        } else {
            return(this.renderDesktop());
        }
    }
}
