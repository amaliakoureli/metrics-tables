import React from "react";
import "./Row4.css";

function Row1({
  row,
  index,
  selectedButton1,
  selectedButton2,
  setSelectedButton1,
  setSelectedButton2,
}) {
  return (
    <tr
      key={row.id}
      className="table-row"
      data-row={index === 0 ? "0" : undefined}
    >
      <td className="table-cell column-id">{row.id}</td>
      <td className="table-cell column-text" colSpan={2}>
        {row.text}
      </td>
      <div className="inputs-alignment">
        <td className="table-cell">
          <button
            onClick={() => setSelectedButton1((prev) => !prev)}
            className={`buttonStyle ${selectedButton1 ? "selected" : ""}`}
          >
            Συνεχούς
          </button>
        </td>
        <td className="table-cell">
          <button
            onClick={() => setSelectedButton2((prev) => !prev)}
            className={`buttonStyle ${selectedButton2 ? "selected" : ""}`}
          >
            Μη συνεχούς
          </button>
        </td>
      </div>
    </tr>
  );
}

export default Row1;
