import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import "../../assets/css/style.css";

export default function DashboardUsers() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <DashboardSidebar />
        </div>
        <div className="col-8">
          <a className="btn btn-success" href="/" target="_blank">
            Tambah Data
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
