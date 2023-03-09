import React from "react";
import { useState } from "react";
import "./List-four.css";
const ListItem = (props) => {
  const [count, setCount] = useState(props.data.count);
  return (
    <tr className="list-table__item">
      <td>{props.id}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.lastName}</td>
      <td>{props.data.phone}</td>
      <td>
        <label className="list-checkbox__label">
          <input type="checkbox" checked={props.data.active} />
            <span></span>
        </label>
      </td>
      <td>
        <button className="btn btn-white" onClick={()=>setCount(prev=>prev-1)}>-</button>
        <span>{count}</span>
        <button className="btn btn-white"  onClick={()=>setCount(prev=>prev+1)}>+</button>
      </td>
      <td>
        <button className="btn btn-white">dalete</button>
      </td>
    </tr>
  );
};

export default ListItem;
