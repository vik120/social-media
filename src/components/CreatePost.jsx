import React from 'react';

function CreatePost() {
  return (
    <div>
      <h4>Create Post</h4>
      <hr />
      <form className="row g-3">
      <div className="col-md-12">
        <label htmlFor="inputCity" className="form-label">Title</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <textarea className="form-control" id="inputAddress" placeholder="1234 Main St" >
      </textarea>
  </div>
   
  <div className="col-md-12">
    <label htmlFor="inputCity" className="form-label">Image URL</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
    
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
  );
}

export default CreatePost;
