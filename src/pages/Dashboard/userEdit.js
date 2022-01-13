import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import DashboardSidebar from "./Sidebar";
import "../../assets/css/style.css";
import axios from "axios";

export default function DashboardUsers() {
    const { id } = useParams();
    const [dataUser, setDataUser] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    const loadDataUser = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
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
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <DashboardSidebar />
        </div>
        <div className="col-8">
          {isLoaded !== true ? (
            <h1>Loading mas</h1>
          ) : (
            <div>
                              <p>{dataUser.name }</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
