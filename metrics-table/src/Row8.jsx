import React from "react";
import "./Rows5-6-7-9";


function Row8({ row, index, handleChange, handleEnterPress}){
      
return(
<tr key={row.id} className="table-row" data-row={index === 0 ? "0" : undefined}>
                    <td className="table-cell">{row.id}</td>
                    <td className="table-cell">{row.text}</td>
                    <td className="table-cell">
                      <select
                        value={row.input1}
                        onChange={(e) => handleChange(index, "input1", e.target.value)}
                        className="input-style"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                      >
                        <option value="ΔΑ">ΔΑ</option>
                        <option value="ΔΕ">ΔΕ</option>
                        <option value="ΟΚ">ΟΚ</option>
                        <option value="ΟΧΙ ΟΚ">ΟΧΙ ΟΚ</option>
                      </select>
                    </td>
                    <td className="table-cell">
                  <input
                    type="text"
                    value={row.input2}
                    onChange={(e) => handleChange(index, "input2", e.target.value)}
                    className="input-style"
                    onKeyDown={(e) => handleEnterPress(e, index, true)}
                  />
                </td>

                </tr>
);
}

export default Row8;





