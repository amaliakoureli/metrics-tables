import React, { useState,useRef } from "react";
import "./Row4.css";

function Row38({ row, index, handleEnterPress, toggleDropdown38, dropdown38Visible, firstDropdown38InputRef }) {
    const [dropdown38Data, setDropdown38Data] = useState([
        { text1: "α", text2: "Στην μέγιστη τάση μπαταρίας", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" },
        { text1: "β", text2: "Στην ελάχιστη τάση μπαταρίας", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" },
        { text1: "γ", text2: "Στην τάση τροφοδοσίας του δικτύου", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" },
        { text1: "δ", text2: "Στις διαβαθμίσεις Dimming (αν υπάρχει)", input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" }
    ]);

    const handleDropdown38Change = (rowIndex, inputIndex, value) => {
        const newDropdown38Data = [...dropdown38Data];
        newDropdown38Data[rowIndex][inputIndex] = value;
        setDropdown38Data(newDropdown38Data);
    };

    return (
        <>
            <tr key={row.id + "-1"} className="fourth-row">
                <td className="table-cell">
                    <button onClick={() => toggleDropdown38(index)} className="dropdown-button-style">
                        {row.id}
                    </button>
                </td>
                <td className="table-cell">{row.text}</td>
            </tr>

            <tr key={row.id + "-subrow"} className={`table-row ${dropdown38Visible === index ? 'visible' : 'hidden'}`}>
                <td colSpan="8" className="table-cell">
                    {dropdown38Visible === index && (
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
                                {dropdown38Data.map((dropdownRow, rowIndex) => (
                                    <tr key={rowIndex} className="table-row">
                                        <td className="table-cell">{dropdownRow.text1}</td>
                                        <td className="table-cell">{dropdownRow.text2}</td>
                                        {(dropdownRow.text1 === "α") ? (
                <>
                <td className="table-cell">
                    <input
                        type="text"
                        value={dropdownRow.input1}
                        onChange={(e) => handleDropdown38Change(rowIndex, "input1", e.target.value)}
                        className="input-style smallerSize"
                        onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        ref={firstDropdown38InputRef}
                    />
                </td>
                <td className="table-cell">
                    <input
                        type="text"
                        value={dropdownRow.input2}
                        onChange={(e) => handleDropdown38Change(rowIndex, "input2", e.target.value)}
                        className="input-style smallerSize"
                        onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                    />
                </td>
                <td className="table-cell">
                    <input
                        type="text"
                        value={dropdownRow.input3}
                        onChange={(e) => handleDropdown38Change(rowIndex, "input3", e.target.value)}
                        className="input-style smallerSize"
                        onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                    />
                </td>
                <td className="table-cell">
                    <input
                        type="text"
                        value={dropdownRow.input4}
                        onChange={(e) => handleDropdown38Change(rowIndex, "input4", e.target.value)}
                        className="input-style smallerSize"
                        onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                    />
                </td>
                <td className="table-cell">
                    <input
                        type="text"
                        value={dropdownRow.input5}
                        onChange={(e) => handleDropdown38Change(rowIndex, "input5", e.target.value)}
                        className="input-style smallerSize"
                        onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                    />
                </td>
                <td className="table-cell">
                    <input
                        type="text"
                        value={dropdownRow.input6}
                        onChange={(e) => handleDropdown38Change(rowIndex, "input6", e.target.value)}
                        className="input-style smallerSize"
                        onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                    />
                </td>
                
                </>  
                ) : dropdownRow.text1 === "β" ? (  
                    <>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input1", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input2}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input2", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input3}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input3", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input4}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input4", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input5}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input5", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input6}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input6", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    
                    </>
                ) : (  
                    <>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input1}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input1", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input2}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input2", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <input
                            type="text"
                            value={dropdownRow.input3}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input3", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        />
                    </td>
                    <td className="table-cell">
                        <select
                            value={dropdownRow.input4}
                            onChange={(e) => handleDropdown38Change(rowIndex, "input4", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
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
                            onChange={(e) => handleDropdown38Change(rowIndex, "input5", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
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
                            onChange={(e) => handleDropdown38Change(rowIndex, "input6", e.target.value)}
                            className="input-style smallerSize"
                            onKeyDown={(e) => handleEnterPress(e, index, true, "dropdown38")}
                        >
                            <option value="ΔΑ">Δ.Α.</option>
                            <option value="ΔΕ">Δ.Ε.</option>
                            <option value="ΟΚ">ΟΚ</option>
                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                        </select>
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

export default Row38;
