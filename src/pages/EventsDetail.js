import React from "react";
import {
  CalendarDateFill,
  PeopleFill,
  PinMapFill,
} from "react-bootstrap-icons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Documentation from "../components/EventDetails/Documentation";
import Leaderboard from "../components/EventDetails/Leaderboard";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import { eventSatu } from "../dummy-leaderboard";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
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
          <h2 style={{ fontWeight: 600 }}>{activeEvent.judul}</h2>
          <p style={{ fontSize: "1.2rem" }}>
            <PinMapFill /> {activeEvent.tempat}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <CalendarDateFill /> {activeEvent.tanggal}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <PeopleFill /> {activeEvent.jumlah_partisipan} Orang
          </p>
        </div>
      </div>
      <div className="text-start my-5">
        <h2>Informasi Kegiatan</h2>
        <p>{activeEvent.info}</p>
      </div>
      <LeaderboardTable>
        {eventSatu.slice(0, 5).map((o) => (
          <LeaderboardList
            key={o.id}
            id={o.id}
            img={o.photo}
            name={o.name}
            point={o.point}
          />
        ))}
      </LeaderboardTable>
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
