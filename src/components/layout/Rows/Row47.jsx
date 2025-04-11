import React, { useState, useRef } from "react";
import "../../../assets/styles/styles.css";

function Row47({ row, index, handleChange, handleEnterPress }) {
  return (
    <>
      {row.id === "" && (
        <tr key={row.id}>
          <td className="column-id">{row.id}</td>
          <td className="brief top" colSpan={4}>
            <b>{row.text1}</b>
          </td>
        </tr>
      )}
      {row.id === "" && (
        <tr key={row.id}>
          <td className="column-id">{row.id}</td>
          <td className="brief" colSpan={3}>
            <b>{row.text2}</b>
          </td>
        </tr>
      )}
    </>
  );
}

export default Row47;
