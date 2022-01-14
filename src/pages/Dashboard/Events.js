import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import Cookies from "js-cookie";
import axios from "axios";
import moment from "moment";
import AddEvent from "../../components/Form/AddEvent";

export default function DashboardEvents() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getAllEventDashboard = async () => {
    try {
      const token = Cookies.get("access_token");

      if (token) {
        const result = await axios.get("https://be-fp-4.herokuapp.com/events", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (result.data.message === "success get data event") {
          setData(result.data.result);
        }
      } else {
        navigate("/dashboard/login");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getAllEventDashboard();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = Cookies.get("access_token");
      const result = await axios.delete(`https://be-fp-4.herokuapp.com/events/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      if (result.data.message === 'success delete event') {
        navigate(0);
      }

    } catch(err) {
      console.log(err);
    }
  }

  const handleEdit = async (id) => {
    console.log("tes")
    navigate(`/dashboard/editEvent/${id}`);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <DashboardSidebar />
        </div>
        <div className="col-8">
          <AddEvent />
          <table
            id="example"
            className="table table-striped table-bordered"
            cellSpacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((val) => {
                  return (
                    <tr key={val.id}>
                      <td>{val.name}</td>
                      <td>
                        {moment(val.date)
                          .utc()
                          .utcOffset("+07:00")
                          .format("YYYY-MM-DD HH:mm:ss")}
                      </td>
                      <td>{val.location}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-xs dt-edit"
                          onClick={() => handleEdit(val.id)}
                        >
                          <span
                            className="glyphicon glyphicon-pencil"
                            aria-hidden="true"
                          ></span>
                          edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-xs dt-delete"
                          onClick={() => handleDelete(val.id)}
                        >
                          <span
                            className="glyphicon glyphicon-remove"
                            aria-hidden="true"
                          ></span>
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">Row information</h4>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
