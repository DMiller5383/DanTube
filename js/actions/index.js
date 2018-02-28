import YouTube from 'youtube-node';

export const FETCH_VIDEOS = 'fetch_videos';
export const RECEIVE_VIDEOS = 'receive_videos';
export const UPDATE_CURRENT_SEARCH = 'update_current_search';

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
