import { UPDATE_CURRENT_SEARCH } from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case UPDATE_CURRENT_SEARCH:
            return action.payload;
        default:
            return state;
    }
}