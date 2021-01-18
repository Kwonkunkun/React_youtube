import "./app.css";
import React, { Component } from "react";
import * as config from "./config";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import PopularVideoList from "./components/DefaultContents/popularVideoList";
import SearchVideoList from "./components/SearchContents/searchVideoList";
import VideoContainer from "./components/VideoPlayContents/videoContainer";
import ScrollToTop from "./components/scrollToTop";

class App extends Component {
    state = {
        page: config.PAGES.defaultPage,
        keyword: "",
        videoId: "",
    };

    onSearch = (item) => {
        //keyword를 바꾼다.
        const keyword = item;
        this.setState({ keyword });

        //search page를 띄운다.
        this.changePage(config.PAGES.searchPage);
    };

    onEnterVideo = (item) => {
        const videoId = item;
        this.setState({ videoId });

        //여기서는 무슨 비디오를 요청했는지 videoId를 받아오고 이 아이디를 바탕으로 play page를 띄운다.
        this.changePage(config.PAGES.playPage);

        //여기서 유튜브처럼 맨위로 가는 기능 추가
    };

    changePage = (newPage) => {
        const page = newPage;
        this.setState({ page });
    };

    render() {
        if (this.state.page === config.PAGES.defaultPage) {
            return (
                <>
                    <Header onSearch={this.onSearch} />
                    <div className="mainContent">
                        <Sidebar />
                        <PopularVideoList onEnterVideo={this.onEnterVideo} />
                    </div>
                </>
            );
        } else if (this.state.page === config.PAGES.searchPage) {
            return (
                <>
                    <Header onSearch={this.onSearch} />
                    <div className="mainContent">
                        <Sidebar />
                        <SearchVideoList
                            keyword={this.state.keyword}
                            page={this.state.page}
                            onEnterVideo={this.onEnterVideo}
                        />
                    </div>
                </>
            );
        } else if (this.state.page === config.PAGES.playPage) {
            return (
                <>
                    <Header onSearch={this.onSearch} />
                    <div className="mainGridContent">
                        <VideoContainer videoId={this.state.videoId} />
                        <SearchVideoList
                            keyword={this.state.keyword}
                            page={this.state.page}
                            onEnterVideo={this.onEnterVideo}
                        />
                    </div>
                </>
            );
        }
    }
}

export default App;
