import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import CurrentSearchReducer from './reducer_current_search';

const rootReducer = combineReducers({
    videos: VideosReducer,
    currentSearch: CurrentSearchReducer
});

export default rootReducer;