import React, {useState} from "react";
import "./Row4.css";

function Row12({ row, 
                index, 
                handleEnterPress,
                toggleDropdown12,
                dropdown12Visible, 
                setDropdown12Visible,
}){

    const [dropdown12Data, setDropdown12Data] = useState([
        { text1: "α", text2: "Τάση έναρξης εφεδρικής λειτουργίας: > 0.6 x μέγιστη τάση λειτουργίας (σε V AC).", input1: "", input2: "", text3: "Όριο = 144 V AC"},
        { text1: "β", text2: "Τάση παύσης εφεδρικής λειτουργίας και έναρξης φόρτισης: > 0.85 x ελάχιστη τάση λειτουργίας (σε V AC).", input1: "", input2: "", text3: "Όριο = 187 V AC"},
      ]);

      const handleDropdown12Change = (rowIndex, field, value) => {
        const newDropdown12Data = [...dropdown12Data];
        newDropdown12Data[rowIndex][field] = value;
        setDropdown12Data(newDropdown12Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown12(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown12Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown12Visible === index && (
      <table className="table">
        <tbody>
          {dropdown12Data.map((dropdownRow, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* FIRST ROW */}
              <tr className="table-row">
                <td className="table-cell" rowSpan="2">{dropdownRow.text1}</td>
                <td className="table-cell" rowSpan="2">{dropdownRow.text2}</td>
                <td className="table-cell">
                  <input
                    type="text"
                    value={dropdownRow.input1}
                    onChange={(e) => handleDropdown12Change(rowIndex, "input1", e.target.value)}
                    className="input-style dropdown12-input1"
                    onKeyDown={(e) =>
                      handleEnterPress(e, index, true, true, rowIndex, "dropdown12")
                    }
                  />
                </td>
                <td className="table-cell">
                  <input
                    type="text"
                    value={dropdownRow.input2}
                    onChange={(e) => handleDropdown12Change(rowIndex, "input2", e.target.value)}
                    className="input-style dropdown12-input2"
                    onKeyDown={(e) =>
                      handleEnterPress(e, index, true, true, rowIndex, "dropdown12")
                    }
                  />
                </td>
              </tr>

              {/* SECOND ROW */}
              <tr className="table-row">
                <td className="table-cell" colSpan="2">
                    {dropdownRow.text3}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    )}
  </td>
</tr>

</>
)
}

export default Row12;





