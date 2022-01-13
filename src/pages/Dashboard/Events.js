import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import "../../assets/css/style.css";
import axios from "axios";

export default function DashboardEvents() {
    const [dataEvent, setDataEvent] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadDataEvent = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      if (res.status === 200) {
        // console.log(res.data);
        setDataEvent(res.data);
        setIsLoaded(true);
      } else {
        console.log("error");
      }
    };

    useEffect(() => {
      loadDataEvent();
    }, [isLoaded]);


  return (
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <DashboardSidebar />
        </div>
        <div className="col-8">
        <a
            className="btn btn-success mt-5"
            href="https://codepen.io/collection/XKgNLN/"
            target="_blank"
          >
            Tambah Event
          </a>
          {isLoaded !== true ? (
            <h1>Loading mas</h1>
          ) : (
            <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col" className="text-center">No</th>
                <th scope="col" className="text-start">Nama Event</th>
                <th scope="col" className="text-start">Tanggal</th>
                <th scope="col" className="text-start">Detail</th>
                <th scope="col" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {dataEvent.map((data, index) => {
                    if (index >= 0 && index < 10) {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td>{data.title}</td>
                          <td>{data.body}</td>
                          <td>{data.body}</td>
                          <td>
                            <a href="" className="btn btn-sm bg-primary me-1"><i class="bi bi-pencil-square text-white"> edit</i></a>
                            <a href="" className="btn btn-sm bg-danger"><i class="bi bi-trash text-white"> hapus</i></a>
                          </td>
                        </tr>
                      );
                    }
                  })}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </div>
  );
}
