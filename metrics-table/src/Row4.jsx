import React, { useState } from "react";
import "./Row4.css";

function Row4({
  row,
  index,
  handleChange,
  handleEnterPress,
  toggleDropdown4,
  dropdown4Visible,
  setDropdown4Visible,
  duration1BAT,
  setDuration1BAT,
  duration2BAT,
  setDuration2BAT,
  duration1BATRef,
  duration2BATRef,
}) {
  const [dropdown4Data, setDropdown4Data] = useState([
    {
      text1: "α",
      text2:
        "Ρεύμα φόρτισης μπαταρίας (σε mA DC), για μπαταρία {middleInput2} DC.",
      textInput2: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    {
      text1: "β",
      text2:
        "Ρεύμα φόρτισης μπαταρίας (σε mA DC), για μπαταρία {middleInput2} DC.",
      textInput2: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    {
      text1: "γ",
      text2:
        "Ρεύμα φόρτισης μπαταρίας (σε mA DC), για μπαταρία {middleInput2} DC.",
      textInput2: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    {
      text1: "δ",
      text2:
        "Ρεύμα φόρτισης για τάση δικτύου = 0.9 x ονομαστική τάση (Max τάση μπαταρίας)",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    {
      text1: "ε",
      text2:
        "Ρεύμα φόρτισης για τάση δικτύου = 1.06 x ονομαστική τάση (Max τάση μπαταρίας)",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    {
      text1: "ζ",
      text2:
        "Τάση μπαταρίας όταν είναι φορτισμένη (συνδεδεμένη πάνω στην συσκευή) (σε V DC)",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
  ]);

  const handleDropdown4Change = (rowIndex, field, value) => {
    const newDropdown4Data = [...dropdown4Data];
    newDropdown4Data[rowIndex][field] = value;
    setDropdown4Data(newDropdown4Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id" rowSpan="3">
          <button
            onClick={() => toggleDropdown4(index)}
            className="dropdown-button"
          >
            {row.id}
          </button>
        </td>

        <td className="table-cell column-text" colSpan={2} rowSpan="2">
          Ρεύμα Φόρτισης – Διάρκεια Φόρτισης
        </td>
        <div className="inputs-alignment">
          <td className="table-cell" colSpan="2">
            <div className="input-wrapper">
              <input
                type="text"
                id="duration1BAT"
                ref={duration1BATRef}
                value={"Διάρκεια με 1BAT: " + (duration1BAT ?? "")}
                onChange={(e) => {
                  const prefix = "Διάρκεια με 1BAT: ";
                  const inputValue = e.target.value;
                  if (inputValue.startsWith(prefix)) {
                    setDuration1BAT(
                      inputValue.replace(prefix, ""),
                      duration1BATRef?.current,
                      duration2BATRef?.current
                    );
                  } else {
                    setDuration1BAT(
                      inputValue,
                      duration1BATRef?.current,
                      duration2BATRef?.current
                    );
                  }
                }}
                onKeyDown={(e) => {
                  const prefix = "Διάρκεια με 1BAT: ";
                  const cursorPos = e.target.selectionStart;
                  if (
                    (e.key === "Backspace" && cursorPos <= prefix.length) ||
                    (e.key === "Delete" && cursorPos < prefix.length)
                  ) {
                    e.preventDefault();
                  }
                  handleEnterPress(e, index, true);
                }}
                className="controller duration1BAT"
              />
              <span className="unit">H</span>
            </div>
          </td>
        </div>
      </tr>

      <tr className="row-width">
        <div className="inputs-alignment">
          <td className="table-cell" colSpan="2">
            <div className="input-wrapper">
              <input
                type="text"
                id="duration2BAT"
                ref={duration2BATRef}
                value={"Διάρκεια με 2BAT: " + (duration2BAT ?? "")}
                onChange={(e) => {
                  const prefix = "Διάρκεια με 2BAT: ";
                  const inputValue = e.target.value;
                  if (inputValue.startsWith(prefix)) {
                    setDuration2BAT(
                      inputValue.replace(prefix, ""),
                      duration1BATRef?.current,
                      duration2BATRef?.current
                    );
                  } else {
                    setDuration2BAT(
                      inputValue,
                      duration1BATRef?.current,
                      duration2BATRef?.current
                    );
                  }
                }}
                onKeyDown={(e) => {
                  const prefix = "Διάρκεια με 2BAT: ";
                  const cursorPos = e.target.selectionStart;
                  if (
                    (e.key === "Backspace" && cursorPos <= prefix.length) ||
                    (e.key === "Delete" && cursorPos < prefix.length)
                  ) {
                    e.preventDefault();
                  }
                  handleEnterPress(e, index, true);
                }}
                className="controller duration2BAT"
              />
              <span className="unit">H</span>
            </div>
          </td>
        </div>
      </tr>

      <tr className="row-width">
        <td className="table-cell column-text" colSpan="2">
          Για τάση δικτύου = 1 x ονομαστική τάση δικτύου (110VAC, 230VAC,
          245VAC)
          <br />
          {(() => {
            const textParts = row.text
              ? row.text.split("{middleInput}")
              : ["", ""];
            return (
              <div className="middleInput-alignment">
                <div className="input-wrapper-start">
                  {textParts[0]}
                  <input
                    type="text"
                    value={row.middleInput || ""}
                    onChange={(e) =>
                      handleChange(index, "middleInput", e.target.value)
                    }
                    className="controller dropdown4-middleInput"
                    onKeyDown={(e) => handleEnterPress(e, index, true)}
                  />
                  <span className="unit">mA</span>
                  {textParts[1]}
                </div>
              </div>
            );
          })()}
        </td>
        <div className="bats-alignment">
          <tr>
            <td className="table-cell bat1-1">1BAT</td>
            <td className="table-cell bat2-1">2BAT</td>
            <td className="table-cell bat1-2">1BAT</td>
            <td className="table-cell bat2-2">2BAT</td>
          </tr>
        </div>
      </tr>

      <tr
        key={row.id + "-subrow"}
        className={` ${
          dropdown4Visible === index ? "visible" : "hidden"
        } dropdown4`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown4Visible === index && (
            <table>
              <tbody className=" dropdown4">
                {dropdown4Data.map((dropdownRow, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="table-cell">{dropdownRow.text1}</td>
                    <td className="table-cell">
                      {dropdownRow.text2.includes("{middleInput2}")
                        ? (() => {
                            const parts =
                              dropdownRow.text2.split("{middleInput2}");
                            return (
                              <div className="middleInput-alignment">
                                <div className="input-wrapper-start">
                                  {parts[0]}
                                  <input
                                    type="text"
                                    value={dropdownRow.textInput2}
                                    onChange={(e) =>
                                      handleDropdown4Change(
                                        rowIndex,
                                        "textInput2",
                                        e.target.value
                                      )
                                    }
                                    className="controller dropdown4-middleInput2 "
                                    onKeyDown={(e) =>
                                      handleEnterPress(
                                        e,
                                        index,
                                        true,
                                        "dropdown4"
                                      )
                                    }
                                  />
                                  <span className="unit2">V</span>
                                  {parts[1]}
                                </div>
                              </div>
                            );
                          })()
                        : dropdownRow.text2}
                    </td>
                    <div className="dropdownInputs-alignment">
                      <td className="table-cell">
                        <input
                          type="text"
                          value={dropdownRow.input1}
                          onChange={(e) =>
                            handleDropdown4Change(
                              rowIndex,
                              "input1",
                              e.target.value
                            )
                          }
                          className="controller column-inputs dropdown4-input1"
                          onKeyDown={(e) =>
                            handleEnterPress(
                              e,
                              index,
                              true,
                              true,
                              rowIndex,
                              "dropdown4"
                            )
                          }
                        />
                      </td>
                      <td className="table-cell">
                        <input
                          type="text"
                          value={dropdownRow.input2}
                          onChange={(e) =>
                            handleDropdown4Change(
                              rowIndex,
                              "input2",
                              e.target.value
                            )
                          }
                          className="controller column-inputs dropdown4-input2"
                          onKeyDown={(e) =>
                            handleEnterPress(
                              e,
                              index,
                              true,
                              true,
                              rowIndex,
                              "dropdown4"
                            )
                          }
                        />
                      </td>
                      <td className="table-cell">
                        <input
                          type="text"
                          value={dropdownRow.input3}
                          onChange={(e) =>
                            handleDropdown4Change(
                              rowIndex,
                              "input3",
                              e.target.value
                            )
                          }
                          className="controller column-inputs dropdown4-input3"
                          onKeyDown={(e) =>
                            handleEnterPress(
                              e,
                              index,
                              true,
                              true,
                              rowIndex,
                              "dropdown4"
                            )
                          }
                        />
                      </td>
                      <td className="table-cell">
                        <input
                          type="text"
                          value={dropdownRow.input4}
                          onChange={(e) =>
                            handleDropdown4Change(
                              rowIndex,
                              "input4",
                              e.target.value
                            )
                          }
                          className="controller column-inputs dropdown4-input4"
                          onKeyDown={(e) =>
                            handleEnterPress(
                              e,
                              index,
                              true,
                              true,
                              rowIndex,
                              "dropdown4"
                            )
                          }
                        />
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

export default Row4;
