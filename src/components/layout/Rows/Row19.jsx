import React, { useState } from "react";
import "../../../assets/styles/styles.css";
import Dropdown19Data from "../TablesData/Dropdown19Data";

function Row19({
  row,
  index,
  handleEnterPress,
  toggleDropdown19,
  dropdown19Visible,
}) {
  const [dropdown19Data, setDropdown19Data] = useState(Dropdown19Data);

  const handleDropdown19Change = (rowIndex, field, value) => {
    const newDropdown19Data = [...dropdown19Data];
    newDropdown19Data[rowIndex][field] = value;
    setDropdown19Data(newDropdown19Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown19(index)}
            className="dropdown-button"
          >
            {row.id}
          </button>
        </td>
        <td className="table-cell column-text" colSpan={3}>
          {row.text}
        </td>
      </tr>
      <tr
        key={row.id + "-subrow"}
        className={`${
          dropdown19Visible === index ? "visible" : "hidden"
        } dropdown19`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown19Visible === index && (
            <table>
              <tbody className="dropdown19">
                {dropdown19Data.map((dropdownRow, rowIndex) => (
                  <tr className="table-row" key={rowIndex}>
                    <td className="table-cell">{dropdownRow.text1}</td>
                    <td className="table-cell">{dropdownRow.text2}</td>
                    <div className="dropdownInputs-alignment">
                      <td className="table-cell">
                        {dropdownRow.text1 === "β" ? (
                          <div className="doubleSelect19-alignment">
                            <select
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown19Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown19-Dinput1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown19")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                            /
                            <select
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown19Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown19-Dinput2 "
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown19")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </div>
                        ) : (
                          <select
                            value={dropdownRow.input1}
                            onChange={(e) =>
                              handleDropdown19Change(
                                rowIndex,
                                "input1",
                                e.target.value
                              )
                            }
                            className="controller dropdown19-input1"
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown19")
                            }
                          >
                            <option value=""></option>
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                        )}
                      </td>
                      <td className="table-cell">
                        {dropdownRow.text1 === "β" ? (
                          <div className="doubleSelect19-alignment">
                            <select
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown19Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown19-Dinput3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown19")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                            /
                            <select
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown19Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown19-Dinput4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown19")
                              }
                              id={
                                rowIndex === dropdown19Data.length - 1 &&
                                !dropdownRow.input4
                                  ? "dropdown19-last"
                                  : undefined
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </div>
                        ) : (
                          <select
                            value={dropdownRow.input2}
                            onChange={(e) =>
                              handleDropdown19Change(
                                rowIndex,
                                "input2",
                                e.target.value
                              )
                            }
                            className="controller dropdown19-input2 "
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown19")
                            }
                          >
                            <option value=""></option>
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                          </select>
                        )}
                      </td>
                    </div>
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
