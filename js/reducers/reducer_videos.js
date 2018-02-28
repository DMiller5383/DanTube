import { FETCH_VIDEOS, RECEIVE_VIDEOS } from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case FETCH_VIDEOS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_VIDEOS:
            return Object.assign({}, state, {
                videoList: action.payload,
                isFetching: false
            });
        default:
            return state;
    }
}