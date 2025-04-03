import React, { useState } from "react";
import "./Row4.css";

function Row25({
  row,
  index,
  handleEnterPress,
  toggleDropdown25,
  dropdown25Visible,
  setDropdown25Visible,
}) {
  const [dropdown25Data, setDropdown25Data] = useState([
    {
      text1: "α",
      text2: "Θερμκρασία Voltage Regulator(s) , χωρίς μπαταρία, VAC = 240 V",
      input1: "",
      input2: "",
    },
    {
      text1: "β",
      text2: "Θερμκρασία Voltage Regulator(s) , με μπαταρία, VAC = 240 V",
      input1: "",
      input2: "",
    },
    {
      text1: "γ",
      text2:
        "Θεροκρασία τρανζίστορ φόρτισης, με μπαταρία, VBAT =  κοντά στην τάση αποκοπής, VAC = 240 V",
      input1: "",
    },
    {
      text1: "δ",
      text2:
        "Στην εφεδρεία με VBAT = πλήρως φορτισμένη μπαταρία (1.50V ανά στοιχείο)",
      input1: "",
    },
  ]);

  const handleDropdown25Change = (rowIndex, field, value) => {
    const newDropdown25Data = [...dropdown25Data];
    newDropdown25Data[rowIndex][field] = value;
    setDropdown25Data(newDropdown25Data);
  };

  return (
    <>
      <tr key={row.id + "-1"} className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown25(index)}
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
          dropdown25Visible === index ? "visible" : "hidden"
        } dropdown25`}
      >
        <td colSpan="4" className="table-cell">
          {dropdown25Visible === index && (
            <table>
              <tbody className="dropdown25">
                {dropdown25Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <tr className="table-row">
                      <td className="table-cell">{dropdownRow.text1}</td>
                      <td className="table-cell">{dropdownRow.text2}</td>
                      <td className="table-cell">
                        <input
                          type="text"
                          value={dropdownRow.input1}
                          onChange={(e) =>
                            handleDropdown25Change(
                              rowIndex,
                              "input1",
                              e.target.value
                            )
                          }
                          className="controller dropdown25-input1"
                          onKeyDown={(e) =>
                            handleEnterPress(e, index, true, "dropdown25")
                          }
                        />
                      </td>
                      <td className="table-cell">
                        <input
                          type="text"
                          value={dropdownRow.input2}
                          onChange={(e) =>
                            handleDropdown25Change(
                              rowIndex,
                              "input2",
                              e.target.value
                            )
                          }
                          className="controller dropdown25-input2"
                          onKeyDown={(e) =>
                            handleEnterPress(e, index, true, "dropdown25")
                          }
                        />
                      </td>
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

export default Row25;
