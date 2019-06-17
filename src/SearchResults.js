import React, { Component } from 'react';

class SearchResults extends Component {

    render() {
        console.log(this.props.youtubeVids);
        if (this.props.youtubeVids.length > 0) {
            var youtubeVidsMap = this.props.youtubeVids.map((video) => <div className="flex-column" key={video.id.videoId}>
                <div className="upper-section-video">
                    <div className="video-title">
                        <h2>{video.snippet.title} </h2>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="video-thumbnail-container">
                        <img src={video.snippet.thumbnails.high.url} />
                    </div>
                    <div className="description-box">
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>);

        }
        return (

            <div className="each-body-section video-container">
                {youtubeVidsMap}
            </div>
        );
    }
}

export default SearchResults;