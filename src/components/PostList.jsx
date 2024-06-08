import React, { useContext } from "react";
import Post from "./Post";
import PostListProvider, { CreateContext } from "../store/Post.store";

function PostList() {
  const postFromContext = useContext(CreateContext);
  return (
    <>
      <h4>Post</h4>
      <hr />
      <div className="row">
        {postFromContext.postList.length > 0 ? (
          postFromContext.postList.map((item) => {
            return (
              <div key={item.id} className="col-md-3">
                <Post key={item.id} item={item} />
              </div>
            );
          })
        ) : (
          <div className="alert alert-warning" role="alert">
            There is no post right now.
          </div>
        )}
      </div>
    </>
  );
}

export default PostList;
