import React, { useContext } from "react";
import { FaRegEye } from "react-icons/fa6";
import { SlLike, SlDislike  } from "react-icons/sl";
import PostListProvider, { CreateContext } from "../store/Post.store";

function Post({item}) {
  const {deletePost} = useContext(CreateContext);
  return (
    <div className="card mb-3">
      <img src={item.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ item.id} {item.title}</h5>
        <div className="mb-3">
          <span>
          <FaRegEye /> {item.views}
          </span>
          <span className="mx-3">
          <SlLike /> {item.reactions?.likes || (item.views / 2) || 0}
          </span>
          <span>
          <SlDislike /> {item.reactions?.dislikes || (item.views / 2) || 0}</span>
        </div>
        <p className="card-text">
        {item.description?.length > 100 ? item.description?.substring(0, 100) + '...' : item.description}
        </p>
        {
          item.tags?.length > 0 ?  <div className="mb-4">
          {
            item.tags.map((tag) => {
              return (
                <span key={tag} className="badge rounded-pill text-bg-secondary">{tag.trim()}</span>
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
