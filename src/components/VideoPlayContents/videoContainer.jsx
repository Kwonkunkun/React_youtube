import React, { Component } from "react";
import styles from "./videoContainer.module.css";
import * as config from "../../config.js";

const DATAFORM = {
    channelId: undefined,
    channelTitle: undefined,
    description: undefined,
    publishedAt: undefined,
    tags: "",
    title: undefined,
    viewCount: undefined,
    likeCount: undefined,
    dislikeCount: undefined,
};

class VideoContainer extends Component {
    state = {
        datas: Object.assign(DATAFORM),
        channelThumnailUrl: undefined,
    };

    //여기서 app에서 video id를 props로 받아서 api call을 해서 띄어줌
    componentDidMount() {
        config.getYoutubeVideoData(this.props.videoId, this.updateAll);
        console.log(this.props.videoId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.videoId !== this.props.videoId) {
            config.getYoutubeVideoData(this.props.videoId, this.updateAll);
        }
    }

    updateAll = (items) => {
        const datas = Object.assign(DATAFORM);
        console.log(items);

        datas.channelId = items.snippet.channelId;
        datas.channelTitle = items.snippet.channelTitle;
        datas.description = items.snippet.description;
        datas.publishedAt = items.snippet.publishedAt;
        datas.tags = items.snippet.tags.map((tag) => `#${tag} `);
        datas.title = items.snippet.title;
        datas.viewCount = items.statistics.viewCount;
        datas.likeCount = items.statistics.likeCount;
        datas.dislikeCount = items.statistics.dislikeCount;
        // console.log(datas);

        //여기서 호출해야 함..
        config.getYoutubeChanelData(
            items.snippet.channelId,
            this.updateChannelThunmnailUrl
        );

        this.setState({ datas });
    };

    updateChannelThunmnailUrl = (datas) => {
        const channelThumnailUrl = datas.snippet.thumbnails.default.url;
        this.setState({ channelThumnailUrl });
    };

    render() {
        return (
            <div className={styles.container}>
                <section className={styles.embed_youtube}>
                    <iframe
                        src={`https://www.youtube.com/embed/${this.props.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </section>
                <section className={styles.description}>
                    <header className={styles.title_container}>
                        <div className={styles.title_tag}>
                            {this.state.datas.tags}
                        </div>
                        <div className={styles.title_name}>
                            {this.state.datas.title}
                        </div>
                        <div className={styles.title_menu_container}>
                            <div className={styles.date}>
                                {this.state.datas.publishedAt}
                            </div>
                            <div className={styles.menu_container}>
                                <button className="like_toggleBtn">
                                    <i className="fas fa-thumbs-up"></i>
                                    {this.state.datas.likeCount}
                                </button>
                                <button className="hate_toggleBtn">
                                    <i className="fas fa-thumbs-down"></i>
                                    {this.state.datas.dislikeCount}
                                </button>
                                <button className="shareBtn">
                                    <i className="fas fa-share"></i>
                                    공유
                                </button>
                                <button className="saveBtn">
                                    <i className="fas fa-download"></i>
                                    저장
                                </button>
                                <button className="reportBtn">
                                    <i className="fas fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className={styles.explain_container}>
                        <a href="#" className={styles.picture}>
                            <img src={this.state.channelThumnailUrl}></img>
                        </a>
                        <div className={styles.detail_container}>
                            <a href="" className={styles.author_name}>
                                {this.state.datas.channelTitle}
                            </a>
                            <div className={styles.subscriber}>
                                구독자 4.61만명
                            </div>
                            <div className={styles.brief_explain}>
                                {this.state.datas.description}
                            </div>
                        </div>
                        <button className={styles.subscribeBtn}>구독</button>
                    </div>
                    <div className={styles.comment_container}></div>
                </section>
            </div>
        );
    }
}

export default VideoContainer;
