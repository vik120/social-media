import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

const CreateContext = createContext(DEFAULT_CONTEXT);

const PostListReducer = (currentPostList, Action) => {
  return currentPostList;
};

const PostListProvider = function ({ children }) {
  const [PostList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  ); // useReducer (reducerFunction, initial value of list)

  const AddPost = () => {};
  const DeletePost = () => {};

  return (
    <CreateContext.Provider
      value={{ postList: PostList, addPost: AddPost, deletePost: DeletePost }}
    >
      {children}
    </CreateContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  },
];

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PostListProvider;
