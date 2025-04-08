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
        <td>
          <button
            onClick={() => setSelectedButton1((prev) => !prev)}
            style={{
              backgroundColor: selectedButton1 ? "#ddd" : "#fff",
              padding: "10px 20px",
              margin: "5px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            Συνεχούς
          </button>
        </td>
        <td>
          <button
            onClick={() => setSelectedButton2((prev) => !prev)}
            style={{
              backgroundColor: selectedButton2 ? "#ddd" : "#fff",
              padding: "10px 20px",
              margin: "5px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            Μη συνεχούς
          </button>
        </td>
      </div>
    </tr>
  );
}

export default Row1;
