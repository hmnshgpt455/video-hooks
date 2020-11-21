import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const PART = 'snippet'
const KEY = 'AIzaSyD8m8dI5TSldsZq00xVnSFfN95fhsi7-f0';
const MAX_RESULTS = 15;
const TYPE = 'video';

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = async text => {
    try {
      const result = await youtube.get('/search', {
        params: {
          q: text,
          part: PART,
          maxResults: MAX_RESULTS,
          key: KEY,
          type: TYPE
        }
      });

      setVideos(result.data.items);
      setSelectedVideo(result.data.items[0]);

    } catch(err) {
      throw new Error(err.message);
    }
  };

  const onVideoSelect = video => setSelectedVideo(video);

  useEffect(() => onFormSubmit('Latest anime of 2020'), []);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList 
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
