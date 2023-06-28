import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, changeVideoData] = useState([]);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const videosResponse = await fetch(YOUTUBE_VIDEOS_URL);
    const vidoesData = await videosResponse.json();
    changeVideoData(vidoesData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoData.map((videoItem) => (
        <Link to={"/watch?v=" + videoItem.id} key={videoItem.id}>
          <VideoCard videoInfo={videoItem} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
