import React, { useState } from "react";
import "../../../assets/styles/Row4.css";
import Dropdown18Data from "../TablesData/Dropdown18Data";

function Row18({
  row,
  index,
  handleEnterPress,
  toggleDropdown18,
  dropdown18Visible,
  setDropdown18Visible,
}) {
  const [dropdown18Data, setDropdown18Data] = useState(Dropdown18Data);

  const handleDropdown18Change = (rowIndex, field, value) => {
    const newDropdown18Data = [...dropdown18Data];
    newDropdown18Data[rowIndex][field] = value;
    setDropdown18Data(newDropdown18Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown18(index)}
            className="dropdown-button"
          >
            {row.id}
          </button>
        </td>
        <td className="table-cell column-text" colSpan={3}>
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
                    className="controller row18-middleInput"
                    onKeyDown={(e) => handleEnterPress(e, index, true)}
                  />
                  <span className="unit-rows9-18">V</span>
                </div>
              </div>
            );
          })()}
        </td>
      </tr>
      <tr
        key={row.id + "-subrow"}
        className={`table-row ${
          dropdown18Visible === index ? "visible" : "hidden"
        } dropdown18`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown18Visible === index && (
            <table>
              <tbody className="dropdown18">
                {dropdown18Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr>
                      <td className="table-cell">{dropdownRow.text1}</td>
                      <td className="table-cell">{dropdownRow.text2}</td>
                      <div className="dropdownInputs-alignment">
                        <td className="table-cell">
                          <div className="input-wrapper">
                            <input
                              type="text"
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown18Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown18-input1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown18")
                              }
                            />
                            <span className="unit">V</span>
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="input-wrapper">
                            <input
                              type="text"
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown18Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown18-input2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown18")
                              }
                              id={
                                rowIndex === dropdown18Data.length - 1 &&
                                !dropdownRow.input2
                                  ? "dropdown18-last"
                                  : undefined
                              }
                            />
                            <span className="unit">V</span>
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

export default Row18;
