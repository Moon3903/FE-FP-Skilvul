import React from "react";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import { allLeaderboard } from "../dummy-leaderboard";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import Pagination from "../components/Event/Pagination";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [leaderboard, setLeader] = useState([]);

  useEffect(() => {
    getLeader();
  }, []);

  const getLeader = async () => {
    const res = await axios.get(
      "https://be-fp-4.herokuapp.com/events/leaderboard"
    );
    setLeader(res.data.result);
    console.log("debug", res.data);
  };
  return (
    <div className="container mx-lg-5">
      <h1>All Time Leaderboard</h1>
      <div className="area-message">
        <p>The leaderboard is updated every day</p>
      </div>
      <LeaderboardTable key={1} list={allLeaderboard}>
        {(leaderboard ?? []).map((o, index) => (
          <LeaderboardList
            key={o.id}
            id={o.id}
            index={index}
            img={o.picture}
            name={o.name}
            point={o.point}
          />
        ))}
      </LeaderboardTable>
      <div className="d-flex justify-content-center">
        <Pagination />
      </div>
    </div>
  );
}
