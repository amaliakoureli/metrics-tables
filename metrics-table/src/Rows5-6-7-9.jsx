import React, {useState,useRef} from "react";
import "./Rows5-6-7-9.css";


function Rows5679({ row, index,  handleChange, handleEnterPress}){
      
return(
<tr key={row.id} className="table-row" data-row={index === 0 ? "0" : undefined}>
                    <td className="table-cell">{row.id}</td>
                    <td className="table-cell">{row.text}</td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input1}
                        onChange={(e) => handleChange(index, "input1", e.target.value)}
                        className="input-style"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
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
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input3}
                        onChange={(e) => handleChange(index, "input3", e.target.value)}
                        className="input-style"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                       />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input4}
                        onChange={(e) => handleChange(index, "input4", e.target.value)}
                        className="input-style"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                </tr>
);
}

export default Rows5679;





