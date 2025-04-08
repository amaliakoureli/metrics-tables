import React, { useState } from "react";
import "./Row4.css";

function Row20({
  row,
  index,
  handleEnterPress,
  toggleDropdown20,
  dropdown20Visible,
  setDropdown20Visible,
}) {
  const [dropdown20Data, setDropdown20Data] = useState([
    {
      text1: "α",
      text2:
        "Στο δίκτυο (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED)",
      input1: "",
      input2: "",
      input3: "",
    },
    {
      text1: "β",
      text2:
        "Στην εφεδρεία (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED) (Για 1 ώρα αυτονομία)",
      input1: "",
      input2: "",
      input3: "",
    },
    {
      text1: "γ",
      text2:
        "Στην εφεδρεία (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED) (Για 3 ώρες αυτονομία)",
      input1: "",
      input2: "",
      input3: "",
    },
    {
      text1: "δ",
      text2:
        "Στην εφεδρεία (lumen-θεωρητικά και με βάση του ελάχιστου ρεύματος LED) (Για 8 ώρες αυτονομία)",
      input1: "",
      input2: "",
      input3: "",
    },
  ]);

  const handleDropdown20Change = (rowIndex, field, value) => {
    const newDropdown20Data = [...dropdown20Data];
    newDropdown20Data[rowIndex][field] = value;
    setDropdown20Data(newDropdown20Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown20(index)}
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
          dropdown20Visible === index ? "visible" : "hidden"
        } dropdown20`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown20Visible === index && (
            <table>
              <tbody className="dropdown20">
                {dropdown20Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr>
                      <td
                        className={`table-cell ${
                          rowIndex === 0
                            ? "blue-text"
                            : rowIndex === 1
                            ? "green-text"
                            : rowIndex === 2
                            ? "brown-text"
                            : "red-text"
                        }`}
                        rowSpan="2"
                      >
                        {dropdownRow.text1}
                      </td>
                      <td
                        className={`table-cell ${
                          rowIndex === 0
                            ? "blue-text"
                            : rowIndex === 1
                            ? "green-text"
                            : rowIndex === 2
                            ? "brown-text"
                            : "red-text"
                        }`}
                        rowSpan="2"
                      >
                        {dropdownRow.text2}
                      </td>
                      <div className="DropdownInputs-alignment">
                        <td className="table-cell inputs20-alignment">
                          <div className="input-wrapper">
                            <input
                              type="text"
                              value={
                                "Υπολογισμός: " +
                                dropdownRow.input1.replace("Υπολογισμός: ", "")
                              }
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const prefix = "Υπολογισμός: ";

                                if (inputValue.startsWith(prefix)) {
                                  handleDropdown20Change(
                                    rowIndex,
                                    "input1",
                                    inputValue
                                  );
                                } else {
                                  handleDropdown20Change(
                                    rowIndex,
                                    "input1",
                                    prefix + inputValue
                                  );
                                }
                              }}
                              onKeyDown={(e) => {
                                const prefix = "Υπολογισμός: ";
                                const cursorPos = e.target.selectionStart;

                                if (
                                  (e.key === "Backspace" &&
                                    cursorPos <= prefix.length) ||
                                  (e.key === "Delete" &&
                                    cursorPos < prefix.length)
                                ) {
                                  e.preventDefault();
                                }
                                handleEnterPress(e, index, true, "dropdown20");
                              }}
                              className={`controller dropdown20-input1 ${
                                rowIndex === 0
                                  ? "blue-text"
                                  : rowIndex === 1
                                  ? "green-text"
                                  : rowIndex === 2
                                  ? "brown-text"
                                  : "red-text"
                              }`}
                            />
                            <span
                              className={`unit ${
                                rowIndex === 0
                                  ? "blue-text"
                                  : rowIndex === 1
                                  ? "green-text"
                                  : rowIndex === 2
                                  ? "brown-text"
                                  : "red-text"
                              }`}
                            >
                              lm
                            </span>
                          </div>
                          <div className="input-wrapper">
                            <input
                              type="text"
                              value={
                                "Μέτρηση: " +
                                dropdownRow.input2.replace("Μέτρηση: ", "")
                              }
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const prefix = "Μέτρηση: ";

                                if (inputValue.startsWith(prefix)) {
                                  handleDropdown20Change(
                                    rowIndex,
                                    "input2",
                                    inputValue
                                  );
                                } else {
                                  handleDropdown20Change(
                                    rowIndex,
                                    "input2",
                                    prefix + inputValue
                                  );
                                }
                              }}
                              onKeyDown={(e) => {
                                const prefix = "Μέτρηση: ";
                                const cursorPos = e.target.selectionStart;

                                if (
                                  (e.key === "Backspace" &&
                                    cursorPos <= prefix.length) ||
                                  (e.key === "Delete" &&
                                    cursorPos < prefix.length)
                                ) {
                                  e.preventDefault();
                                }
                                handleEnterPress(e, index, true, "dropdown20");
                              }}
                              className={`controller dropdown20-input2 ${
                                rowIndex === 0
                                  ? "blue-text"
                                  : rowIndex === 1
                                  ? "green-text"
                                  : rowIndex === 2
                                  ? "brown-text"
                                  : "red-text"
                              }`}
                            />
                            <span
                              className={`unit ${
                                rowIndex === 0
                                  ? "blue-text"
                                  : rowIndex === 1
                                  ? "green-text"
                                  : rowIndex === 2
                                  ? "brown-text"
                                  : "red-text"
                              }`}
                            >
                              lm
                            </span>
                          </div>
                        </td>
                      </div>
                    </tr>
                    <tr className="table-row">
                      <div className="DropdownInputs-alignment">
                        <td className="table-cell inputs20-alignment">
                          <div className="input-wrapper">
                            <input
                              type="text"
                              value={
                                "Στην οδηγία: " +
                                dropdownRow.input3.replace("Στην οδηγία: ", "")
                              }
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const prefix = "Στην οδηγία: ";

                                if (inputValue.startsWith(prefix)) {
                                  handleDropdown20Change(
                                    rowIndex,
                                    "input3",
                                    inputValue
                                  );
                                } else {
                                  handleDropdown20Change(
                                    rowIndex,
                                    "input3",
                                    prefix + inputValue
                                  );
                                }
                              }}
                              onKeyDown={(e) => {
                                const prefix = "Στην οδηγία: ";
                                const cursorPos = e.target.selectionStart;

                                if (
                                  (e.key === "Backspace" &&
                                    cursorPos <= prefix.length) ||
                                  (e.key === "Delete" &&
                                    cursorPos < prefix.length)
                                ) {
                                  e.preventDefault();
                                }
                                handleEnterPress(e, index, true, "dropdown20");
                              }}
                              className={`controller dropdown20-input3 ${
                                rowIndex === 0
                                  ? "blue-text"
                                  : rowIndex === 1
                                  ? "green-text"
                                  : rowIndex === 2
                                  ? "brown-text"
                                  : "red-text"
                              }`}
                              id={
                                rowIndex === dropdown20Data.length - 1 &&
                                !dropdownRow.input3
                                  ? "dropdown20-last"
                                  : undefined
                              }
                            />
                            <span
                              className={`unit ${
                                rowIndex === 0
                                  ? "blue-text"
                                  : rowIndex === 1
                                  ? "green-text"
                                  : rowIndex === 2
                                  ? "brown-text"
                                  : "red-text"
                              }`}
                            >
                              lm
                            </span>
                          </div>
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

export default Row20;
