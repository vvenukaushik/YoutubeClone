const AUTH_KEY = "AIzaSyAL9S5t6hnUICpSNmwDbM4hq-O47DHJtm8";

export const OFFSET_LIVECHAT = 50;

export const YOUTUBE_VIDEOS_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + AUTH_KEY + "&maxResults=50";

export const YOUTUBE_SEARCH_RESULTS = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + AUTH_KEY  + "&q=";

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const RELATED_VIDEOS = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" + AUTH_KEY + "&maxResults=10&relatedToVideoId="