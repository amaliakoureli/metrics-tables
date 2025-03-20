import React, {useState} from "react";
import "./Row4.css";

function Row13({ row, 
                index, 
                handleEnterPress,
                toggleDropdown13,
                dropdown13Visible, 
                setDropdown13Visible,
}){

    const [dropdown13Data, setDropdown13Data] = useState([
        { text1: "α", text2: "Τάση έναρξης εφεδρικής λειτουργίας: > 0.6 x μέγιστη τάση λειτουργίας (σε V AC).", input1: "", input2: "", text3: ""},
        { text1: "β", text2: "Τάση παύσης εφεδρικής λειτουργίας και έναρξης φόρτισης: > 0.85 x ελάχιστη τάση λειτουργίας (σε V AC).", input1: "", input2: "", text3: ""},
      ]);

      const handleDropdown13Change = (rowIndex, field, value) => {
        const newDropdown13Data = [...dropdown13Data];
        newDropdown13Data[rowIndex][field] = value;
        setDropdown13Data(newDropdown13Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown13(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown13Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown13Visible === index && (
      <table className="table">
        <tbody>
          {dropdown13Data.map((dropdownRow, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* FIRST ROW */}
              <tr className="table-row">
                <td className="table-cell" rowSpan="2">{dropdownRow.text1}</td>
                <td className="table-cell" rowSpan="2">{dropdownRow.text2}</td>
                <td className="table-cell">
                  <input
                    type="text"
                    value={dropdownRow.input1}
                    onChange={(e) => handleDropdown13Change(rowIndex, "input1", e.target.value)}
                    className="input-style dropdown12-input1"
                    onKeyDown={(e) =>
                      handleEnterPress(e, index, true, true, rowIndex, "dropdown13")
                    }
                  />
                </td>
              </tr>

            {/* SECOND ROW */}
            <tr className="table-row">
            <td className="table-cell" colSpan="2">
            <input
                type="text"
                value={"Όριο = " + dropdownRow.text3.replace("Όριο = ", "")}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    const prefix = "Όριο = ";
                    
                    // Ensure "Όριο = " is always at the start and only the rest is editable
                    if (inputValue.startsWith(prefix)) {
                    handleDropdown13Change(rowIndex, "text3", inputValue);
                    } else {
                    handleDropdown13Change(rowIndex, "text3", prefix + inputValue);
                    }
                }}
                onKeyDown={(e) => {
                    const prefix = "Όριο = ";
                    const cursorPos = e.target.selectionStart;

                    // Prevent Backspace/Delete from removing the "Όριο = " part
                    if (
                    (e.key === "Backspace" && cursorPos <= prefix.length) ||
                    (e.key === "Delete" && cursorPos < prefix.length)
                    ) {
                    e.preventDefault();
                    }
                }}
                className="input-style dropdown13-input1"
                />


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

export default Row13;





