import React from "react";

export default function ({ children }) {
  return (
    <table className="table align-middle">
      <thead className="table-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">User</th>
          <th scope="col">Name</th>
          <th scope="col">Point</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}
