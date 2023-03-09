import React from "react";
import "./List-four.css";
import ListHead from "./List-head";
import ListItem from "./List-item";
import { listData } from "./List-data";
const ListFour = () => {
  return (
    <div>
      <button className="btn btn-white">ADD</button>
      <table className="list-table">
        <ListHead />
        <tbody className="list-table-body">
          {listData.map((item, index) => (
            <ListItem data={item} id={index+1} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFour;
