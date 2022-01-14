import React, { useState,useEffect } from "react";
// import Leaderboard from "react-leaderboard";
import AddPoint from "../components/Form/AddPoint";
import AddUser from "../components/Form/AddUser";
import AddEvent from "../components/Form/AddEvent";
import AddDocumentation from "../components/Form/AddDocumentation";
import AddParticipant from "../components/Form/AddParticipant";
import AddBlog from "../components/Form/AddBlog";
// import { events } from "../dummy-event";
import axios from "axios";

export default function Tes() {
  const [events, setEvents] = useState([]);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    getEvents();
    getParticipants();
  }, []);

  const getEvents = async () => {
    const res = await axios.get("https://be-fp-4.herokuapp.com/events");
    setEvents(res.data.result);
    console.log("debug", res.data);
  };

  const getParticipants = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get("https://be-fp-4.herokuapp.com/participants",config);
    setParticipants(res.data.result);
    console.log("debug", res.data);
  };

  

  const options = [
    { label: "Hari ibu", value: "1" },
    { label: "valentine", value: "2" },
    { label: "hari pahlawan", value: "3" },
    { label: "hadeh", value: "4" },
  ];

  const optionss = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const users = [
    { name: "a", score: 1 },
    { name: "b", score: 2 },
    { name: "c", score: 3 },
    { name: "d", score: 4 },
    { name: "e", score: 5 },
    { name: "f", score: 6 },
    { name: "g", score: 7 },
    { name: "h", score: 9 },
    { name: "i", score: 8 },
    { name: "o", score: 0 },
    { name: "p", score: 1 },
  ];
  const paginate = 5;

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlzcyI6Im5hd2FzdGUiLCJpYXQiOjE2NDIwODM0NTcuMTgyLCJleHAiOjE2NDIwODcwNTcuMTgyfQ.bpxrPSaTlmCZm5fbHLDxtlQyq3m5WeOe62eKQR4XfKE";

  // console.log(tes);

  const [count, setCount] = useState(0);
  // const IncrementItem = () => {
  //   a++;
  // };
  // DecreaseItem = () => {
  //   setState({ clicks: state.clicks - 1 });
  // };
  // ToggleClick = () => {
  //   setState({ show: !state.show });
  // };

  return (
    <>
      <AddPoint key={0} events={events} participants={participants} token={token}/>
      <AddUser key={1} token={token}/>
      <AddEvent key={2} token={token}/>
      <AddDocumentation key={3} events={events} token={token}/>
      <AddParticipant key={4} token={token}/>
      <AddBlog key={4} token={token}/>
      <div className="string">
        {/* <Leaderboard users={users} paginate={paginate} /> */}
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
