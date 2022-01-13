import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

export default function ({ token }) {
  const options = [
    {
      value: 1,
      label: "Super  admin",
    },
    {
      value: 2,
      label: "Admin",
    },
    {
      value: 3,
      label: "Moderator",
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  //^[0-9]*$

  function handleValidation() {
    console.log("masok");
    if (selectedOptions.length == 0 || !email || !password || !name) {
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
    if (
      !password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      )
    ) {
      alert(
        'password must be 6-16 character long and contain number, letter, and one of these special character "!@#$%^&*"'
      );
      return false;
    }
    return true;
  }

  async function postAddUser() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      "https://be-fp-4.herokuapp.com/users",
      {
        email: email,
        name: name,
        password: password,
        roles: [selectedOptions.value],
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
      console.log(selectedOptions);
      console.log(email);
      console.log(password);
    }
    postAddUser();
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mx-auto d-block mt-5"
        data-bs-toggle="modal"
        data-bs-target="#modalUser"
      >
        Add User
      </button>

      <div
        className="modal fade"
        id="modalUser"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add User
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
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select authorization</label>
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
