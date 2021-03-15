import './YouTube.css';
import { NavList } from 'components/Nav/Nav';
import Page from 'components/Page/Page';
import React from 'react';
import channelsByType from './data/channelsByType';
// TBD: refactor out static content to content link
// import content from 'content/content';
import mockVideoData from './data/mockVideoData';

class YouTube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      YOUTUBE_API_KEY: 'AIzaSyBCdXhhkF8p1w-SDM0GFiia2Huhz5WQyR8',
      selectedType: 'Mock (testing)',
      currentVideos: [],
      videosByType: {
        'Mock (testing)': mockVideoData.items,
      },
      channelsByType,
    };
  }

  componentDidMount = () => {
    this.fetchVideos();
  };

  renderChannels = () => {
    if (
      !this.state.channelsByType[this.state.selectedType] ||
      !this.state.channelsByType[this.state.selectedType].length
    ) {
      return <li className="channels-list-item">NO CHANNELS FOUND</li>;
    }
    return this.state.channelsByType[this.state.selectedType].map((channel) => {
      return (
        <li key={channel.id} className="channels-list-item">
          <a
            className="channels-list-item-link"
            href={`https://www.youtube.com/channel/${channel.id}/videos?view=0&sort=p/`}
          >
            {channel.name}
          </a>
        </li>
      );
    });
  };

  renderDropdownOptions = () => {
    return Object.keys(this.state.channelsByType).map((type) => {
      return (
        <option key={type} value={type}>
          {type}
        </option>
      );
    });
  };

  handleSelect = (event) => {
    this.setState(
      { selectedType: event.target.value, currentVideos: [] },
      () => {
        this.fetchVideos();
      }
    );
  };

  fetchVideos = () => {
    // no channels
    if (!this.state.channelsByType[this.state.selectedType]) {
      return;
    }

    // videos are cached in state
    if (
      this.state.videosByType[this.state.selectedType] &&
      this.state.videosByType[this.state.selectedType].length
    ) {
      this.setState({
        currentVideos: this.state.videosByType[this.state.selectedType],
      });
      return;
    }

    const channels = this.state.channelsByType[this.state.selectedType];
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    Promise.all(
      channels.map((channel) =>
        fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${this.state.YOUTUBE_API_KEY}&channelId=${channel.id}&part=snippet,id&order=date&maxResults=5`,
          requestOptions
        )
      )
    )
      .then((responses) => Promise.all(responses.map((res) => res.text())))
      .then((texts) => {
        const fetchedVideos = texts
          .map((text) => {
            return JSON.parse(text).items;
          })
          .flat()
          .filter((video) => {
            if (video) return video;
          });
        const videosByType = this.state.videosByType;
        videosByType[this.state.selectedType] = fetchedVideos;
        this.setState({
          currentVideos: fetchedVideos,
          videosByType,
        });
      })
      // TBD: display num searches left in day, handle errors, display "out of quota rejections", increase quota
      .catch((error) => {
        this.setState({ currentVideos: [] });
      });
  };

  renderVideos = () => {
    if (!this.state.currentVideos.length) {
      return (
        <div className="video-error">{`NO VIDEOS FOUND OR API QUOTA EXCEEDED`}</div>
      );
    }
    return this.state.currentVideos
      .sort(
        (a, b) =>
          new Date(b.snippet.publishTime).valueOf() -
          new Date(a.snippet.publishTime).valueOf()
      )
      .map((video) => {
        if (!video) return;
        return (
          <a
            key={video.id.videoId + video.snippet.title}
            className="video button-hover-light"
            href={`http://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
          >
            <img
              className="video-img"
              src={video.snippet.thumbnails.high.url}
              alt="video thumbnail img"
            />
            <div className="video-metadata">
              <h3 className="video-metadata-title">
                {video.snippet.title
                  .replace(/&quot;/g, '"')
                  .replace(/&#39;/g, "'")}
              </h3>
              <div className="video-metadata-description">
                {video.snippet.description}
              </div>
              <div className="video-metadata-channel-and-date">
                <i>{`${new Date(
                  video.snippet.publishTime
                ).toDateString()} - ${video.snippet.channelTitle}`}</i>
              </div>
            </div>
          </a>
        );
      });
  };

  render() {
    return (
      <div>
        <Page>
          <div>
            <h1>recent videos by select channels</h1>
            <br></br>
            <label className="dropdown-label">choose a content category:</label>
            <select
              name="type"
              id="type"
              onChange={this.handleSelect}
              value={this.state.selectedType}
            >
              {this.renderDropdownOptions()}
            </select>
          </div>
          <br></br>
          <div className="video-list">{this.renderVideos()}</div>
          <ul className="channels-list">
            <label>featured channels:</label>
            {this.renderChannels()}
          </ul>
          <br></br>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default YouTube;
