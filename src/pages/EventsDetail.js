import React from "react";
import {
  CalendarDateFill,
  PeopleFill,
  PinMapFill
} from "react-bootstrap-icons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Documentation from "../components/EventDetails/Documentation";
import Leaderboard from "../components/EventDetails/Leaderboard";
import { events } from "../dummy-event";

export default function EventsDetail() {
  const { id } = useParams();
  const activeEvent = events.find((o) => o.id === Number(id));
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-6">
          <img className="img-fluid" src={activeEvent.img} alt="some" />
        </div>
        <div className="col-6 text-start">
          <h3>{activeEvent.judul}</h3>
          <p>
            <PinMapFill /> {activeEvent.tempat}
          </p>
          <p>
            <CalendarDateFill /> {activeEvent.tanggal}
          </p>
          <p>
            <PeopleFill /> {activeEvent.jumlah_partisipan} Orang
          </p>
        </div>
      </div>
      <div className="text-start my-5">
        <h2>Informasi Kegiatan</h2>
        <p>{activeEvent.info}</p>
      </div>
      <Leaderboard />
      <div className="my-5">
        <Link className="btn btn-primary" to={`/event/${id}/leaderboard`}>
          See More
        </Link>
      </div>
      <Documentation />
      <div className="my-5">
        <Link className="btn btn-primary" to={`/event/${id}/documentation`}>
          See More
        </Link>
      </div>
    </div>
  );
}
