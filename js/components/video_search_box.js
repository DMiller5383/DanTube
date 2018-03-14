import React, { Component } from 'react';
import ShowSearch from './show_search';

export default class VideoSearchBox extends Component {
    onClick() {
        this.props.fetchVideos(this.props.currentSearch)
    }

    componentDidMount() {
        this._isMounted = true;
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
        let self = this;
        if(this.props.searchbox.isShowing == true) {
            this.props.showOrHideSearchBox(false);
        } else {
            this.props.showOrHideSearchBox(true);
            //searchbox can't focus when opened without this method.
            setTimeout(function() {
                self.searchbox.focus();
            }, 0);
        }
    }

    renderMobile() {
        let textBoxClass = 'searchbox searchbox--slideout';
        if(!this._isMounted) {
            textBoxClass='searchbox searchbox--hidden';
        } else if(this.props.searchbox.isShowing) {
            textBoxClass = 'searchbox searchbox--slidein';
        } else {
            textBoxClass = 'searchbox searchbox--slideout';
        }
        return(
                <div className={textBoxClass}>
                    <div className="col-11">
                        <input key="1" type="text" className='searchbox__textbox' ref={(searchbox)=>{this.searchbox = searchbox}}  onKeyUp={this.setSearchText.bind(this)} autoFocus="autofocus" />
                    </div>
                    <div className="col-1">
                        <ShowSearch className="seachbox__mobile-show" onClick={this.showOrHideSearchBox.bind(this)} searchIsShowing={this.props.searchbox.isShowing}/>
                    </div>
            </div>
                
        )
    }

    renderDesktop() {
        return(
            <div className="col-12">
                <div className="searchbox">
                    <input type="text" className="searchbox__textbox" onKeyUp={this.setSearchText.bind(this)} />
                    <button className="searchbox__btn" onClick={this.onClick.bind(this)}>Search</button>
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
