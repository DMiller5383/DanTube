import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class VideoSearchBox extends Component {



    render() {
        return(
            <div>
                <input type="text" onKeyUp={this.props.onKeyUpFunc} />
                <button>Search</button>
            </div>
                
        )
    }
}
