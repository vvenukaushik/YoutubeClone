import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Songs",
    "Gaming",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
  ];
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
