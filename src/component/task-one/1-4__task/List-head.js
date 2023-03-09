import React from "react";
import "./List-four.css";
const ListHead = () => {
  return (
    <thead className="list-table__head" >
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Active</th>
        <th>Count</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default ListHead;
