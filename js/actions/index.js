import YouTube from 'youtube-node';

export const FETCH_VIDEOS = 'fetch_videos';
export const RECEIVE_VIDEOS = 'receive_videos';
export const UPDATE_CURRENT_SEARCH = 'update_current_search';
export const SHOW_OR_HIDE_SEARCHBOX = 'show_or_hide_searchbox';

export function fetchVideos(searchTerm='') {
    return {
        type: FETCH_VIDEOS,
        payload: searchTerm
    }
}

export function receiveVideos(videos) {

    let action = {
        type: RECEIVE_VIDEOS,
        payload: videos
    }

    return action;

}

export function updateCurrentSearch(searchTerm) {
    return {
        type: UPDATE_CURRENT_SEARCH,
        payload: searchTerm
    }
}

export function showOrHideSearchBox(showStatus) {
    return {
        type: SHOW_OR_HIDE_SEARCHBOX,
        payload: showStatus
    }
}