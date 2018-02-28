import { connect } from 'react-redux';
import { fetchVideos, updateCurrentSearch } from '../actions';
import VideoCategoryList from '../components/video_category_list';

function mapStateToProps(state) {
    return { 
        currentSearch: state.currentSearch
    }
}

export default connect(mapStateToProps, {updateCurrentSearch, fetchVideos})(VideoCategoryList)