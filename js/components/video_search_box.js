import React, { Component } from 'react';
import ShowSearch from './show_search';
import {CSSTransitionGroup} from 'react-transition-group';

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
            this.searchbox.focus();
        }
    }

    renderMobile() {
        let textBoxClass = 'searchbox searchbox--slideout';
        if(this.props.searchbox.isShowing) {
            textBoxClass = 'searchbox searchbox--slidein';
        } else {
            textBoxClass = 'searchbox searchbox--slideout';
        }
        return(
                <div className={textBoxClass}>
                    <div className="col-10">
                        <input key="1" type="text" className='searchbox__textbox' ref={(searchbox)=>{this.searchbox = searchbox}}  onKeyUp={this.setSearchText.bind(this)}/>
                    </div>
                    <div className="col-2">
                        <ShowSearch className="seachbox__mobile-show" onClick={this.showOrHideSearchBox.bind(this)} searchIsShowing={this.props.searchbox.isShowing}/>
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
