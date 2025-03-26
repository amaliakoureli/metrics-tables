import React, {useState} from "react";
import "./Row4.css";

function Row21({ row, 
                index, 
                handleEnterPress,
                toggleDropdown21,
                dropdown21Visible, 
                setDropdown21Visible,
}){

    const [dropdown21Data, setDropdown21Data] = useState([
        { text1: "α", text2: "Ενώ δουλεύει σαν συνεχούς", input1: ""},
        { text1: "β", text2: "Ενώ δουλεύει σαν μη συνεχούς και δοθεί LAMP TEST", input1: ""},
      ]);

      const handleDropdown21Change = (rowIndex, field, value) => {
        const newDropdown21Data = [...dropdown21Data];
        newDropdown21Data[rowIndex][field] = value;
        setDropdown21Data(newDropdown21Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
  <td className="table-cell">
    <button onClick={() => toggleDropdown21(index)} className="dropdown-button-style">
      {row.id}
    </button>
  </td>
  <td className="table-cell">{row.text}</td>
</tr>
<tr key={row.id + "-subrow"} className={`table-row ${dropdown21Visible === index ? 'visible' : 'hidden'}`}>
  <td colSpan="4" className="table-cell">
    {dropdown21Visible === index && (
      <table className="table">
        <tbody>
          {dropdown21Data.map((dropdownRow, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr className="table-row">
                <td className="table-cell">{dropdownRow.text1}</td>
                <td className="table-cell">{dropdownRow.text2}</td>
                <td className="table-cell">
                <select
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown21Change(rowIndex, "input1", e.target.value)}
                            className="input-style dropdown21-input1"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown21")}
                            id={rowIndex === dropdown21Data.length - 1 && !dropdownRow.input1? "dropdown21-last" : undefined}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
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

export default Row21;





