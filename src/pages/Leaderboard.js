import React from "react";
import medalEmas from "./../assets/img/medal.svg";
import medalPerak from "./../assets/img/medal1.svg";
import medalPerunggu from "./../assets/img/medal2.svg";

export default function Leaderboard() {
  return (
    <>
      <div className="container">
        <h6>Leaderboard-Events</h6>
        <small>All time</small>
        <div className="row">
          <div className="col-12">
            <div className="area-message">
              <p>
                The leaderboard is update every day, the first two and last two
                people of each event are moved to another events
              </p>
            </div>
          </div>
        </div>
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Profile</th>
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
              <td>Otto</td>
              <td>
                <span className="value-table">1000</span>
                &nbsp;
                <small>total points</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img src={medalPerak} />
              </th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <span className="value-table">800</span>
                &nbsp;
                <small>total points</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img src={medalPerunggu} />
              </th>
              <td>Larry</td>
              <td>Thornton</td>
              <td>
                <span className="value-table">100</span>
                &nbsp;
                <small>total points</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
