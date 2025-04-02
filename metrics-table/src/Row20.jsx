import React, {useState} from "react";
import "./Row4.css";

function Row20({ row, 
                index, 
                handleEnterPress,
                toggleDropdown20,
                dropdown20Visible, 
                setDropdown20Visible,
}){

    const [dropdown20Data, setDropdown20Data] = useState([
        { text1: "α", text2: "Στο δίκτυο (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED)", input1: "", input2: "", input3: ""},
        { text1: "β", text2: "Στην εφεδρεία (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED) (Για 1 ώρα αυτονομία)", input1: "", input2: "", input3: ""},
        { text1: "γ", text2: "Στην εφεδρεία (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED) (Για 3 ώρες αυτονομία)", input1: "", input2: "", input3: ""},
        { text1: "δ", text2: "Στην εφεδρεία (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED) (Για 8 ώρες αυτονομία)", input1: "", input2: "", input3: ""},
      ]);

      const handleDropdown20Change = (rowIndex, field, value) => {
        const newDropdown20Data = [...dropdown20Data];
        newDropdown20Data[rowIndex][field] = value;
        setDropdown20Data(newDropdown20Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown20(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown20Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown20Visible === index && (
      <table className="table">
        <tbody>
          {dropdown20Data.map((dropdownRow, rowIndex) => (
            <React.Fragment key={rowIndex}>

              <tr className="table-row">
                <td className="table-cell" rowSpan="2">{dropdownRow.text1}</td>
                <td className="table-cell"rowSpan="2" >{dropdownRow.text2}</td>
                <td className="table-cell">
                  <input
                    type="text"
                    value={"Υπολογισμός: " + dropdownRow.input1.replace("Υπολογισμός: ", "")}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const prefix = "Υπολογισμός: ";
                      
                      if (inputValue.startsWith(prefix)) {
                        handleDropdown20Change(rowIndex, "input1", inputValue);
                      } else {
                        handleDropdown20Change(rowIndex, "input1", prefix + inputValue);
                      }
                    }}
                    onKeyDown={(e) => {
                      const prefix = "Υπολογισμός: ";
                      const cursorPos = e.target.selectionStart;

                      if (
                        (e.key === "Backspace" && cursorPos <= prefix.length) ||
                        (e.key === "Delete" && cursorPos < prefix.length)
                      ) {
                        e.preventDefault();
                      }
                      handleEnterPress(e, index, true, "dropdown20");
                    }}
                    className="controller dropdown20-input1"
                  />
                   <input
                    type="text"
                    value={"Μέτρηση: " + dropdownRow.input2.replace("Μέτρηση: ", "")}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const prefix = "Μέτρηση: ";
                      
                      if (inputValue.startsWith(prefix)) {
                        handleDropdown20Change(rowIndex, "input2", inputValue);
                      } else {
                        handleDropdown20Change(rowIndex, "input2", prefix + inputValue);
                      }
                    }}
                    onKeyDown={(e) => {
                      const prefix = "Μέτρηση: ";
                      const cursorPos = e.target.selectionStart;

                      if (
                        (e.key === "Backspace" && cursorPos <= prefix.length) ||
                        (e.key === "Delete" && cursorPos < prefix.length)
                      ) {
                        e.preventDefault();
                      }
                      handleEnterPress(e, index, true, "dropdown20");
                    }}
                    className="controller dropdown20-input2"
                  />
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">
                <input
                    type="text"
                    value={"Στην οδηγία: " + dropdownRow.input3.replace("Στην οδηγία: ", "")}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const prefix = "Στην οδηγία: ";
                      
                      if (inputValue.startsWith(prefix)) {
                        handleDropdown20Change(rowIndex, "input3", inputValue);
                      } else {
                        handleDropdown20Change(rowIndex, "input3", prefix + inputValue);
                      }
                    }}
                    onKeyDown={(e) => {
                      const prefix = "Στην οδηγία: ";
                      const cursorPos = e.target.selectionStart;

                      if (
                        (e.key === "Backspace" && cursorPos <= prefix.length) ||
                        (e.key === "Delete" && cursorPos < prefix.length)
                      ) {
                        e.preventDefault();
                      }
                      handleEnterPress(e, index, true, "dropdown20");
                    }}
                    className="controllere dropdown20-input3"
                    id={rowIndex === dropdown20Data.length - 1 && !dropdownRow.input3 ? "dropdown20-last" : undefined}
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

export default Row20;





