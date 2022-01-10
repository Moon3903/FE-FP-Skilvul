import { useParams } from "react-router";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import { eventSatu } from "../dummy-leaderboard";
import Pagination from "../components/Event/Pagination";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";

export default function SeeMoreLeaderboard() {
  const { id } = useParams();
  return (
    <div className="mx-lg-5">
      <h1>All Participants in Event {id}</h1>
      <LeaderboardTable>
      {eventSatu.map((o) => (
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
