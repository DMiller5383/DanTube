import YouTube from 'youtube-node';
import {FETCH_VIDEOS} from '../actions';
import {receiveVideos} from '../actions';


const ytMiddleware = store => next => action => {
    if (action.type == FETCH_VIDEOS) {
        let category = action.payload
        getYTVideos(action, store);    
    }
    return next(action);
}

function getYTVideos(action, store) {
    let youTube = new YouTube(); 
    let pageToken = store.getState().videos.pageToken;
    let videoList = store.getState().videos.videoList;
    let category = action.payload;
    youTube.setKey('AIzaSyBhiCYZwT2PW7kZ_LUDGv4cyFm4K7zegDI'); 
    youTube.search(category, 10, {pageToken: pageToken}, function(error, result){
        if(error) {
            return 'error';
        } else {
            let videos = result.items;
            for(let i=0; i<videos.length; i++) {
                let video = {};
                video.thumbnail = videos[i].snippet.thumbnails.medium.url;
                video.title = videos[i].snippet.title;
                videoList.push(video);
            }
            store.dispatch(receiveVideos(videoList));
        }
    });

}

const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }

  const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }

  export {crashReporter, logger, ytMiddleware}