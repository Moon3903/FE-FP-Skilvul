import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

export default function ({ token }) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  async function postAddBlog() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      "https://be-fp-4.herokuapp.com/blog",
      {
        title: title,
        thumbnail: thumbnail,
        content: content,
        description: description,
      },
      config
    );
    alert(result.data.message);
    console.log(result);
  }

  function handleValidation() {
    console.log("masok");
    if (!title || !thumbnail || !content || !description) {
      alert("please fill all form");
      return false;
    }
    postAddBlog();
    return true;
  }

  const handleSubmit = (e) => {
    if (!handleValidation()) {
    } else {
      console.log("submitted");
      console.log(title);
      console.log(thumbnail);
      console.log(content);
      console.log(description);
    }
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mx-auto d-block mt-5"
        data-bs-toggle="modal"
        data-bs-target="#modalBlog"
      >
        Add Blog
      </button>

      <div
        className="modal fade"
        id="modalBlog"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Blog
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Blog title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Thumbnail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    placeholder="Thumbnail"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">content</label>
                  <input
                    type="text"
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                  />
                </div>

                <div className="modal-footer d-block">
                  <button type="submit" className="btn btn-primary float-end">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
