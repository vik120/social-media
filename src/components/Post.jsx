import React, { useContext } from "react";
import { FaRegEye } from "react-icons/fa6";
import { SlLike, SlDislike  } from "react-icons/sl";
import PostListProvider, { CreateContext } from "../store/Post.store";

function Post({item}) {
  const {deletePost} = useContext(CreateContext);
  return (
    <div className="card">
      <img src={item.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <div className="mb-3">
          <span>
          <FaRegEye /> {item.views}
          </span>
          <span className="mx-3">
          <SlLike /> {item.reactions.likes || 0}
          </span>
          <span>
          <SlDislike /> {item.reactions.dislikes || 0}</span>
        </div>
        <p className="card-text">
        {item.body.length > 100 ? item.body.substring(0, 100) + '...' : item.body}
        </p>
        {
          item.tags.length > 0 ?  <div className="mb-4">
          {
            item.tags.map((tag) => {
              return (
                <span key={tag} className="badge rounded-pill text-bg-secondary">{tag}</span>
              )
            })
          }
          </div> : ''
        }
       <button type="button" className="btn btn-warning">Read More</button>
       <button type="button" className="btn btn-danger ms-1" onClick={() => deletePost(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
