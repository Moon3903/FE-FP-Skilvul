import React, { useState } from "react";
// import Leaderboard from "react-leaderboard";
import AddPoint from "../components/Form/AddPoint";
import AddUser from "../components/Form/AddUser";
import { events } from "../dummy-event";

export default function Tes() {
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

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlzcyI6Im5hd2FzdGUiLCJpYXQiOjE2NDIwNjUxMDYuMjgxLCJleHAiOjE2NDIwNjg3MDYuMjgxfQ.KK6tr4V2vL8CMnt8ekfemHZ9g1pHjw453dJgnakwLKM";

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
      <AddPoint key={0} events={events}/>
      <AddUser key={0} token={token}/>
      <div className="string">
        {/* <Leaderboard users={users} paginate={paginate} /> */}
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
