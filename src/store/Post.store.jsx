import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  getPost: () => {}
};

export const CreateContext = createContext(DEFAULT_CONTEXT);

const PostListReducer = (currentPostList, Action) => {
  let newPostList = currentPostList;
  if (Action.type == "DELETE_POST") {
    newPostList = currentPostList.filter(
      (item) => item.id != Action.payload.postid
    );
  } else if (Action.type == "ADD_POST") {
    newPostList = [...currentPostList, Action.payload.postInfo]
  } else if(Action.type == 'GET_POST') {
    newPostList = Action.payload.posts
  }
  return newPostList;
};

const PostListProvider = function ({ children }) {
  const [PostList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  ); // useReducer (reducerFunction, initial value of list)

  const AddPost = (postInfo) => {
    
    dispatchPostList({
      type: "ADD_POST",
      payload: { postInfo },
    });
  };
  const DeletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postid },
    });
  };


  const GetPost = (posts) => {
    dispatchPostList({
      type: "GET_POST",
      payload: { posts },
    });
  }

  return (
    <CreateContext.Provider
      value={{ postList: PostList, addPost: AddPost, deletePost: DeletePost, getPost: GetPost }}
    >
      {children}
    </CreateContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "His mother had always taught him",
//     description: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//     tags: ["history", "american", "crime"],
//     reactions: {
//       likes: 192,
//       dislikes: 25,
//     },
//     views: 4152,
//     thumbnail:
//       "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
//   },
//   {
//     id: 2,
//     title: "He was an expert but not in a discipline",
//     description: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
//     tags: ["french", "fiction", "english"],
//     thumbnail:
//       "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
//     reactions: {
//       likes: 859,
//       dislikes: 32,
//     },
//     views: 305,
//   },
//   {
//     id: 3,
//     title: "Dave watched as the forest burned up on the hill.",
//     description: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
//     reactions: {
//       likes: 1448,
//       dislikes: 39,
//     },
//     views: 4884,
//     tags: ["magical", "history", "french"], 
//     userId: 16,
//     thumbnail:
//       "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
//   },
// ];

const DEFAULT_POST_LIST = []

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PostListProvider;
