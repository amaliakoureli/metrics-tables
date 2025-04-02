import React, {useState,useRef} from "react";
import "./FourInputs.css";


function Rows5679({ row, index,  handleChange, handleEnterPress}){
      
return(
<tr key={row.id} data-row={index === 0 ? "0" : undefined}>
                    <td className="table-cell column-id">{row.id}</td>
                    <td className="table-cell column-text" colSpan={2}>{row.text}</td>
                    <div>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input1}
                        onChange={(e) => handleChange(index, "input1", e.target.value)}
                        className="controller column-inputs input1"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input2}
                        onChange={(e) => handleChange(index, "input2", e.target.value)}
                        className="controller column-inputs input2"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input3}
                        onChange={(e) => handleChange(index, "input3", e.target.value)}
                        className="controller column-inputs input3"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                       />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input4}
                        onChange={(e) => handleChange(index, "input4", e.target.value)}
                        className="controller column-inputs input4"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    </div>
                </tr>
);
}

export default Rows5679;





