function CreatePost() {
  return (
    <div className="container">
       <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter a Content Title"
        />
      </div>
      <div className="mb-3">
        <label for="content" class="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="6"
        ></textarea>
      </div>
      <div className=" col-6 mb-3">
        <label for="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Author an Author Name"
        />
      </div>
    </div>
  );
}

export default CreatePost;
