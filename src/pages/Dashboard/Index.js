import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import Cookies from "js-cookie";


export default function DashboardIndex() {
const navigate = useNavigate();

    useEffect(() => {
      const token = Cookies.get('access_token');
      if (!token) {
        navigate('/dashboard/login')
      }
    }, []);

  return ( <
    div className = "container" >
    <div className = "row" >
    <div className = "col-4" >
    <DashboardSidebar / >
    </div> 
    <div className = "col-8" >
    <h1 > Hello, Admin! 
    </h1> 
    </div> 
    </div> 
    </div>
  );
}