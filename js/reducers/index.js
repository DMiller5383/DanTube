import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';

const rootReducer = combineReducers({
    videos: VideosReducer
});

export default rootReducer;