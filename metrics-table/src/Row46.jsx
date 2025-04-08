import React, { useState, useRef } from "react";
import "./Row4.css";
function Row46({ row, index, handleChange, handleEnterPress }) {
  return (
    row.id === "" && (
      <>
        <tr
          key={row.id}
          className="table-row"
          data-row={index === 0 ? "0" : undefined}
        >
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            <b>{row.text}</b>
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text1}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text2}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text3}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text4}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text5}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text6}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text7}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text8}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text9}
          </td>
        </tr>
        <tr>
          <td className="table-cell" style={{ paddingLeft: "20px" }}></td>
          <td className="table-cell" colSpan={3}>
            {row.text10}
          </td>
        </tr>
      </>
    )
  );
}

export default Row46;
