import React from "react";
import EventCard from "../../components/Event/EventCard";
import EventNavbar from "../../components/Event/EventNavbar";
import Pagination from "../../components/Event/Pagination";
import TopEventCard from "../../components/Event/TopEventCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function LayoutEvents(props) {
  const [events, setEvents] = useState([]);
  // console.log(dataBlog);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const res = await axios.get("https://be-fp-4.herokuapp.com/events");
    setEvents(res.data.result);
    console.log("debug", res.data);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <div className="container">
            <div className="row">
              <EventNavbar />
              {(events ?? []).map((e) => (
                <div className="col-md-4 col-sm-6 my-3">
                  <EventCard
                    key={e.id}
                    id={e.id}
                    img={e.thumbnail}
                    title={e.name}
                    page={props.page}
                  />
                </div>
              ))}
              <div className="d-flex justify-content-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-md-block d-none">
          <h3>Trending</h3>
          {(events ?? []).map((e) => (
            <TopEventCard key={e.id} img={e.thumbnail} title={e.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
