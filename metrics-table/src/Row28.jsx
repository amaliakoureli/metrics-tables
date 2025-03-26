import React, {useState} from "react";
import "./Row4.css";

function Row28({ row, 
                index, 
                handleEnterPress,
                toggleDropdown28,
                dropdown28Visible, 
                setDropdown28Visible,
}){

    const [dropdown28Data, setDropdown28Data] = useState([
        { text1: "α", text2: "Αρμονικές ρεύματος", input1: "", input2: ""},
        { text1: "β", text2: "Διαταραχές", input1: "", input2: ""},
        { text1: "γ", text2: "Surge", input1: ""},
        { text1: "δ", text2: "Burst", input1: ""},
        { text1: "ε", text2: "ESD", input1: ""},
        { text1: "ζ", text2: "Ηλεκτρική αντοχή μεταξύ (L + N)->(Γείωση / μεταλλικά εξαρτήματα)", input1: ""},
        { text1: "η", text2: "Ηλεκτρική αντοχή μεταξύ (L + N)->(επαφές εισόδου / εξόδου, A + B, C1 + CA...κ.τ.λ)", input1: ""},
        { text1: "θ", text2: "Έλεγχος Γείωσης", input1: ""},
        { text1: "ι", text2: "Αντίσταση μόνωσης ανάμεσα στα καλώδια (L + N)->(+- βύσμα μπαταρίας). Όριο :> 2 ΜΩ", input1: ""},
      ]);

      const handleDropdown28Change = (rowIndex, field, value) => {
        const newDropdown28Data = [...dropdown28Data];
        newDropdown28Data[rowIndex][field] = value;
        setDropdown28Data(newDropdown28Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown28(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown28Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown28Visible === index && (
      <table className="table">
        <tbody>
               {dropdown28Data.map((dropdownRow, rowIndex) => (
                   <React.Fragment key={rowIndex}>
                   <tr className="table-row">
                       <td className="table-cell">{dropdownRow.text1}</td>
                       <td className="table-cell">{dropdownRow.text2}</td>
       
                       {(dropdownRow.text1 === "α" || dropdownRow.text1 === "β") ? (
                       <>
                           <td>
                           <select
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown28Change(rowIndex, "input1", e.target.value)}
                            className="input-style dropdown28-input1"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown28")}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                           </td>
                           <td>
                           <select
                            value={dropdownRow.input2}
                            onChange={(e) => handleDropdown28Change(rowIndex, "input2", e.target.value)}
                            className="input-style dropdown28-input2"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown28")}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                           </td>
                       </>
                       ) : (
                         <td>
                       <select
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown28Change(rowIndex, "input1", e.target.value)}
                            className="input-style dropdown28-input1"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown28")}
                            id={rowIndex === dropdown28Data.length - 1 && !dropdownRow.input1 ? "dropdown28-last" : undefined}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                       </td>
                       )}
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

export default Row28;





