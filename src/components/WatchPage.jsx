import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidePanelSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import SuggestedVideos from "./SuggestedVideos";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams(); // we will use this to get the queryParams

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-4 py-1 flex w-full ">
        <div>
          <iframe
            width="850"
            height="400"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            } // here we need to get the value of v=somevalue
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className=" flex m-2 p-3">
        <div className="w-[70%]">
          <Comments />
        </div>
        <div className="w-[30%]">
          <SuggestedVideos videoId={searchParams.get("v")} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
