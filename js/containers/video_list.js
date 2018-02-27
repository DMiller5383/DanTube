import { connect } from 'react-redux';
import { fetchVideos } from '../actions';
import VideoList from '../components/video_list';

function mapStateToProps(state) {
    return { videos: state.videos}
}

export default connect(mapStateToProps, {fetchVideos})(VideoList)