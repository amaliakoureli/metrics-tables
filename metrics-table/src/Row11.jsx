import React, {useState} from "react";
import "./Row4.css";


function Row11({ row, index, handleEnterPress,toggleDropdown11, dropdown11Visible, setDropdown11Visible}){

    const [dropdown11Data, setDropdown11Data] = useState([
        { text1: "α", text2: "Ρεύμα/Τάση φωτεινής πηγής στο δίκτυο για 1 ώρα αυτονομίας (σε mA DC)", input1: "", input2: "" },
        { text1: "β", text2: "Ρεύμα/Τάση φωτεινής πηγής στη εφεδρική λειτουργία για 1 ώρα αυτονομίας (σε mA DC)", input1: ""},
        { text1: "γ", text2: "Ελάχιστο Ρεύμα LED 1 ώρα αυτονομίας (σε mA/LED). Μετρημένο σε τάση μπαταρίας από την τάση αποκοπής μέχρι την μέγιστη τάση", input1: ""},
    
        { text1: "δ", text2: "Ρεύμα/Τάση φωτεινής πηγής στο δίκτυο για 3 ώρες αυτονομίας (σε mA DC)", input1: "", input2: "" },
        { text1: "ε", text2: "Ρεύμα/Τάση φωτεινής πηγής στη εφεδρική λειτουργία για 3 ώρες αυτονομίας (σε mA DC)", input1: "" },
        { text1: "ζ", text2: "Ελάχιστο Ρεύμα LED 3 ώρες αυτονομίας (σε mA/LED). Μετρημένο σε τάση μπαταρίας από την τάση αποκοπής μέχρι την μέγιστη τάση", input1: ""},
    
        { text1: "η", text2: "Ρεύμα/Τάση φωτεινής πηγής στο δίκτυο για 8 ώρες αυτονομίας (σε mA DC)", input1: "", input2: "" },
        { text1: "θ", text2: "Ρεύμα/Τάση φωτεινής πηγής στη εφεδρική λειτουργία για 8 ώρες αυτονομίας (σε mA DC)", input1: "" },
        { text1: "ι", text2: "Ελάχιστο Ρεύμα LED 8 ώρες αυτονομίας (σε mA/LED). Μετρημένο σε τάση μπαταρίας από την τάση αποκοπής μέχρι την μέγιστη τάση", input1: ""},
    
      ]);


      const handleDropdown11Change = (rowIndex, field, value) => {
        const newDropdown11Data = [...dropdown11Data];
        newDropdown11Data[rowIndex][field] = value;
        setDropdown11Data(newDropdown11Data);
      };
    


      
return(
<>
                        <tr key={row.id + "-1"} className="fourth-row">
                            <td className="table-cell">
                                <button onClick={() => toggleDropdown11(index)} className="dropdown-button-style">
                                {row.id}
                                </button>
                            </td>
                            <td className="table-cell">{row.text}</td>
                            </tr>
                            <tr key={row.id + "-subrow"} className={`table-row ${dropdown11Visible === index ? 'visible' : 'hidden'}`}>
                            <td colSpan="4" className="table-cell">
                                {dropdown11Visible === index && (
                                <table className="table">
                                    <tbody>
                                    {dropdown11Data.map((dropdownRow, rowIndex) => (
                                      <tr key={rowIndex} className="table-row">
                                        <td className="table-cell">{dropdownRow.text1}</td>
                                        <td className="table-cell">{dropdownRow.text2}</td>
                                        
                                        <td className="table-cell">
                                          <input
                                            type="text"
                                            value={dropdownRow.input1}
                                            onChange={(e) =>
                                              handleDropdown11Change(rowIndex, "input1", e.target.value)
                                            }  
                                            className="input-style dropdown-input1" 
                                            onKeyDown={(e) =>
                                              handleEnterPress(e, rowIndex, true)
                                            } 
                                          />
                                        </td>
                                        
                                        
                                        {dropdownRow.input2 !== undefined && (
                                        <td className="table-cell">
                                          <select
                                            value={dropdownRow.input2}
                                            onChange={(e) =>
                                              handleDropdown11Change(rowIndex, "input2", e.target.value)
                                            }
                                            className="input-style dropdown-input2"
                                            onKeyDown={(e) =>
                                              handleEnterPress(e, rowIndex, true)
                                            } 
                                          >
                                            <option value="ΔΑ">Δ.Α.</option>
                                            <option value="ΔΕ">Δ.Ε.</option>
                                            <option value="ΟΚ">ΟΚ</option>
                                            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
                                          </select>
                                        </td>
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

export default Row11;





