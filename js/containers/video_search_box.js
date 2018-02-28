import { connect } from 'react-redux';
import { updateCurrentSearch, fetchVideos } from '../actions';
import VideoSearchBox from '../components/video_search_box';

function mapStateToProps(state) {
    return { 
        currentSearch: state.currentSearch
    }
}

export default connect(mapStateToProps, {updateCurrentSearch, fetchVideos})(VideoSearchBox)