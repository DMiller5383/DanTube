import {SHOW_OR_HIDE_SEARCHBOX} from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case SHOW_OR_HIDE_SEARCHBOX:
            return Object.assign({}, state, {
                isShowing: action.payload
            });
        default:
            return state;
    }
}