import React, { useState, useRef } from "react";
import "./Row4.css";
function Row47({ row, index, handleChange, handleEnterPress }) {
  return (
    <>
      {row.id === "" && (
        <tr key={row.id} className="table-row">
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            <b>{row.text1}</b>
          </td>
        </tr>
      )}
      {row.id === "" && (
        <tr key={row.id} className="table-row">
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            <b>{row.text2}</b>
          </td>
        </tr>
      )}
    </>
  );
}

export default Row47;
