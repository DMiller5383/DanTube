import { FETCH_VIDEOS, RECEIVE_VIDEOS } from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case FETCH_VIDEOS:
            return action.payload;
        case RECEIVE_VIDEOS:
            return action.payload;
        default:
            return state;
    }
}