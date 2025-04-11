import React, { useState, useRef } from "react";
import "../../../assets/styles/styles.css";
import Dropdown16Data from "../TablesData/Dropdown16Data";

function Row16({
  row,
  index,
  handleEnterPress,
  toggleDropdown16,
  dropdown16Visible,
  firstDropdown16InputRef,
}) {
  const [dropdown16Data, setDropdown16Data] = useState(Dropdown16Data);

  const handleDropdown16Change = (rowIndex, field, value) => {
    const newDropdown16Data = [...dropdown16Data];
    newDropdown16Data[rowIndex][field] = value;
    setDropdown16Data(newDropdown16Data);
  };

  return (
    <>
      <tr className="row-width">
        <td className="table-cell column-id">
          <button
            onClick={() => toggleDropdown16(index)}
            className="dropdown-button"
          >
            {row.id}
          </button>
        </td>
        <td className="table-cell column-text" colSpan={3}>
          {row.text}
        </td>
      </tr>
      {dropdown16Visible === index && (
        <tr className="dropdown16">
          <td colSpan="4" className="table-cell">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th colSpan="2" className="col-width">
                    Κάτω τάση λειτουργίας
                  </th>
                  <th colSpan="2" className="col-width">
                    Ονομαστ. τάση λειτουργίας
                  </th>
                  <th colSpan="2" className="col-width">
                    Πάνω τάση λειτουργίας
                  </th>
                  <th colSpan="2" className="col-width">
                    Στην οδηγία
                  </th>
                </tr>
              </thead>
              <tbody>
                {dropdown16Data.map((dropdownRow, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {dropdownRow.text1 === "α" ? (
                      <tr>
                        <td className="table-cell ">{dropdownRow.text1}</td>
                        <td className="table-cell">
                          {" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: dropdownRow.text2,
                            }}
                          />
                        </td>
                        <td className="table-cell">{dropdownRow.text3}</td>
                        {dropdownRow.values.map((value, valueIndex) => (
                          <td key={valueIndex} className="table-cell">
                            <div>
                              <strong>{value[0]}</strong>
                            </div>
                            <div>{value[1]}</div>
                          </td>
                        ))}
                      </tr>
                    ) : dropdownRow.text1 === "ζ" ? (
                      <tr>
                        <td className="table-cell">{dropdownRow.text1}</td>
                        <td className="table-cell">{dropdownRow.text2}</td>
                        <td className="table-cell">{dropdownRow.text3}</td>
                        <td className="table-cell CenterText" colSpan="2">
                          {dropdownRow.text4}
                        </td>
                        <td className="table-cell CenterText" colSpan="2">
                          {dropdownRow.text5}
                        </td>
                        <td className="table-cell CenterText" colSpan="2">
                          {dropdownRow.text6}
                        </td>
                        <td
                          className="table-cell dropdown16-text7 CenterText"
                          colSpan="2"
                        >
                          {dropdownRow.text7}
                        </td>
                      </tr>
                    ) : dropdownRow.text1 === "ε" ? (
                      <>
                        <tr>
                          <td rowSpan="2" className="table-cell">
                            {dropdownRow.text1}
                          </td>
                          <td rowSpan="2" className="table-cell">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: dropdownRow.text2,
                              }}
                            />
                          </td>
                          <td className="table-cell">{dropdownRow.text3}</td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input5}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input6}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input9}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input9",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input9"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input10}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input10",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input10"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell" rowSpan="2" colSpan="2">
                            <input
                              type="text"
                              value={dropdownRow.input13}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input13",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input13-wider"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="table-cell">{dropdownRow.text4}</td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input7}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input7",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input7"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input8}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input8",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input8"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input11}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input11",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input11"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input12}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input12",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input12"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                        </tr>
                      </>
                    ) : dropdownRow.text1 === "β" ? (
                      <>
                        <tr>
                          <td rowSpan="2" className="table-cell">
                            {dropdownRow.text1}
                          </td>
                          <td rowSpan="2" className="table-cell">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: dropdownRow.text2,
                              }}
                            />
                          </td>
                          <td className="table-cell">{dropdownRow.text3}</td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                              ref={firstDropdown16InputRef}
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input5}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input6}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input9}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input9",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input9"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input10}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input10",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input10"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td
                            className="table-cell dropdown16-input13-width"
                            rowSpan="2"
                          >
                            <input
                              type="text"
                              value={dropdownRow.input13}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input13",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input13"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className=" dropdown16-input14-width" rowSpan="2">
                            <input
                              type="text"
                              value={dropdownRow.input14}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input14",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input14"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="table-cell">{dropdownRow.text4}</td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input7}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input7",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input7"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input8}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input8",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input8"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input11}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input11",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input11"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input12}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input12",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input12"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr>
                          <td rowSpan="2" className="table-cell">
                            {dropdownRow.text1}
                          </td>
                          <td rowSpan="2" className="table-cell">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: dropdownRow.text2,
                              }}
                            />
                          </td>
                          <td className="table-cell">{dropdownRow.text3}</td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input1}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input1",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input1"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input2}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input2",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input2"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input5}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input5",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input5"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input6}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input6",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input6"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input9}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input9",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input9"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input10}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input10",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input10"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td
                            className="table-cell dropdown16-input13-width"
                            rowSpan="2"
                          >
                            <input
                              type="text"
                              value={dropdownRow.input13}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input13",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input13"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="dropdown16-input14-width" rowSpan="2">
                            <input
                              type="text"
                              value={dropdownRow.input14}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input14",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input14"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="table-cell">{dropdownRow.text4}</td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input3}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input3",
                                  e.target.value
                                )
                              }
                              className="controllere dropdown16-input3"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input4}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input4",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input4"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input7}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input7",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input7"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input8}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input8",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input8"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input11}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input11",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input11"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                          <td className="table-cell">
                            <input
                              type="text"
                              value={dropdownRow.input12}
                              onChange={(e) =>
                                handleDropdown16Change(
                                  rowIndex,
                                  "input12",
                                  e.target.value
                                )
                              }
                              className="controller dropdown16-input12"
                              onKeyDown={(e) =>
                                handleEnterPress(e, index, true, "dropdown16")
                              }
                            />
                          </td>
                        </tr>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}

export default Row16;
