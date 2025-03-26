import React, {useState} from "react";
import "./Row4.css";

function Row22({ row, 
                index, 
                handleEnterPress,
                toggleDropdown22,
                dropdown22Visible, 
                setDropdown22Visible,
}){

    const [dropdown22Data, setDropdown22Data] = useState([
        { text1: "α", text2: "Δοκιμή κυκλώματος Remote (αν υπάρχει)", input1: "", input2: ""},
        { text1: "β", text2: "Δοκιμή κυκλώματος Dali (αν υπάρχει)", input1: ""},
        { text1: "γ", text2: "Δοκιμή κυκλώματος Wireless (αν υπάρχει)", input1: ""},
        { text1: "δ", text2: "Δοκιμή κυκλώματος Address (αν υπάρχει)", input1: ""},
        { text1: "ε", text2: "Δοκιμή κυκλώματος EIBus (αν υπάρχει)", input1: ""},
        { text1: "ζ", text2: "Δοκιμή κυκλώματος FAULT (αν υπάρχει)", input1: "", input2: ""},

      ]);

      const handleDropdown22Change = (rowIndex, field, value) => {
        const newDropdown22Data = [...dropdown22Data];
        newDropdown22Data[rowIndex][field] = value;
        setDropdown22Data(newDropdown22Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown22(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown22Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown22Visible === index && (
      <table className="table">
        <tbody>
        {dropdown22Data.map((dropdownRow, rowIndex) => (
            <React.Fragment key={rowIndex}>
            <tr className="table-row">
                <td className="table-cell">{dropdownRow.text1}</td>
                <td className="table-cell">{dropdownRow.text2}</td>

                {(dropdownRow.text1 === "α" || dropdownRow.text1 === "ζ") ? (
                <>
                    <select
                    value={dropdownRow.input1}
                    onChange={(e) => handleDropdown22Change(rowIndex, "input1", e.target.value)}
                    className="input-style dropdown22-input1 smallerSize"
                    onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown22")}
                    >
                    <option value="ΔΑ">Δ.Α.</option>
                    <option value="ΔΕ">Δ.Ε.</option>
                    <option value="ΟΚ">ΟΚ</option>
                    <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                    </select>
                    <select
                    value={dropdownRow.input2}
                    onChange={(e) => handleDropdown22Change(rowIndex, "input2", e.target.value)}
                    className="input-style dropdown22-input2 smallerSize"
                    onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown22")}
                    id={rowIndex === dropdown22Data.length - 1 && !dropdownRow.input1 ? "dropdown22-last" : undefined}
                    >
                    <option value="ΔΑ">Δ.Α.</option>
                    <option value="ΔΕ">Δ.Ε.</option>
                    <option value="ΟΚ">ΟΚ</option>
                    <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                    </select>
                </>
                ) : (
                <select
                    value={dropdownRow.input1}
                    onChange={(e) => handleDropdown22Change(rowIndex, "input1", e.target.value)}
                    className="input-style dropdown22-input1"
                    onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown22")}
                >
                    <option value="ΔΑ">Δ.Α.</option>
                    <option value="ΔΕ">Δ.Ε.</option>
                    <option value="ΟΚ">ΟΚ</option>
                    <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                </select>
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

export default Row22;





