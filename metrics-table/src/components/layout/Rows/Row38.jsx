import React, { useState, useRef } from "react";
import "../../../assets/styles/Row4.css";
import Dropdown38Data from "../TablesData/Dropdown38Data";

function Row38({
  row,
  index,
  handleEnterPress,
  toggleDropdown38,
  dropdown38Visible,
  firstDropdown38InputRef,
}) {
  const [dropdown38Data, setDropdown38Data] = useState(Dropdown38Data);

  const handleDropdown38Change = (rowIndex, inputIndex, value) => {
    const newDropdown38Data = [...dropdown38Data];
    newDropdown38Data[rowIndex][inputIndex] = value;
    setDropdown38Data(newDropdown38Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown38(index)}
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
        className={`table-row ${
          dropdown38Visible === index ? "visible" : "hidden"
        } dropdown38`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown38Visible === index && (
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <div className="inputs-alignment">
                    <td colSpan={3}>
                      <th>1Η</th>
                      <th>3Η</th>
                      <th>8Η</th>
                    </td>
                    <td colSpan={3}>
                      <th>1Η</th>
                      <th>3Η</th>
                      <th>8Η</th>
                    </td>
                  </div>
                </tr>
              </thead>
              <tbody className="dropdown38">
                {dropdown38Data.map((dropdownRow, rowIndex) => (
                  <tr key={rowIndex} className="table-row">
                    <td className="table-cell">{dropdownRow.text1}</td>
                    <td className="table-cell">{dropdownRow.text2}</td>
                    <div className="dropdownInputs-alignment">
                      {dropdownRow.text1 === "α" ? (
                        <>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                              ref={firstDropdown38InputRef}
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input5}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input6}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                        </>
                      ) : dropdownRow.text1 === "β" ? (
                        <>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input5}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input6}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value=""></option>
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input5}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input6}
                              onChange={(e) =>
                                handleDropdown38Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown38-select6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown38")
                              }
                            >
                              <option value="ΔΑ">Δ.Α.</option>
                              <option value="ΔΕ">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                        </>
                      )}
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

export default Row38;
