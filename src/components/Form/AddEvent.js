import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

export default function ({token}) {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  async function postAddEvent() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      "https://be-fp-4.herokuapp.com/events",
      {
        name: name,
        thumbnail: thumbnail,
        date: date,
        location: location,
        description: description,
      },
      config
    );
    alert(result.data.message);
    console.log(result);
  }

  function handleValidation() {
    console.log("masok");
    if (!name || !thumbnail || !date || !location || !description) {
      alert("please fill all form");
      return false;
    }
    postAddEvent();
    return true;
  }

  const handleSubmit = (e) => {
    if (!handleValidation()) {
    } else {
      console.log("submitted");
      console.log(name);
      console.log(date);
      console.log(thumbnail);
      console.log(location);
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
        data-bs-target="#modalEvent"
      >
        Add Event
      </button>

      <div
        className="modal fade"
        id="modalEvent"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Event
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
                  <label className="form-label">Event Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
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
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
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
