import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import PostListProvider, { CreateContext } from "../store/Post.store";

function PostList() {
  console.log('post list')
  const { postList, getPost } = useContext(CreateContext);
  const [fetching, setFetching] = useState(false) // useState always work with square braces

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        getPost(data.products); 
        setFetching(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log("Fetch aborted.");
        } else {
          console.error("Fetch error:", error);
        }
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort(); //abort the effects on distroy the component
    };
  }, [])// if 2nd param is not passed than it will be infinite loop
    
 
  const handleGetPostFromServer = () => {};
  return (
    <>
      <h4>Post</h4>
      <hr />

      {fetching ? <div className="w-100">
        <div className="spinner-border"  role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<h5>Loading...</h5>
        </div>:  

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
              <button
                className="btn btn-primary"
                onClick={handleGetPostFromServer}
              >
                Get Post From Server
              </button>
            </div>
          </div>
        )}
      </div>
}
    </>
  );
}

export default PostList;
