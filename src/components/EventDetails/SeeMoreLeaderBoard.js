import { useParams } from "react-router";

export default function SeeMoreLeaderboard() {
  const { id } = useParams();
  return (
    <>
      <h2>All Participants in Event {id}</h2>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Larry</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
