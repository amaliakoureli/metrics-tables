import React, { useState } from "react";
import "../../../assets/styles/styles.css";
import Dropdown28Data from "../TablesData/Dropdown28Data";

function Row28({
  row,
  index,
  handleEnterPress,
  toggleDropdown28,
  dropdown28Visible,
  setDropdown28Visible,
}) {
  const [dropdown28Data, setDropdown28Data] = useState(Dropdown28Data);

  const handleDropdown28Change = (rowIndex, field, value) => {
    const newDropdown28Data = [...dropdown28Data];
    newDropdown28Data[rowIndex][field] = value;
    setDropdown28Data(newDropdown28Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown28(index)}
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
          dropdown28Visible === index ? "visible" : "hidden"
        } dropdown25`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown28Visible === index && (
            <table>
              <tbody className="dropdown25">
                {dropdown28Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr className="table-row">
                      <td className="table-cell">{dropdownRow.text1}</td>
                      <td className="table-cell">
                        {" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: dropdownRow.text2,
                          }}
                        />
                      </td>
                      <div className="dropdownInputs-alignment">
                        {dropdownRow.text1 === "α" ||
                        dropdownRow.text1 === "β" ? (
                          <>
                            <td className="table-cell">
                              <select
                                value={dropdownRow.input1}
                                onChange={(e) =>
                                  handleDropdown28Change(
                                    rowIndex,
                                    "input1",
                                    e.target.value
                                  )
                                }
                                className="controller dropdown28-Dselect1"
                                onKeyDown={(e) =>
                                  handleEnterPress(e, index, true, "dropdown28")
                                }
                              >
                                <option value=""></option>
                                <option value="Δ.Α.">Δ.Α.</option>
                                <option value="Δ.Ε.">Δ.Ε.</option>
                                <option value="ΟΚ">ΟΚ</option>
                                <option value="NOT ΟΚ">NOT ΟΚ</option>
                              </select>
                            </td>
                            <td className="table-cell">
                              <select
                                value={dropdownRow.input2}
                                onChange={(e) =>
                                  handleDropdown28Change(
                                    rowIndex,
                                    "input2",
                                    e.target.value
                                  )
                                }
                                className="controller dropdown28-Dselect2"
                                onKeyDown={(e) =>
                                  handleEnterPress(e, index, true, "dropdown28")
                                }
                              >
                                <option value=""></option>
                                <option value="Δ.Α.">Δ.Α.</option>
                                <option value="Δ.Ε.">Δ.Ε.</option>
                                <option value="ΟΚ">ΟΚ</option>
                                <option value="NOT ΟΚ">NOT ΟΚ</option>
                              </select>
                            </td>
                          </>
                        ) : (
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown28Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown28-select1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown28")
                              }
                              id={
                                rowIndex === dropdown28Data.length - 1 &&
                                !dropdownRow.input1
                                  ? "dropdown28-last"
                                  : undefined
                              }
                            >
                              <option value=""></option>
                              <option value="Δ.Α.">Δ.Α.</option>
                              <option value="Δ.Ε.">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="NOT ΟΚ">NOT ΟΚ</option>
                            </select>
                          </td>
                        )}
                      </div>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </td>
      </tr>
    </>
  );
}

export default Row28;
