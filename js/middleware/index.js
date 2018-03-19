import YouTube from 'youtube-node';
import {FETCH_VIDEOS} from '../actions';
import {UPDATE_FETCH_VIDEOS} from '../actions';
import {receiveVideos} from '../actions';


const ytMiddleware = store => next => action => {
    let searchParams = getYTSearchParams(action, store);
    if(Object.keys(searchParams).length !== 0 && searchParams.constructor === Object) {
        getYTVideos(searchParams, store );     
    }
    return next(action);
}

function getYTVideos(searchParams, store) {
    let youTube = new YouTube(); 
    youTube.setKey('AIzaSyBhiCYZwT2PW7kZ_LUDGv4cyFm4K7zegDI'); 
    
    youTube.search(searchParams.searchTerm, 10, {pageToken: searchParams.pageToken}, function(error, result){
        if(error) {
            return 'error';
        } else {
            let videos = result.items;
            for(let i=0; i<videos.length; i++) {
                let video = {};
                video.thumbnail = videos[i].snippet.thumbnails.medium.url;
                video.title = videos[i].snippet.title;
                searchParams.videoList.push(video);
            }
            searchParams.pageToken = result.nextPageToken;
            store.dispatch(receiveVideos(searchParams));
        }
    });
}

function getYTSearchParams(action, store) {
    let params = {};
    if(action.type == FETCH_VIDEOS) {
        params.searchTerm = action.payload;
        params.pageToken = '';
        params.videoList = [];
    } else if(action.type == UPDATE_FETCH_VIDEOS) {
        if(store.getState().videos.isFetching == true) {
            return;
        }
        params.searchTerm = store.getState().currentSearch;
        params.pageToken = store.getState().videos.pageToken;
        params.videoList = store.getState().videos.videoList;
    } else {
        params = {};
    }
    return params;
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