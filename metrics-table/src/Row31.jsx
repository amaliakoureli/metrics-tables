import React, { useState } from "react";
import "./Row4.css";

function Row31({
  row,
  index,
  handleEnterPress,
  toggleDropdown31,
  dropdown31Visible,
  setDropdown31Visible,
}) {
  const [dropdown31Data, setDropdown31Data] = useState([
    { text1: "α", text2: "Έχει αυτονομία: 1 ώρα", input1: "" },
    { text1: "β", text2: "Έχει αυτονομία: 3 ώρες", input1: "" },
    { text1: "γ", text2: "Έχει αυτονομία: 8 ώρες", input1: "" },
  ]);

  const handleDropdown31Change = (rowIndex, field, value) => {
    const newDropdown31Data = [...dropdown31Data];
    newDropdown31Data[rowIndex][field] = value;
    setDropdown31Data(newDropdown31Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown31(index)}
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
          dropdown31Visible === index ? "visible" : "hidden"
        } dropdown31`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown31Visible === index && (
            <table>
              <tbody className="dropdown31">
                {dropdown31Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr className="table-row">
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
                      >
                        {dropdownRow.text1}
                      </td>
                      <td
                        className={`table-cell ${
                          rowIndex === 0
                            ? "blue-text"
                            : rowIndex === 1
                            ? "green-text"
                            : "red-text"
                        }`}
                      >
                        {dropdownRow.text2}
                      </td>
                      <div className="dropdownInputs-alignment">
                        <td className="table-cell">
                          <input
                            type="text"
                            className={`controller dropdown31-input1 ${
                              rowIndex === 0
                                ? "blue-text"
                                : rowIndex === 1
                                ? "green-text"
                                : "red-text"
                            }`}
                            value={
                              "Από μέτρηση: " +
                              dropdownRow.input1.replace("Από μέτρηση: ", "")
                            }
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const prefix = "Από μέτρηση: ";

                              if (inputValue.startsWith(prefix)) {
                                handleDropdown31Change(
                                  rowIndex,
                                  "input1",
                                  inputValue
                                );
                              } else {
                                handleDropdown31Change(
                                  rowIndex,
                                  "input1",
                                  prefix + inputValue
                                );
                              }
                            }}
                            onKeyDown={(e) => {
                              const prefix = "Από μέτρηση: ";
                              const cursorPos = e.target.selectionStart;

                              if (
                                (e.key === "Backspace" &&
                                  cursorPos <= prefix.length) ||
                                (e.key === "Delete" &&
                                  cursorPos < prefix.length)
                              ) {
                                e.preventDefault();
                              }
                              handleEnterPress(e, index, true, "dropdown31");
                            }}
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

export default Row31;
