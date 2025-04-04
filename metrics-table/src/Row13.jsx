import React, { useState } from "react";
import "./Row4.css";

function Row13({
  row,
  index,
  handleEnterPress,
  toggleDropdown13,
  dropdown13Visible,
  setDropdown13Visible,
}) {
  const [dropdown13Data, setDropdown13Data] = useState([
    {
      text1: "α",
      text2:
        "Τάση έναρξης εφεδρικής λειτουργίας: > 0.6 x μέγιστη τάση λειτουργίας (σε V AC).",
      input1: "",
      text3: "",
    },
    {
      text1: "β",
      text2:
        "Τάση παύσης εφεδρικής λειτουργίας και έναρξης φόρτισης: > 0.85 x ελάχιστη τάση λειτουργίας (σε V AC).",
      input1: "",
      text3: "",
    },
  ]);

  const handleDropdown13Change = (rowIndex, field, value) => {
    const newDropdown13Data = [...dropdown13Data];
    newDropdown13Data[rowIndex][field] = value;
    setDropdown13Data(newDropdown13Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown13(index)}
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
          dropdown13Visible === index ? "visible" : "hidden"
        } dropdown13`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown13Visible === index && (
            <table>
              <tbody className="dropdown13">
                {dropdown13Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr>
                      <td className="table-cell" rowSpan="2">
                        {dropdownRow.text1}
                      </td>
                      <td className="table-cell" rowSpan="2">
                        {dropdownRow.text2}
                      </td>
                      <div className="dropdownInputs-alignment ">
                        <td className="table-cell">
                          <input
                            type="text"
                            value={dropdownRow.input1}
                            onChange={(e) =>
                              handleDropdown13Change(
                                rowIndex,
                                "input1",
                                e.target.value
                              )
                            }
                            className="controller dropdown13-input1"
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown13")
                            }
                          />
                        </td>
                      </div>
                    </tr>
                    <tr>
                      <div className="dropdownInputs-alignment ">
                        <td className="table-cell">
                          <input
                            type="text"
                            value={
                              "Όριο = " +
                              dropdownRow.text3.replace("Όριο = ", "")
                            }
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const prefix = "Όριο = ";

                              if (inputValue.startsWith(prefix)) {
                                handleDropdown13Change(
                                  rowIndex,
                                  "text3",
                                  inputValue
                                );
                              } else {
                                handleDropdown13Change(
                                  rowIndex,
                                  "text3",
                                  prefix + inputValue
                                );
                              }
                            }}
                            onKeyDown={(e) => {
                              const prefix = "Όριο = ";
                              const cursorPos = e.target.selectionStart;

                              if (
                                (e.key === "Backspace" &&
                                  cursorPos <= prefix.length) ||
                                (e.key === "Delete" &&
                                  cursorPos < prefix.length)
                              ) {
                                e.preventDefault();
                              }
                              handleEnterPress(e, index, true, "dropdown13");
                            }}
                            className="controller dropdown13-text3"
                          />
                        </td>
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

export default Row13;
