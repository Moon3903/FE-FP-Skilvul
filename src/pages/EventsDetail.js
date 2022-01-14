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
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from 'moment'


export default function EventsDetail() {
  const { id } = useParams();
  const [aktifEvent, setAktifEvent] = useState({});
  const [leaderboard, setLeader] = useState([]);
    const [gambar, setImg] = useState([]);
  const [participants, setparticipants] = useState(0);


  useEffect(() => {
    getEvent();
    getLeader();
    getImg();
  }, []);

  const getEvent = async () => {
    const res = await axios.get("http://be-fp-4.herokuapp.com/events/" + id);
    setAktifEvent(res.data.result);
    setparticipants(res.data.result.leaderboard.length);
  };

 const getLeader = async () => {
   const res = await axios.get(
     `https://be-fp-4.herokuapp.com/events/${id}/leaderboard`
   );
   setLeader(res.data.result);
   console.log(res);
 };

  const getImg = async () => {
    const res = await axios.get(
      `https://be-fp-4.herokuapp.com/events/${id}/documentation`
    );
    setImg(res.data.result);
    console.log(res);
  };

  // const activeEvent = events.find((o) => o.id === Number(id));
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-6">
          <img className="img-fluid" src={aktifEvent.thumbnail} alt="some" />
        </div>
        <div className="col-6 text-start">
          <h2 style={{ fontWeight: 600 }}>{aktifEvent.title}</h2>
          <p style={{ fontSize: "1.2rem" }}>
            <PinMapFill /> {aktifEvent.location}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            < CalendarDateFill / > {
              moment(aktifEvent.date).format('DD/MM/YYYY')
            }
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <PeopleFill /> {participants} Orang
          </p>
        </div>
      </div>
      <div className="text-start my-5">
        <h2>Informasi Kegiatan</h2>
        <p>{aktifEvent.info}</p>
      </div>
      <LeaderboardTable>
        {leaderboard && leaderboard.map((o) => (
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
      <div className="row g-3">
        {gambar.slice(0,4).map((u) => (
          <Documentation key={u.id} id={u.id} img={u.documentation} x />
        ))}
      </div>
      <div className="my-5">
        <Link className="btn btn-primary" to={`/event/${id}/documentation`}>
          See More
        </Link>
      </div>
    </div>
  );
}
