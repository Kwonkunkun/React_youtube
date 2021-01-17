import React, { PureComponent } from "react";
import styles from "./popularVideoList.module.css";
import Thumbnail from "./DefaultVideoThumbnail/de_thumbnail";
import * as config from "../../config";

class PopularVideoList extends PureComponent {
    state = {
        datas: [],
    };

    componentDidMount() {
        //처음 들어갔을때 popular search를 해서 값들을 가지고 있는다.
        config.getYoutubePopularVideoData(this.updateDatas);
    }

    updateDatas = (result) => {
        const datas = [...result];
        this.setState({ datas });
    };

    render() {
        return (
            <div className={styles.container}>
                {this.state.datas.map((data) => (
                    <Thumbnail
                        key={Date.now() + Math.random() * 2}
                        data={data}
                        onEnterVideo={this.props.onEnterVideo}
                    />
                ))}
            </div>
        );
    }
}

export default PopularVideoList;
