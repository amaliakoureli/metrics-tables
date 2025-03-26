import React, {useState} from "react";
import "./Row4.css";

function Row18({ row, 
                index, 
                handleEnterPress,
                toggleDropdown18,
                dropdown18Visible, 
                setDropdown18Visible,
}){

    const [dropdown18Data, setDropdown18Data] = useState([
        { text1: "α", text2: "Τάση μικροελεγκτή (VDC)στο δίκτυο (τάση μπαταρίας - ονομαστική τιμή)", input1: "", input2: ""},
        { text1: "β", text2: "Τάση μικροελεγκτή (VDC)στο δίκτυο (τάση μπαταρίας - πριν την αποκοπή)", input1: "", input2: ""},
        { text1: "γ", text2: "Τάση μικροελεγκτή (VDC)στην εφεδρεία (τάση μπαταρίας - ονομαστική τιμή)", input1: "", input2: ""},
        { text1: "δ", text2: "Τάση μικροελεγκτή (VDC)στην εφεδρεία (τάση μπαταρίας - πριν την αποκοπή)", input1: "", input2: ""},
        { text1: "ε", text2: "Τάση στο κύκλωμα (διαιρέτη) ύπαρξης VDC (πρέπει να είναι > 70% x Τάση Επεξεργαστή).", input1: "", input2: ""},

      ]);

      const handleDropdown18Change = (rowIndex, field, value) => {
        const newDropdown18Data = [...dropdown18Data];
        newDropdown18Data[rowIndex][field] = value;
        setDropdown18Data(newDropdown18Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown18(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown18Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown18Visible === index && (
      <table className="table">
        <tbody>
          {dropdown18Data.map((dropdownRow, rowIndex) => (
            <React.Fragment key={rowIndex}>

              <tr className="table-row">
                <td className="table-cell" >{dropdownRow.text1}</td>
                <td className="table-cell" >{dropdownRow.text2}</td>
                <td className="table-cell">
                  <input
                    type="text"
                    value={dropdownRow.input1}
                    onChange={(e) => handleDropdown18Change(rowIndex, "input1", e.target.value)}
                    className="input-style dropdown18-input1"
                    onKeyDown={(e) =>
                      handleEnterPress(e, index, true,"dropdown18")
                    }
                  />
                </td>
                <td className="table-cell">
                  <input
                    type="text"
                    value={dropdownRow.input2}
                    onChange={(e) => handleDropdown18Change(rowIndex, "input2", e.target.value)}
                    className="input-style dropdown18-input2"
                    onKeyDown={(e) =>
                      handleEnterPress(e, index, true, "dropdown18")
                    }
                    id={rowIndex === dropdown18Data.length - 1 && !dropdownRow.input2 ? "dropdown18-last" : undefined}
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

export default Row18;





