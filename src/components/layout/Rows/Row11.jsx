import React, { useState } from "react";
import "../../../assets/styles/styles.css";
import Dropdown11Data from "../TablesData/Dropdown11Data";

function Row11({
  row,
  index,
  handleEnterPress,
  toggleDropdown11,
  dropdown11Visible,
  setDropdown11Visible,
}) {
  const [dropdown11Data, setDropdown11Data] = useState(Dropdown11Data);

  const handleDropdown11Change = (rowIndex, field, value) => {
    const newDropdown11Data = [...dropdown11Data];
    newDropdown11Data[rowIndex][field] = value;
    setDropdown11Data(newDropdown11Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell">
          <button
            onClick={() => toggleDropdown11(index)}
            className="dropdown-button column-id"
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
          dropdown11Visible === index ? "visible" : "hidden"
        } dropdown11`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown11Visible === index && (
            <table>
              <tbody className="dropdown11">
                {dropdown11Data.map((dropdownRow, rowIndex) => (
                  <tr key={rowIndex}>
                    <td
                      className={`table-cell ${
                        rowIndex < 3
                          ? "blue-text"
                          : rowIndex < 6
                          ? "green-text"
                          : "brown-text"
                      }`}
                    >
                      {dropdownRow.text1}
                    </td>
                    <td
                      className={`table-cell ${
                        rowIndex < 3
                          ? "blue-text"
                          : rowIndex < 6
                          ? "green-text"
                          : "brown-text"
                      }`}
                    >
                      {dropdownRow.text2}
                    </td>
                    <div className="dropdownInputs-alignment ">
                      {dropdownRow.text1 === "β" ||
                      dropdownRow.text1 === "γ" ||
                      dropdownRow.text1 === "ε" ||
                      dropdownRow.text1 === "ζ" ||
                      dropdownRow.text1 === "θ" ||
                      dropdownRow.text1 === "ι" ? (
                        <td className="table-cell">
                          <input
                            type="text"
                            value={dropdownRow.input1}
                            onChange={(e) =>
                              handleDropdown11Change(
                                rowIndex,
                                "input1",
                                e.target.value
                              )
                            }
                            className={`controller single-dropdown11-input1 ${
                              rowIndex < 3
                                ? "blue-text"
                                : rowIndex < 6
                                ? "green-text"
                                : "brown-text"
                            }`}
                            id={
                              rowIndex === dropdown11Data.length - 1 &&
                              !dropdownRow.input2
                                ? "dropdown11-last"
                                : undefined
                            }
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown11")
                            }
                          />
                        </td>
                      ) : (
                        <>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown11Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className={`controller dropdown11-input1 ${
                                rowIndex < 3
                                  ? "blue-text"
                                  : rowIndex < 6
                                  ? "green-text"
                                  : "brown-text"
                              }`}
                              id={
                                rowIndex === dropdown11Data.length - 1 &&
                                !dropdownRow.input2
                                  ? "dropdown11-last"
                                  : undefined
                              }
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown11")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <select
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown11Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className={`controller dropdown11-input2 ${
                                rowIndex < 3
                                  ? "blue-text"
                                  : rowIndex < 6
                                  ? "green-text"
                                  : "brown-text"
                              }`}
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown11")
                              }
                            >
                              <option value="Δ.Α.">Δ.Α.</option>
                              <option value="Δ.Ε.">Δ.Ε.</option>
                              <option value="ΟΚ">ΟΚ</option>
                              <option value="NOT ΟΚ">NOT ΟΚ</option>
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

export default Row11;
