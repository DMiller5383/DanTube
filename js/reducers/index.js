import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import VideoLoadStateReducer from './reducer_video_load_state';

const rootReducer = combineReducers({
    videos: VideosReducer,
    videoLoadState: VideoLoadStateReducer
});

export default rootReducer;