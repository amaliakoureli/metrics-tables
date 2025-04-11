import React, { useState } from "react";
import "../../../assets/styles/styles.css";
import Dropdown14Data from "../TablesData/Dropdown14Data";

function Row14({
  row,
  index,
  handleEnterPress,
  handleChange,
  limit1,
  limit2,
  limit3,
  toggleDropdown14,
  dropdown14Visible,
}) {
  const [dropdown14Data, setDropdown14Data] = useState(Dropdown14Data);

  const handleDropdown14Change = (rowIndex, field, value) => {
    const newDropdown14Data = [...dropdown14Data];
    newDropdown14Data[rowIndex][field] = value;
    setDropdown14Data(newDropdown14Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="special-row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown14(index)}
            className="dropdown-button"
          >
            {row.id}
          </button>
        </td>

        <td className="table-cell column-text" colSpan={2}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<b>Κατανάλωση από τη μπαταρία στην εφεδρική λειτουργία (σε mA) <br><u> -> Για μπαταρίες Ni-Cd, Ni-Mh, LiFePo4:</u> <br> Imax < (60min:0.4xC5A, 90min:0.51xC5A, 180min:0.25xC5A, 480min:0.1xC5A) <br> <u> -> Για μπαταρία Μολύβδου (Pb):</u> <br> Imax < (60min:0.4xC20A, 90min:0.34xxC20A, 180min:0.17xxC20A) </b>`,
            }}
          />
        </td>

        <td className="table-cell table-greenCell">
          <table>
            <tbody>
              <tr>
                <div className="dropdownInputs-alignment ">
                  <td className="table-cell">
                    <input
                      type="text"
                      value={
                        "Όριο (1H) = " +
                        (limit1?.replace("Όριο (1H) = ", "") ?? "")
                      }
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const prefix = "Όριο (1H) = ";

                        if (inputValue.startsWith(prefix)) {
                          handleChange(index, "limit1", inputValue);
                        } else {
                          handleChange(index, "limit1", prefix + inputValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        const prefix = "Όριο (1H) = ";
                        const cursorPos = e.target.selectionStart;

                        if (
                          (e.key === "Backspace" &&
                            cursorPos <= prefix.length) ||
                          (e.key === "Delete" && cursorPos < prefix.length)
                        ) {
                          e.preventDefault();
                        }
                        handleEnterPress(e, index, true);
                      }}
                      className="controller limit1"
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
                        "Όριο (3H) = " +
                        (limit2?.replace("Όριο (3H) = ", "") ?? "")
                      }
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const prefix = "Όριο (3H) = ";

                        if (inputValue.startsWith(prefix)) {
                          handleChange(index, "limit2", inputValue);
                        } else {
                          handleChange(index, "limit2", prefix + inputValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        const prefix = "Όριο (3H) = ";
                        const cursorPos = e.target.selectionStart;

                        if (
                          (e.key === "Backspace" &&
                            cursorPos <= prefix.length) ||
                          (e.key === "Delete" && cursorPos < prefix.length)
                        ) {
                          e.preventDefault();
                        }
                        handleEnterPress(e, index, true);
                      }}
                      className="controller limit2"
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
                        "Όριο (8H) = " +
                        (limit3?.replace("Όριο (8H) = ", "") ?? "")
                      }
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const prefix = "Όριο (8H) = ";

                        if (inputValue.startsWith(prefix)) {
                          handleChange(index, "limit3", inputValue);
                        } else {
                          handleChange(index, "limit3", prefix + inputValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        const prefix = "Όριο (8H) = ";
                        const cursorPos = e.target.selectionStart;

                        if (
                          (e.key === "Backspace" &&
                            cursorPos <= prefix.length) ||
                          (e.key === "Delete" && cursorPos < prefix.length)
                        ) {
                          e.preventDefault();
                        }
                        handleEnterPress(e, index, true);
                      }}
                      className="controller limit3"
                      id="limit3"
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <td className="table-greenCell">
                  <p className="green-column">
                    {" "}
                    <b>
                      No WL <br /> module
                    </b>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr
        key={row.id + "-subrow"}
        className={`table-row  ${
          dropdown14Visible === index ? "visible" : "hidden"
        } dropdown14`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown14Visible === index && (
            <table>
              <tbody className="dropdown14">
                {dropdown14Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr>
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
                        {(() => {
                          const parts =
                            dropdownRow.text2.split("{middleInput}");
                          return (
                            <div className="middleInput-alignment">
                              <div className="input-wrapper-start">
                                {parts[0]}
                                <input
                                  type="text"
                                  value={dropdownRow.textInput1}
                                  onChange={(e) =>
                                    handleDropdown14Change(
                                      rowIndex,
                                      "textInput1",
                                      e.target.value
                                    )
                                  }
                                  className={`controller dropdown14-middleInput ${
                                    rowIndex === 0
                                      ? "dropdown14-firstMiddleInput"
                                      : rowIndex < 3
                                      ? "blue-text"
                                      : rowIndex < 6
                                      ? "green-text"
                                      : "brown-text"
                                  }`}
                                  onKeyDown={(e) =>
                                    handleEnterPress(
                                      e,
                                      index,
                                      true,
                                      "dropdown14"
                                    )
                                  }
                                />
                                <span
                                  className={`unit3 ${
                                    rowIndex < 3
                                      ? "blue-text"
                                      : rowIndex < 6
                                      ? "green-text"
                                      : "brown-text"
                                  }`}
                                >
                                  V
                                </span>
                                {parts[1]}
                              </div>
                            </div>
                          );
                        })()}
                      </td>
                      <div className="dropdownInputs-alignment ">
                        <td className="table-cell ">
                          <input
                            type="text"
                            value={dropdownRow.input1}
                            onChange={(e) =>
                              handleDropdown14Change(
                                rowIndex,
                                "input1",
                                e.target.value
                              )
                            }
                            className={`controller dropdown14-input1 ${
                              rowIndex < 3
                                ? "blue-text"
                                : rowIndex < 6
                                ? "green-text"
                                : "brown-text"
                            }`}
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown14")
                            }
                          />
                        </td>
                        <td className="table-cell">
                          <input
                            type="text"
                            value={dropdownRow.input2}
                            onChange={(e) =>
                              handleDropdown14Change(
                                rowIndex,
                                "input2",
                                e.target.value
                              )
                            }
                            className={`controller dropdown14-input2 ${
                              rowIndex < 3
                                ? "blue-text"
                                : rowIndex < 6
                                ? "green-text"
                                : "brown-text"
                            }`}
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown14")
                            }
                            id={
                              rowIndex === dropdown14Data.length - 1 &&
                              !dropdownRow.input2
                                ? "dropdown14-last"
                                : undefined
                            }
                          />
                        </td>
                      </div>
                    </tr>

                    {(rowIndex + 1) % 3 === 0 &&
                      rowIndex !== dropdown14Data.length - 1 && (
                        <tr>
                          <td
                            colSpan="4"
                            style={{
                              height: "15px",
                              backgroundColor: "rgba(240, 240, 240, 0.84)",
                            }}
                          ></td>
                        </tr>
                      )}
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

export default Row14;
