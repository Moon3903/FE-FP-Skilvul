import React, { useState } from "react";
import Select from "react-select";
// import { events } from "../../dummy-event";
import axios from "axios";

// pass list event butuh id dan nama
export default function ({ events,token }) {
  const options = events.map((o) => ({
    label: o.name,
    value: o.id,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [documentation, setDocumentation] = useState("");

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  async function postAddDocumentation() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      `https://be-fp-4.herokuapp.com/events/${selectedOptions.value}/documentation`,
      {
        documentation: documentation,
      },
      config
    );
    alert(result.data.message);
    console.log(result);
  }

  function handleValidation() {
    console.log("masok");
    if (selectedOptions.length == 0 || !documentation) {
      alert("please fill all form");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    if (!handleValidation()) {
    } else {
      console.log("submitted");
      console.log(selectedOptions);
      console.log(documentation);
      postAddDocumentation();
    }
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mx-auto d-block mt-5"
        data-bs-toggle="modal"
        data-bs-target="#modalDocumentation"
      >
        Add Documentation
      </button>

      <div
        className="modal fade"
        id="modalDocumentation"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Documentation
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
                  <label className="form-label">documentation</label>
                  <input
                    type="text"
                    className="form-control"
                    value={documentation}
                    onChange={(e) => setDocumentation(e.target.value)}
                    placeholder="Documentation"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Select event</label>
                  <Select options={options} onChange={handleChange} />
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
