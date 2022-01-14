import React, { useState } from "react";
import axios from "axios";

export default function ({ token }) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");


  //^[0-9]*$

  function handleValidation() {
    console.log("masok");
    if (!email || !picture || !name) {
      alert("please fill all form");
      return false;
    }
    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("please enter a correct email");
      return false;
    }
    return true;
  }

  async function postAddParticipant() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      "https://be-fp-4.herokuapp.com/Participants",
      {
        email: email,
        name: name,
        picture: picture,
      },
      config
    );
    alert(result.data.message);
    console.log(result);
  }

  const handleSubmit = (e) => {
    if (!handleValidation()) {
    } else {
      console.log("submitted");
      console.log(name);
      console.log(email);
      console.log(picture);
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
        data-bs-target="#modalParticipant"
      >
        Add Participant
      </button>

      <div
        className="modal fade"
        id="modalParticipant"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Participant
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
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Picture</label>
                  <input
                    type="text"
                    className="form-control"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    placeholder="Picture"
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
