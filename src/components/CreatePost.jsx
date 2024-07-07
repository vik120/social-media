import React, { useContext, useRef } from "react";
import { CreateContext } from "../store/Post.store";
import { useNavigate } from "react-router-dom";

function CreatePost(setSelectedTab) {
  const navigate = useNavigate()
  const { addPost } = useContext(CreateContext);
  const postTitleElement = useRef("test");
  const postUrlElement = useRef("");
  const postBodyElement = useRef("");
  const postViewsElement = useRef("");
  const postTagsElement = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = postTitleElement.current.value;
    const thumbnail = postUrlElement.current.value;
    const body = postBodyElement.current.value;
    const views = postViewsElement.current.value;
    const tags = postTagsElement.current.value.split(",");
    const id = Date.now();

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitleElement.current.value,
        description: postBodyElement.current.value,
        thumbnail: postUrlElement.current.value,
        tags: postTagsElement.current.value.split(","),
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post)
        navigate('/')
      });

    // setSelectedTab('')
  };

  return (
    <div>
      <h4>Create Post</h4>
      <hr />
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* <div className="col-md-12">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="inputTitle" name="title" ref={postIdElement} />
        </div> */}

        <div className="col-md-12">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            name="title"
            ref={postTitleElement}
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUrl"
            name="url"
            ref={postUrlElement}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="inputDescription"
            placeholder="1234 Main St"
            name="body"
            ref={postBodyElement}
          ></textarea>
        </div>

        <div className="col-md-12">
          <label htmlFor="inputUrl" className="form-label">
            Views
          </label>
          <input
            type="text"
            className="form-control"
            id="inputView"
            name="views"
            ref={postViewsElement}
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputUrl" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTag"
            name="tags"
            ref={postTagsElement}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
