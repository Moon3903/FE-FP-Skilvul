import medalEmas from "./../../assets/img/medal.svg";
import medalPerak from "./../../assets/img/medal1.svg";
import medalPerunggu from "./../../assets/img/medal2.svg";

export default function Leaderboard() {
  return (
    <>
      <h2>Top 5 Leaderboard Participants</h2>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Gambar</th>
            <th scope="col">Nama</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img src={medalEmas} />
            </th>
            <td>Mark</td>
            <td>Michael Cooper</td>
            <td>1000 point</td>
          </tr>
          <tr>
            <th scope="row">
              <img src={medalPerak} />
            </th>
            <td>Jacob</td>
            <td>Lauren Richardson</td>
            <td>400 point</td>
          </tr>
          <tr>
            <th scope="row">
              <img src={medalPerunggu} />
            </th>
            <td>Larry</td>
            <td>Thornton</td>
            <td>300 point</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>Kayana</td>
            <td>200 point</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>Keisha</td>
            <td>90 point</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
