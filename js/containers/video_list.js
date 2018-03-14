import { connect } from 'react-redux';
import { fetchVideos, receiveVideos, updateFetchVideos } from '../actions';
import VideoList from '../components/video_list';

function mapStateToProps(state) {
    return { 
        videos: state.videos,
        currentSearch: state.currentSearch
    
    }
}

export default connect(mapStateToProps, {fetchVideos, updateFetchVideos})(VideoList)