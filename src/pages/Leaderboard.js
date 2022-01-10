import React from "react";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import { allLeaderboard } from "../dummy-leaderboard";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import Pagination from "../components/Event/Pagination";

export default function Leaderboard() {
  return (
    <div className="container mx-lg-5">
      <h1>All Time Leaderboard</h1>
      <div className="area-message">
        <p>The leaderboard is updated every day</p>
      </div>
      <LeaderboardTable key={1} list={allLeaderboard}>
        {allLeaderboard.map((o) => (
          <LeaderboardList
            key={o.id}
            id={o.id}
            img={o.photo}
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
