import React, {useState,useRef} from "react";



function Row39({ row, index,  handleChange, handleEnterPress}){
      
return(
<tr key={row.id} className="table-row" data-row={index === 0 ? "0" : undefined}>
                    <td className="table-cell">{row.id}</td>
                    <td className="table-cell">{row.text}</td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input1}
                        onChange={(e) => handleChange(index, "input1", e.target.value)}
                        className="controller"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input2}
                        onChange={(e) => handleChange(index, "input2", e.target.value)}
                        className="controller"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input3}
                        onChange={(e) => handleChange(index, "input3", e.target.value)}
                        className="controller"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                       />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input4}
                        onChange={(e) => handleChange(index, "input4", e.target.value)}
                        className="controller"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input5}
                        onChange={(e) => handleChange(index, "input5", e.target.value)}
                        className="controller"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                        type="text"
                        value={row.input6}
                        onChange={(e) => handleChange(index, "input6", e.target.value)}
                        className="controller"
                        onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                    </td>
                </tr>
);
}

export default Row39;





