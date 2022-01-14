import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
    useState,
    useEffect
} from "react";
import DatePicker from "react-date-picker";
import moment from 'moment';
import {
    useNavigate
} from "react-router-dom";
import {
    useParams
} from "react-router";


export default function EditEvent() {
    const {
        id
    } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [value, onChange] = useState(new Date());
    const [thumbnail, setThumbnail] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        getEvent();
    }, []);

    const getEvent = async () => {
        const res = await axios.get("http://be-fp-4.herokuapp.com/events/" + id);
        setName(res.data.result.name)
        setThumbnail(res.data.result.thumbnail)
        setLocation(res.data.result.location)
        setDescription(res.data.result.description)
        onChange(new Date(res.data.result.date.replace("Z", "-04:00")))
    };

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
                const result = await axios.put(`https://be-fp-4.herokuapp.com/events/${id}`, {
                    name,
                    date: moment(value).utc().utcOffset('+07:00').format('YYYY-MM-DD'),
                    thumbnail,
                    location,
                    description
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
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
            </>
    )
}