import React, { useContext } from "react";
import Post from "./Post";
import PostListProvider, { CreateContext } from "../store/Post.store";

function PostList() {
  const {postList, getPost} = useContext(CreateContext);
  const handleGetPostFromServer = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => getPost(data.products))
  }
  return (
    <>
      <h4>Post</h4>
      <hr />
      <div className="row">
        {postList?.length > 0 ? (
          postList.map((item) => {
            return (
              <div key={item.id} className="col-md-3">
                <Post key={item.id} item={item} />
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <h3>There is no post right now.</h3>
            <div>
              <button className="btn btn-primary" onClick={handleGetPostFromServer}>Get Post From Server</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PostList;
