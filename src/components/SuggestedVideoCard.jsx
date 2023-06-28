import React from "react";
import { Link } from "react-router-dom";

const SuggestedVideoCard = ({ item, id }) => {
  //const {snippet, id} = item;

  //const {thumbnails, title, channelTitle} = snippet;
  const title = item?.snippet?.title;
  console.log(title?.length);
  return (
    <Link to={"/watch?v=" + id}>
    <div className="flex gap-4 shadow-lg p-2 m-2">
      <img
        className="rounded-lg"
        src={item?.snippet?.thumbnails?.default?.url}
        alt="Thumbnails"
      />
      <div className="">
        <h1 className="font-semibold py-1">
          {title?.length <= 40 ? title : title?.substring(0, 41) + "..."}
        </h1>
        <p className="text-sm">{item?.snippet?.channelTitle}</p>
      </div>
    </div>
  </Link>
  );
};

export default SuggestedVideoCard;
