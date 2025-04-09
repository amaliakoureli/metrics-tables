import React, { useState } from "react";
import "../../../assets/styles/Row4.css";
import Dropdown21Data from "../TablesData/Dropdown21Data";

function Row21({
  row,
  index,
  handleEnterPress,
  toggleDropdown21,
  dropdown21Visible,
  setDropdown21Visible,
}) {
  const [dropdown21Data, setDropdown21Data] = useState(Dropdown21Data);

  const handleDropdown21Change = (rowIndex, field, value) => {
    const newDropdown21Data = [...dropdown21Data];
    newDropdown21Data[rowIndex][field] = value;
    setDropdown21Data(newDropdown21Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown21(index)}
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
          dropdown21Visible === index ? "visible" : "hidden"
        } dropdown21`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown21Visible === index && (
            <table>
              <tbody className="dropdown21">
                {dropdown21Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr>
                      <td className="table-cell">{dropdownRow.text1}</td>
                      <td className="table-cell">{dropdownRow.text2}</td>
                      <div className="dropdownInputs-alignment">
                        <td className="table-cell">
                          <select
                            value={dropdownRow.input1}
                            onChange={(e) =>
                              handleDropdown21Change(
                                rowIndex,
                                "input1",
                                e.target.value
                              )
                            }
                            className="controller dropdown21-input1"
                            onKeyDown={(e) =>
                              handleEnterPress(e, index, true, "dropdown21")
                            }
                            id={
                              rowIndex === dropdown21Data.length - 1 &&
                              !dropdownRow.input1
                                ? "dropdown21-last"
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

export default Row21;
