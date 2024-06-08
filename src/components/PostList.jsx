import React from 'react';
import Post from './Post';

function PostList() {
  return (
    <>
      <h4>Post</h4>
      <hr />
      <div className='row'>
        <div className="col-md-3">
          <Post />
        </div>
      </div>
    </>
  );
}

export default PostList;
