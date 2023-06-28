import React from "react";
import userIcon from "../images/user-icon.png";

const commentsData = [
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [{
            name: "Venu Vk",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Venu Vk",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },],
      },
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [{
            name: "Venu Vk",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [{
                name: "Venu Vk",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Venu Vk",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },],
          },
          {
            name: "Venu Vk",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [{
                name: "Venu Vk",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Venu Vk",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },],
          },],
      },
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Venu Vk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [{
            name: "Venu Vk",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [{
                name: "Venu Vk",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [{
                    name: "Venu Vk",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                  {
                    name: "Venu Vk",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },],
              },
              {
                name: "Venu Vk",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },],
          },
          {
            name: "Venu Vk",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },],
      },
    ],
  },
  {
    name: "Venu Vk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const CommentsContainer = ({ data }) => {
  return (
    <div className="flex bg-gray-200 rounded-lg m-2 p-1">
      <img className="h-8 px-2 py-1" src={userIcon} alt="user-icon" />
      <div>
        <h1 className="font-bold">{data.name}</h1>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ commentsVal }) => {
  return commentsVal.map((comment, index) => (
    <>
    <CommentsContainer data={comment} />
    <div className="ml-4 pl-5 border border-l-black">
       <CommentsList commentsVal={comment.replies}/>
    </div> 
    </>
  ));
};

const Comments = () => {
  return (
    <>
      <h1 className="font-bold text-xl">Comments:</h1>
      <CommentsList commentsVal={commentsData} />
    </>
  );
};

export default Comments;
