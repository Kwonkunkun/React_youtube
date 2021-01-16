import React, { Component } from "react";
import styles_search from "./se_searchVideoList.module.css";
import styles_play from "./pl_searchVideoList.module.css";
import Thumbnail from "./SearchVideoThumbnail/se_thumbnail";
import * as config from "../../config.js";

class SearchVideoList extends Component {
    state = {
        datas: [],
    };

    //현재 서치가 안되는 문제, 아마도 지금 여기서는 this.props.keyword의 변화가 여기엔 영향을 미치지 않는다.
    //구조를 바꿔야함. 음.. 함수를 써서 바뀔때마다 호출하게 할수있나??

    componentDidMount() {
        //search keyword를 넣는다.
        config.getYoutubeSearchData(this.props.keyword, this.updateDatas);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.keyword !== this.props.keyword) {
            config.getYoutubeSearchData(this.props.keyword, this.updateDatas);
        }
    }

    updateDatas = (result) => {
        const datas = [...result];
        this.setState({ datas });
    };

    render() {
        return (
            <div
                className={
                    this.props.page === config.PAGES.searchPage
                        ? styles_search.container
                        : styles_play.container
                }
            >
                {this.state.datas.map((data) => (
                    <Thumbnail
                        key={Date.now() + Math.random() * 2}
                        data={data}
                        page={this.props.page}
                        onEnterVideo={this.props.onEnterVideo}
                    />
                ))}
            </div>
        );
    }
}

export default SearchVideoList;
