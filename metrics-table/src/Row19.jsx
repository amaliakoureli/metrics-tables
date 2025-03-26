import React, { useState } from "react";
import "./Row4.css";

function Row19({ row, index, handleEnterPress, toggleDropdown19, dropdown19Visible }) {
  const [dropdown19Data, setDropdown19Data] = useState([
    { text1: "α", text2: "Απομάκρυνση μπαταρίας και έλεγχος εμφάνισης σφάλματος", input1: "", input2: "" },
    { text1: "β", text2: "Lamp Test με μπαταρία και χωρίς μπαταρία", input1: "", input2: "", input3: "", input4: "" }
  ]);

  const handleDropdown19Change = (rowIndex, field, value) => {
    const newDropdown19Data = [...dropdown19Data];
    newDropdown19Data[rowIndex][field] = value;
    setDropdown19Data(newDropdown19Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="fourth-row">
        <td className="table-cell">
          <button onClick={() => toggleDropdown19(index)} className="dropdown-button-style">
            {row.id}
          </button>
        </td>
        <td className="table-cell">{row.text}</td>
      </tr>
      <tr key={row.id + "-subrow"} className={`table-row ${dropdown19Visible === index ? 'visible' : 'hidden'}`}>
        <td colSpan="4" className="table-cell">
          {dropdown19Visible === index && (
            <table className="table">
              <tbody>
                {dropdown19Data.map((dropdownRow, rowIndex) => (
                  <tr className="table-row" key={rowIndex}>
                    <td className="table-cell">{dropdownRow.text1}</td>
                    <td className="table-cell">{dropdownRow.text2}</td>
                    <td className="table-cell">
                      {dropdownRow.text1 === "β" ? (
                        <>
                          <select
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown19Change(rowIndex, "input1", e.target.value)}
                            className="input-style dropdown19-input1 smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown19")}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                          /
                          <select
                            value={dropdownRow.input2}
                            onChange={(e) => handleDropdown19Change(rowIndex, "input2", e.target.value)}
                            className="input-style dropdown19-input2 smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown19")}
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
                          onChange={(e) => handleDropdown19Change(rowIndex, "input1", e.target.value)}
                          className="input-style dropdown19-input1"
                          onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown19")}
                        >
                          <option value="ΔΑ">Δ.Α.</option>
                          <option value="ΔΕ">Δ.Ε.</option>
                          <option value="ΟΚ">ΟΚ</option>
                          <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                        </select>
                      )}
                    </td>
                    <td className="table-cell">
                      {dropdownRow.text1 === "β" ? (
                        <>
                          <select
                            value={dropdownRow.input3}
                            onChange={(e) => handleDropdown19Change(rowIndex, "input3", e.target.value)}
                            className="input-style dropdown19-input3 smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown19")}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                          /
                          <select
                            value={dropdownRow.input4}
                            onChange={(e) => handleDropdown19Change(rowIndex, "input4", e.target.value)}
                            className="input-style dropdown19-input4 smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown19")}
                            id={rowIndex === dropdown19Data.length - 1 && !dropdownRow.input4 ? "dropdown19-last" : undefined}
                          >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                        </>
                      ) : (
                        <select
                          value={dropdownRow.input2}
                          onChange={(e) => handleDropdown19Change(rowIndex, "input2", e.target.value)}
                          className="input-style dropdown19-input2 "
                          onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown19")}
                        >
                          <option value="ΔΑ">Δ.Α.</option>
                          <option value="ΔΕ">Δ.Ε.</option>
                          <option value="ΟΚ">ΟΚ</option>
                          <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                        </select>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </td>
      </tr>
    </>
  );
}

export default Row19;
