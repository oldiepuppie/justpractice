// import { useState, useEffect } from "react";
// import axios from "axios";

const DataList = ({ data }) => {

  return (
    <div className="dataListContainer">
      <ul className="dataList">
        {
          data.map(item => {
            return (
              <li key={item.id} className="listItem">
                <p>User ID: {item.userId}</p>
                <p>Title: {item.title}</p>
                <p>Contents: {item.body}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default DataList;