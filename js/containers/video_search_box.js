import { connect } from 'react-redux';
import { updateCurrentSearch, fetchVideos, showOrHideSearchBox } from '../actions';
import VideoSearchBox from '../components/video_search_box';

function mapStateToProps(state) {
    return { 
        currentSearch: state.currentSearch,
        searchbox: state.searchbox
    }
}

export default connect(mapStateToProps, {updateCurrentSearch, fetchVideos, showOrHideSearchBox})(VideoSearchBox)