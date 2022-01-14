import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import DatePicker from "react-date-picker";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

export default function AddEvent(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [value, onChange] = useState(new Date());
  const [thumbnail, setThumbnail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleValidation() {
    console.log("masok");
    if (!name || !value || !thumbnail || !location || !description) {
      alert("please fill all form");
      return false;
    }
    const regex =
      /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i; 
    if (!thumbnail.match(regex)) {
      alert("please use valid link");
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    try {
        if (handleValidation()) {
            const token = Cookies.get('access_token');
            const result = await axios.post('https://be-fp-4.herokuapp.com/events', { name, date: moment(value).utc().utcOffset('+07:00').format('YYYY-MM-DD'), thumbnail, location, description }, { headers: { Authorization: `Bearer ${token}` } });
            if (result.data.message === 'success create events') {
                navigate(0);
            }
        }
    } catch (err) {
        console.log(err);
    }
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
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name Event"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Thumbnail</label>
                <input
                  type="text"
                  className="form-control"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  placeholder="link thumbnail"
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
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
              <div className="modal-footer d-block">
                <button type="submit" className="btn btn-primary float-end" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
