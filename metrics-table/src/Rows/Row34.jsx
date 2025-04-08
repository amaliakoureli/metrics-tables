import React, { useState, useRef } from "react";
import "./Row4.css";
import Dropdown34Data from "../TablesData/Dropdown34Data";

function Row34({
  row,
  index,
  handleEnterPress,
  toggleDropdown34,
  dropdown34Visible,
  firstDropdown34InputRef,
}) {
  const [dropdown34Data, setDropdown34Data] = useState(Dropdown34Data);

  const handleDropdown34Change = (rowIndex, inputIndex, value) => {
    const newDropdown34Data = [...dropdown34Data];
    newDropdown34Data[rowIndex][inputIndex] = value;
    setDropdown34Data(newDropdown34Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown34(index)}
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
          dropdown34Visible === index ? "visible" : "hidden"
        } dropdown34`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown34Visible === index && (
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
              <tbody className="dropdown34">
                {dropdown34Data.map((dropdownRow, rowIndex) => (
                  <tr key={rowIndex} className="table-row">
                    <td className="table-cell">{dropdownRow.text1}</td>
                    <td className="table-cell">
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dropdownRow.text2,
                        }}
                      />
                    </td>
                    <div className="inputs-alignment">
                      {dropdownRow.text1 === "α" ? (
                        <>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown34Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
                              }
                              ref={firstDropdown34InputRef}
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
                              }
                            >
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown34Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown34Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown34Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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
                                handleDropdown34Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown34-select6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown34")
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

export default Row34;
