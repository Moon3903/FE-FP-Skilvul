import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import "../../assets/css/style.css";
import axios from "axios";

export default function DashboardUsers() {
  const [dataUser, setDataUser] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadDataUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (res.status === 200) {
      // console.log(res.data);
      setDataUser(res.data);
      setIsLoaded(true);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    loadDataUser();
  }, [isLoaded]);

  return (
    <div className="">
      <div className="d-flex">
        <div className="">
          <DashboardSidebar />
        </div>
        <div className="w-100">
        <a
            className="btn btn-success mt-5"
            href="https://codepen.io/collection/XKgNLN/"
            target="_blank"
          >
            Tambah User
          </a>
          {isLoaded !== true ? (
            <h1>Loading mas</h1>
          ) : (
            <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col" className="text-center">No</th>
                <th scope="col" className="text-start">Nama</th>
                <th scope="col" className="text-start">Roles</th>
                <th scope="col" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {dataUser.map((data, index) => {
                    if (index >= 0 && index < 10) {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.username}</td>
                          <td>
                            <Link to={`/user/${data.id}`} className="btn btn-sm bg-primary me-1"><i className="bi bi-pencil-square text-white"> edit</i></Link>
                            <Link to={`/user/${data.id}`} className="btn btn-sm bg-danger"><i className="bi bi-trash text-white"> hapus</i></Link>
                          </td>
                        </tr>
                      );
                    }
                  })}
            </tbody>
          </table>
          )}
          
          
          {/* <a
            className="btn btn-success"
            href="https://codepen.io/collection/XKgNLN/"
            target="_blank"
          >
            Other examples on Codepen
          </a>
          <table
            id="example"
            className="table table-striped table-bordered"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th>Order</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Amount</th>
                <th>
                  Add row{" "}
                  <button
                    type="button"
                    data-func="dt-add"
                    className="btn btn-success btn-xs dt-add"
                  >
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    ></span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alphabet puzzle</td>
                <td>2016/01/15</td>
                <td>Done</td>
                <td>1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-xs dt-edit"
                  >
                    <span
                      className="glyphicon glyphicon-pencil"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs dt-delete"
                  >
                    <span
                      className="glyphicon glyphicon-remove"
                      aria-hidden="true"
                    ></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table> */}

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
