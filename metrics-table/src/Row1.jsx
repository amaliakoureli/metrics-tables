import React from "react";

function Row1({ row, index, selectedButton1, selectedButton2, setSelectedButton1, setSelectedButton2 }){
    return(
          <tr key={row.id} className="table-row" data-row={index === 0 ? "0" : undefined}>
              <td className="table-cell">{row.id}</td>
              <td className="table-cell">{row.text}</td>
              <td className="table-cell">
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
          </tr>
                
        );
}

export default Row1;