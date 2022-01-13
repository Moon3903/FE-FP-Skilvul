import React from "react";
import {
  CalendarDateFill,
  PeopleFill,
  PinMapFill
} from "react-bootstrap-icons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Documentation from "../components/EventDetails/Documentation";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import { eventSatu } from "../dummy-leaderboard";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function EventsDetail() {
  const { id } = useParams();
  const [aktifEvent, setAktifEvent] = useState({});

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    const res = await axios.get("http://be-fp-4.herokuapp.com/events/" + id);
    console.log(res);
    setAktifEvent(res.data.result);
  };

  // const activeEvent = events.find((o) => o.id === Number(id));
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-6">
          <img className="img-fluid" src={aktifEvent.thumbnail} alt="some" />
        </div>
        <div className="col-6 text-start">
          <h2 style={{ fontWeight: 600 }}>{aktifEvent.judul}</h2>
          <p style={{ fontSize: "1.2rem" }}>
            <PinMapFill /> {aktifEvent.tempat}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <CalendarDateFill /> {aktifEvent.tanggal}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <PeopleFill /> {aktifEvent.jumlah_partisipan} Orang
          </p>
        </div>
      </div>
      <div className="text-start my-5">
        <h2>Informasi Kegiatan</h2>
        <p>{aktifEvent.info}</p>
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
