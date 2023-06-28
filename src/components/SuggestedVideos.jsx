import React, { useEffect, useState } from "react";
import { RELATED_VIDEOS } from "../utils/constants";
import SuggestedVideoCard from "./SuggestedVideoCard";

const SuggestedVideos = ({ videoId }) => {
  const [suggestedVideos, changeSuggestedVideos] = useState([]);
  useEffect(() => {
    getRelatedVideos();
  }, []);

  const getRelatedVideos = async () => {
    const response = await fetch(RELATED_VIDEOS + videoId);
    const respJson = await response.json();
    changeSuggestedVideos(respJson?.items);
    console.log(respJson);
  };
  return (
    <>
      <div className="mx-2 font-bold">Suggested Videos:</div>
      <div>
       {suggestedVideos?.map((item) => {
        return <SuggestedVideoCard key={item?.id?.videoId} item={item} id={videoId}/>
       })} 
       
      </div>
    </>
  );
};

export default SuggestedVideos;
