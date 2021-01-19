import React, { PureComponent } from "react";
import styles_search from "./se_thumbnail.module.css";
import styles_video from "./se_thumbnail_inVideo.module.css";
import * as config from "../../../config.js";

//하... 썸네일도 뿌려야 되는데 api 너무많이쓰넴..
class Thumbnail extends PureComponent {
    state = {
        channelThumnailUrl: undefined,
        styles: undefined,
    };

    onVideoImgClick = () => {
        this.props.onEnterVideo(this.props.data.id.videoId);
    };

    render() {
        const styles =
            this.props.page === config.PAGES.searchPage
                ? styles_search
                : styles_video;
        return (
            <button className={styles.container} onClick={this.onVideoImgClick}>
                <img
                    src={this.props.data.snippet.thumbnails.medium.url}
                    width="180"
                    height="101"
                    alt=""
                />
                <div className={styles.description}>
                    <img
                        className={styles.chanelImg}
                        src={this.state.channelThumnailUrl}
                        width="30"
                        height="30"
                        alt=""
                    />
                    <div className={styles.texts}>
                        <span className={styles.title}>
                            {this.props.data.snippet.title}
                        </span>
                        <span className={styles.chanel}>
                            {this.props.data.snippet.channelTitle}
                        </span>
                        <span className={styles.publishTime}>
                            {this.props.data.snippet.publishedAt}
                        </span>
                    </div>
                </div>
            </button>
        );
    }
}

export default Thumbnail;
