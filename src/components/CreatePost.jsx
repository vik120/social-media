import React, { useContext } from "react";
import { CreateContext } from "../store/Post.store";

function CreatePost() {
  const { CreatePost } = useContext(CreateContext);
  return (
    <div>
      <h4>Create Post</h4>
      <hr />
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="inputTitle" />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputUrl" className="form-label">
            Image URL
          </label>
          <input type="text" className="form-control" id="inputUrl" />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="inputDescription"
            placeholder="1234 Main St"
          ></textarea>
        </div>

        <div className="col-md-12">
          <label htmlFor="inputUrl" className="form-label">
            Views
          </label>
          <input type="text" className="form-control" id="inputView" />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputUrl" className="form-label">
            Tags
          </label>
          <input type="text" className="form-control" id="inputTag" />
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
