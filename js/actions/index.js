import YouTube from 'youtube-node';

export const FETCH_VIDEOS = 'fetch_videos';

export function fetchVideos(category='') {
    let youTube = new YouTube(); 
    youTube.setKey('AIzaSyBhiCYZwT2PW7kZ_LUDGv4cyFm4K7zegDI'); 
    return {
        type: FETCH_VIDEOS,
        payload: youTube.search(category, 2, function(error, result){
            if(error) {
                return 'error';
            } else {
                console.log(result);
                return result;
            }
        })
    }
}