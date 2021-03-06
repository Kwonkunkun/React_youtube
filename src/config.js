export const PAGES = {
    defaultPage: "defaultPage",
    searchPage: "searchPage",
    playPage: "playPage",
};

const requestOptions = {
    method: "GET",
    redirect: "follow",
};

export async function getYoutubePopularVideoData(callback) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=20&chart=mostPopular&regionCode=KR&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            callback && callback(result.items);
        })
        .catch((error) => console.log("error", error));
}

export async function getYoutubeVideoData(videoId, callback) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&regionCode=KR&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            callback && callback(result.items[0]);
        })
        .catch((error) => console.log("error", error));
}

export async function getYoutubeSearchData(keyword, callback) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=20&q=${keyword}&regionCode=KR&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            callback && callback(result.items);
        })
        .catch((error) => console.log("error", error));
}

export async function getYoutubeChanelData(channelId, callback) {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            callback && callback(result.items[0]);
        })
        .catch((error) => console.log("error", error));
}
