import React, { useState } from "react";
import Select from "react-select";
// import { events } from "../../dummy-event";
import axios from "axios";

// pass list event butuh id dan nama
export default function ({events, participants, token}) {
  
  const options = events.map((o) => ({
    label: o.name,
    value: o.id,
  }));

  const participantOption = participants.map((o) => ({
    label: o.email,
    value: o.id,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState([]);
  const [weight, setWeight] = useState("");
  const [point, setPoint] = useState("");

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  const handleParticipantChange = (options) => {
    setSelectedParticipant(options);
  };

  async function postAddParticipant(){
    
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      `https://be-fp-4.herokuapp.com/participants/${selectedParticipant.value}/point`,
      {
        eventId: selectedOptions.value,
        weight: weight,
        point: point,
      },
      config
    );
    alert(result.data.message);
    console.log(result);
  }

  function handleValidation() {
    console.log("masok");
    if (selectedOptions.length == 0 || !weight || !point || selectedParticipant.length == 0) {
      return false;
    }
    if (!weight.match("^[0-9]*$") || !point.match("^[0-9]*$")) {
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    if (!handleValidation()) {
      alert("isian form salah");
    } else {
      console.log("submitted");
      console.log(selectedOptions);
      console.log(weight);
      console.log(point);
      console.log(selectedParticipant);
      postAddParticipant();
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
        Add Point
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
                Add point
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
                  <label className="form-label">Weight</label>
                  <input
                    type="text"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Point</label>
                  <input
                    type="text"
                    className="form-control"
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    placeholder="Point"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select event</label>
                  <Select options={options} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select participant</label>
                  <Select options={participantOption} onChange={handleParticipantChange} />
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
