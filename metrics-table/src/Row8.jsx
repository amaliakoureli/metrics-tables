import React from "react";
import "./FourInputs.css";


function Row8({ row, index, handleChange, handleEnterPress}){
      
  return(
    <tr key={row.id} data-row={index === 0 ? "0" : undefined}>
      <td className="table-cell">{row.id}</td>
      <td className="table-cell" colSpan={2}>{row.text}</td>
      <div >
        <td className="table-cell">
          <select
            value={row.input1}
            onChange={(e) => handleChange(index, "input1", e.target.value)}
            className="controller column-inputs row8select"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input2}
            onChange={(e) => handleChange(index, "input2", e.target.value)}
            className="controller column-inputs row8input"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
      </div>
    </tr>
  );
}

export default Row8;





