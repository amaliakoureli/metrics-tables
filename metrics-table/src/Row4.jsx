import React, {useState} from "react";
import "./Row4.css";


function Row4({ row, 
                index, 
                handleEnterPress,
                toggleDropdown4,
                dropdown4Visible, 
                setDropdown4Visible,
                duration1BAT, 
                setDuration1BAT, 
                duration2BAT, 
                setDuration2BAT,
                duration1BATRef,
                duration2BATRef}){

    const [dropdown4Data, setDropdown4Data] = useState([
        { text1: "α", text2: "Ρεύμα φόρτισης μπαταρίας (σε mA DC), για μπαταρία 4.4V DC.", input1: "", input2: "", input3: "", input4: ""  },
        { text1: "β", text2: "Ρεύμα φόρτισης μπαταρίας (σε mA DC), για μπαταρία 3.6V DC.", input1: "", input2: "" , input3: "", input4: "" },
        { text1: "γ", text2: "Ρεύμα φόρτισης μπαταρίας (σε mA DC), για μπαταρία 3.2V DC.", input1: "", input2: "", input3: "", input4: ""  },
        { text1: "δ", text2: "Ρεύμα φόρτισης για τάση δικτύου = 0.9 x ονομαστική τάση (Max τάση μπαταρίας)", input1: "", input2: "", input3: "", input4: ""  },
        { text1: "ε", text2: "Ρεύμα φόρτισης για τάση δικτύου = 1.06 x ονομαστική τάση (Max τάση μπαταρίας)", input1: "", input2: "" , input3: "", input4: "" },
        { text1: "ζ", text2: "Τάση μπαταρίας όταν είναι φορτισμένη (συνδεδεμένη πάνω στην συσκευή) (σε V DC)", input1: "", input2: "" , input3: "", input4: "" },
      ]);

      const handleDropdown4Change = (rowIndex, field, value) => {
        const newDropdown4Data = [...dropdown4Data];
        newDropdown4Data[rowIndex][field] = value;
        setDropdown4Data(newDropdown4Data);
      };  
    
      
return(
<>
<tr key={row.id + "-1"} className="fourth-row">
    <td className="table-cell" rowSpan="3">
        <button onClick={() => toggleDropdown4(index)} className="dropdown-button-style">
            {row.id}
        </button>
    </td>

    <td className="table-cell" rowSpan="2">
        Ρεύμα Φόρτισης – Διάρκεια Φόρτισης
    </td>

    <td className="table-cell">
    <input
      type="text"
      id="duration1BAT"
      ref={duration1BATRef}
      value={duration1BAT}
      onChange={(e) => setDuration1BAT(e.target.value, duration1BATRef?.current, duration2BATRef?.current)}
      onKeyDown={(e) => handleEnterPress(e, index, true)}
      className="input-style text-right"
      placeholder="Διάρκεια με 1BAT"

    />
    </td>

</tr>

<tr className="fourth-row">

    <td className="table-cell">
    <input
      type="text"
      id="duration2BAT"
      ref={duration2BATRef}
      value={duration2BAT}
      onChange={(e) => setDuration2BAT(e.target.value, duration1BATRef?.current, duration2BATRef?.current)}
      onKeyDown={(e) => handleEnterPress(e, index, true)}
      className="input-style text-right"
      placeholder="Διάρκεια με 2BAT"
    />
    </td>
</tr>

<tr className="fourth-row">

    <td className="table-cell">
        Για τάση δικτύου = 1 x ονομαστική τάση δικτύου (110VAC, 230VAC, 245VAC)<br />
        (Ρεύμα φόρτισης × ώρες φόρτισης ≥ 1.5 × χωρητικότητα μπαταρίας = ............)
    </td>
        <td className="table-cell">
                <tr>
                    <td className="table-cell">1BAT</td>
                    <td className="table-cell">2BAT</td>
                    <td className="table-cell">1BAT</td>
                    <td className="table-cell">2BAT</td>
                </tr>
    </td>
</tr>

<tr key={row.id + "-subrow"} className={`table-row ${dropdown4Visible === index ? 'visible' : 'hidden'}`}>
    <td colSpan="4" className="table-cell">
        {dropdown4Visible === index && (
            <table className="table">
                <tbody>
                    {dropdown4Data.map((dropdownRow, rowIndex) => (
                        <tr key={rowIndex} className="table-row">
                            <td className="table-cell">{dropdownRow.text1}</td>
                            <td className="table-cell">{dropdownRow.text2}</td>
                            <td className="table-cell">
                                <input
                                    type="text"
                                    value={dropdownRow.input1}
                                    onChange={(e) => handleDropdown4Change(rowIndex, "input1", e.target.value)}
                                    className="input-style dropdown4-input1"
                                    onKeyDown={(e) => handleEnterPress(e, index, true, true, rowIndex, "dropdown4")}
                                />
                            </td>
                            <td className="table-cell">
                                <input
                                    type="text"
                                    value={dropdownRow.input2}
                                    onChange={(e) => handleDropdown4Change(rowIndex, "input2", e.target.value)}
                                    className="input-style dropdown4-input2"
                                    onKeyDown={(e) => handleEnterPress(e, index, true, true, rowIndex, "dropdown4")}
                                />
                            </td>
                            <td className="table-cell">
                                <input
                                    type="text"
                                    value={dropdownRow.input3}
                                    onChange={(e) => handleDropdown4Change(rowIndex, "input3", e.target.value)}
                                    className="input-style dropdown4-input3"
                                    onKeyDown={(e) => handleEnterPress(e, index, true, true, rowIndex, "dropdown4")}
                                />
                            </td>
                            <td className="table-cell">
                                <input
                                    type="text"
                                    value={dropdownRow.input4}
                                    onChange={(e) => handleDropdown4Change(rowIndex, "input4", e.target.value)}
                                    className="input-style dropdown4-input4"
                                    onKeyDown={(e) => handleEnterPress(e, index, true, true, rowIndex, "dropdown4")}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </td>
</tr>
</>
)
}

export default Row4;





