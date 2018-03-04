import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import CurrentSearchReducer from './reducer_current_search';
import SearchBoxReducer from './reducer_search_box';

const rootReducer = combineReducers({
    videos: VideosReducer,
    currentSearch: CurrentSearchReducer,
    searchbox: SearchBoxReducer

});

export default rootReducer;