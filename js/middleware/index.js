import YouTube from 'youtube-node';
import {FETCH_VIDEOS} from '../actions';
import {receiveVideos} from '../actions';


const ytMiddleware = store => next => action => {
    if (action.type == FETCH_VIDEOS) {
        action.payload = [];
        let youTube = new YouTube(); 
        youTube.setKey('AIzaSyBhiCYZwT2PW7kZ_LUDGv4cyFm4K7zegDI'); 
        youTube.search(action.payload, 10, {pageToken: ''}, function(error, result){
            if(error) {
                return 'error';
            } else {
                let videos = result.items;
                let videoIds = [];
                for(let i=0; i<videos.length; i++) {
                    videoIds.push(videos[i].id.videoId);
                }
                store.dispatch(receiveVideos(videoIds));
             
            }
        }) 
    }
    return next(action);
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