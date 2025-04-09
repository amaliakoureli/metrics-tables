import React, { useState, useRef } from "react";
import "./Row4.css";
function Row45({ row, index, handleChange, handleEnterPress }) {
  return (
    <tr key={row.id}>
      <td className=" column-id">{row.id}</td>
      <td colSpan={3}>
        <textarea
          value={
            "Παρατηρήσεις: " + (row.input1?.replace("Παρατηρήσεις: ", "") ?? "")
          }
          rows={10}
          onChange={(e) => {
            const inputValue = e.target.value;
            const prefix = "Παρατηρήσεις: ";

            if (inputValue.startsWith(prefix)) {
              handleChange(index, "input1", inputValue);
            } else {
              handleChange(index, "input1", prefix + inputValue);
            }
          }}
          onKeyDown={(e) => {
            const prefix = "Παρατηρήσεις: ";
            const cursorPos = e.target.selectionStart;

            if (
              (e.key === "Backspace" && cursorPos <= prefix.length) ||
              (e.key === "Delete" && cursorPos < prefix.length)
            ) {
              e.preventDefault();
            }
            handleEnterPress(e, index, true);
          }}
          className="controller"
        />
      </td>
    </tr>
  );
}

export default Row45;
