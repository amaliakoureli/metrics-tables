import React, {useState} from "react";
import "./SingleSelect.css"


function RowsSingleOk({ row, 
                index, 
                handleEnterPress,
                handleChange,
}){
    
      
return(
<tr key={row.id} className="table-row" data-row={index === 0 ? "0" : undefined}>
                    <td className="table-cell column-id">{row.id}</td>
                    <td className="table-cell column-text" colSpan={2}>{row.text}</td>
                    <td className="table-cell">
                          <select
                            value={row.input1}
                            onChange={(e) => handleChange(index, "input1", e.target.value)}
                            className="controller  sel1"
                            onKeyDown={(e) => handleEnterPress(e, index, true)}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                    </td>

                </tr>
);
}

export default RowsSingleOk;





