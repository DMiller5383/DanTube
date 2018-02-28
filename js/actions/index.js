import YouTube from 'youtube-node';

export const FETCH_VIDEOS = 'fetch_videos';
export const RECEIVE_VIDEOS = 'receive_videos';

export function fetchVideos(category='') {
    return {
        type: FETCH_VIDEOS,
        payload: category
    }
}

export function receiveVideos(videos) {

    let action = {
        type: RECEIVE_VIDEOS,
        payload: videos
    }

    return action;

}
