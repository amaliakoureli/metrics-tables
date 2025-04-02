import React, { useState,useRef } from "react";
import "./Row4.css";

function Row34({ row, index, handleEnterPress, toggleDropdown34, dropdown34Visible, firstDropdownInputRef }) {
    const [dropdown34Data, setDropdown34Data] = useState([
        { text1: "α", text2: "Στο Δίκτυο", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" },
        { text1: "β", text2: "Με την μπαταρία", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" },
        { text1: "γ", text2: "Με το μπουτόν TEST", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" }
    ]);

    const handleDropdown34Change = (rowIndex, inputIndex, value) => {
        const newDropdown34Data = [...dropdown34Data];
        newDropdown34Data[rowIndex][inputIndex] = value;
        setDropdown34Data(newDropdown34Data);
    };

    return (
        <>
            <tr key={row.id + "-1"} className="fourth-row">
                <td className="table-cell">
                    <button onClick={() => toggleDropdown34(index)} className="dropdown-button-style">
                        {row.id}
                    </button>
                </td>
                <td className="table-cell">{row.text}</td>
            </tr>

            <tr key={row.id + "-subrow"} className={`table-row ${dropdown34Visible === index ? 'visible' : 'hidden'}`}>
                <td colSpan="8" className="table-cell">
                    {dropdown34Visible === index && (
                        <table className="table">
                            <thead>
                            <tr>    
                                <th className="textCenter"></th>
                                <th className="textCenter"></th>
                                <th>1Η</th>
                                <th>3Η</th>
                                <th>8Η</th>
                                <th>1Η</th>
                                <th>3Η</th>
                                <th>8Η</th>
                            </tr>
                            </thead>
                            <tbody>
                                {dropdown34Data.map((dropdownRow, rowIndex) => (
                                    <tr key={rowIndex} className="table-row">
                                        <td className="table-cell">{dropdownRow.text1}</td>
                                        <td className="table-cell">{dropdownRow.text2}</td>
                                        {(dropdownRow.text1 === "α") ? (
                <>
                                        <td className="table-cell">
                                            <input
                                                type="text"
                                                value={dropdownRow.input1}
                                                onChange={(e) => handleDropdown34Change(rowIndex, "input1", e.target.value)}
                                                className="controller smallerSize"
                                                onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                                                ref={firstDropdownInputRef}
                                            />
                                        </td>
                                        <td className="table-cell">
                                            <input
                                                type="text"
                                                value={dropdownRow.input2}
                                                onChange={(e) => handleDropdown34Change(rowIndex, "input2", e.target.value)}
                                                className="controller smallerSize"
                                                onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                                            />
                                        </td>
                                        <td className="table-cell">
                                            <input
                                                type="text"
                                                value={dropdownRow.input3}
                                                onChange={(e) => handleDropdown34Change(rowIndex, "input3", e.target.value)}
                                                className="controller smallerSize"
                                                onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                                            />
                                        </td>

                                        <td className="table-cell">
                                            <select
                                                value={dropdownRow.input4}
                                                onChange={(e) => handleDropdown34Change(rowIndex, "input4", e.target.value)}
                                                className="controller smallerSize"
                                                onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                                            >
                                                <option value="ΔΑ">Δ.Α.</option>
                                                <option value="ΔΕ">Δ.Ε.</option>
                                                <option value="ΟΚ">ΟΚ</option>
                                                <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                                            </select>
                                        </td>
                                        <td className="table-cell">
                                            <select
                                                value={dropdownRow.input5}
                                                onChange={(e) => handleDropdown34Change(rowIndex, "input5", e.target.value)}
                                                className="controller smallerSize"
                                                onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                                            >
                                                <option value="ΔΑ">Δ.Α.</option>
                                                <option value="ΔΕ">Δ.Ε.</option>
                                                <option value="ΟΚ">ΟΚ</option>
                                                <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                                            </select>
                                        </td>
                                        <td className="table-cell">
                                            <select
                                                value={dropdownRow.input6}
                                                onChange={(e) => handleDropdown34Change(rowIndex, "input6", e.target.value)}
                                                className="controller smallerSize"
                                                onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                                            >
                                                <option value="ΔΑ">Δ.Α.</option>
                                                <option value="ΔΕ">Δ.Ε.</option>
                                                <option value="ΟΚ">ΟΚ</option>
                                                <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                                            </select>
                                        </td>
                                        </>
                ) : dropdownRow.text1 === "β" ? (  
                <>

                    <td className="table-cell">
                        <select
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input1", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                        </select>
                    </td>
                    <td className="table-cell">
                        <select
                            value={dropdownRow.input2}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input2", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                        </select>
                    </td>
                    <td className="table-cell">
                        <select
                            value={dropdownRow.input3}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input3", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                        </select>
                    </td>

                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input4}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input4", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input5}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input5", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input6}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input6", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    </> 
                     ) : (
                    <>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input1", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input2}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input2", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input3}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input3", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input4}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input4", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input5}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input5", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input6}
                            onChange={(e) => handleDropdown34Change(rowIndex, "input6", e.target.value)}
                            className="controller smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown34")}
                        />
                    </td>
                    
                    </> 
                )}

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

export default Row34;
