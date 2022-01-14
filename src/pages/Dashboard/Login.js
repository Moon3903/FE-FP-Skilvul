import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

export default function DashboardLogin() {

  const navigate = useNavigate();
  const dateAddOneHour = new Date(Date.now() + 3600000);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleValidation() {
    console.log("masok");
    if (!email || !password) {
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

  const handleSubmit = async () => {
    try {

      if(handleValidation()) {
        const result = await axios.post('https://be-fp-4.herokuapp.com/users/login', {email, password});
        if (result.data.message === 'success user login') {
          Cookies.set('access_token', result.data.result.token, { expires: dateAddOneHour });
          navigate('/dashboard/users');
        }
        console.log(result);
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-3" style={{ width: "18rem" }}>
      <h1 className="mb-5">Welcome Back!</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>
          Login
        </button>
      </div>
    </div>
  );
}
