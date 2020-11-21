import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const PART = 'snippet'
const KEY = 'AIzaSyD8m8dI5TSldsZq00xVnSFfN95fhsi7-f0';
const MAX_RESULTS = 15;
const TYPE = 'video';

const useVideos = (defaultSearchTerm) => {

   const [videos, setVideos] = useState([]);

   useEffect(() => search(defaultSearchTerm), [defaultSearchTerm]);

   const search = async text => {
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
  
      } catch(err) {
        throw new Error(err.message);
      }
   };

   return [videos, search];
};

export default useVideos;