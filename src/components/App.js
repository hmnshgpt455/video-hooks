import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  #KEY = 'AIzaSyD8m8dI5TSldsZq00xVnSFfN95fhsi7-f0';
  #PART = 'snippet'
  #MAX_RESULTS = 15
  #TYPE = 'video'

  state = { videos: [], selectedVideo: null }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  onFormSubmit = async searchText => {
    try {
      const result = await youtube.get('/search', {
        params: {
          q: searchText,
          part: this.#PART,
          maxResults: this.#MAX_RESULTS,
          key: this.#KEY,
          type: this.#TYPE
        }
      });
      
      this.setState({ 
        videos: result.data.items,
        selectedVideo: result.data.items[0]
      });

    } catch(err) {
      throw new Error(err.message);
    }
  }

  componentDidMount() {
    this.onFormSubmit('latest anime 2020');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
