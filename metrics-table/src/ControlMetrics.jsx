import React, {useState} from "react";
import "./ControlMetrics.css";
import Row1 from "./Row1";
import Row4 from "./Row4";
import Rows5679 from "./Rows5-6-7-9";
import Row8 from "./Row8";
import Row11 from "./Row11";

function ControlMetrics(){
    const [data, setData] = useState([
        { id: 1, text: "Τύπος φωτιστικού (Συνεχούς/Μη συνεχούς)"},
        { id: 2, text: "Πηγή φωτισμού (Αριθμός Led-Διάταξη)", input1: "" },
        { id: 3, text: "Τύπος Led/λάμπα", input1: "" },
        { id: 4, text: "Ρεύμα Φόρτισης - Διάρκεια (Για τάση δικτύου = 1 x ονομαστική τάση δικτύου (110 VAC, 230 VAC, 245 VAC) (Ρεύμα φόρτισης x ώρες φόρτισης ≥ 1.5 x χωρητικότητα μπαταρίας = (0.2 * 23 = 4.6 Ah) > (1.5 * 3 Ah = 4.5 Ah)))", input1: "", input2: "" },
        { id: 5, text: "Τάση εξόδου του κυκλώματος φόρτισης (σε V DC)", input1: "", input2: "", input3: "", input4: ""  },
        { id: 6, text: "Τάση μπαταρίας για ένδειξη αποσύνδεξης (σε V DC)", input1: "", input2: "", input3: "", input4: ""  },
        { id: 7, text: "Ρεύμα Συντήρησης (σε mA DC) (1/5 της ονομαστικής φόρτισης)", input1: "", input2: "", input3: "", input4: ""  },
        { id: 8, text: "Είναι σβηστά τα LED της λάμπας όταν το φωτιστικό φορτίζει;", input1: "", input2: "" },
        { id: 9, text: "Δοκιμή φόρτισης με άδεια μπαταρία (0.7 V)", input1: "", input2: "" , input3: "", input4: "" },
        { id: 10, text: "'Έλεγχος σειριακού UART καταγραφής θερμοκρασίας (Honeywell)", input1: "" },
        { id: 11, text: "'Ρεύμα φωτεινής πηγής για αυτονομίες 1,3,8 ώρες"},
        { id: 12, text: "Εναλλαγή Τάσης 138VAC-195VAC"},
        { id: 13, text: "Αποκοπή Μπαταρίας (μέτρηση με πολύμετρο)"},
        { id: 14, text: "Κατανάλωση από τη μπαταρία στην εφεδρική λειτουργία (σε mA)...", input1: "", input2: "" , input3: ""},
        { id: 15, text: "Κατανάλωση από τη μπαταρία (ονομαστιή τάση μπαταρίας) στην εφεδρική λειτουργία (σε mA) όταν η τάση του δικτύου είναι 0,6 x μέγιστη τάση λειτουργίας (σε V AC). Η κατανάλωση πρέπει να είναι περίπου ίδια με την κατανάλωση που αναφερεται στην παραπάνω παραγραφο.", input1: "", input2: "" , input3: ""},
        { id: 16, text: "Κατανάλωση Φωτιστικού  στην κανονκή λειτουργια (μέτρηση με YOKOGAWA) με πλήρη διαμόρφωση"},
        { id: 17, text: "V AC =90V. Φωτιστικό μπαίνει στην αποκοπή. Ξυπνάει σε 1' με VAC=220V", input1: "" },
        { id: 18, text: "Τάση τροφοδοσίας μικρολεγκτή (αν υπάρχει) με χρήση wireless module. Όριο: Μέχρι 200mV κάτω από την ονομαστική τάση ...."},
        { id: 19, text: "Έλεγχοι κατα το trickle charge"},
        { id: 20, text: "Φωτεινότητα"},
      ]);

      const [selectedButton1, setSelectedButton1] = useState(false);
      const [selectedButton2, setSelectedButton2] = useState(false);

      const [duration1BAT, setDuration1BAT] = useState("");
      const [duration2BAT, setDuration2BAT] = useState("");

      const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
      };

      const [dropdown4Visible, setDropdown4Visible] = useState(null);
      const [dropdown11Visible, setDropdown11Visible] = useState(null); 

      const toggleDropdown4 = (index) => {
        setDropdown4Visible(dropdown4Visible === index ? null : index);
        if (dropdown4Visible === null) {
            setTimeout(() => {
              const firstDropdown4Input = document.querySelector(".dropdown-input1");
              if (firstDropdown4Input) firstDropdown4Input.focus();
            }, 50);
          }
      };
      
      const toggleDropdown11 = (index) => {
        setDropdown11Visible(dropdown11Visible === index ? null : index);
        if (dropdown11Visible === null) {
            setTimeout(() => {
              const firstDropdown11Input = document.querySelector(".dropdown-input1");
              if (firstDropdown11Input) firstDropdown11Input.focus();
            }, 50);
          }
      };
      const handleEnterPress = (e, index, isInput = false, isDropdown = false, dropdownIndex = null) => {
        if (e.key === 'Enter') {
          e.preventDefault();
    
          if (e.target.id === "duration1BAT") {
            duration2BATRef.current?.focus();
            return;
          }
          if (e.target.id === "duration2BAT" && !isDropdown) {
    
            toggleDropdown4(4);  
            return;
          }
      
          if (index === 3 && !isInput && !isDropdown) {
            toggleDropdown4(index);
            return;
          }
      
          if (index === 9 && !isInput && !isDropdown) {
            toggleDropdown11(index);
            return;
          }
    
          if (isDropdown) {
            const dropdownInputs = [...document.querySelectorAll(".dropdown-input1, .dropdown-input2, .dropdown-input3, .dropdown-input4")];
            let currentDropdownIndex = dropdownInputs.indexOf(e.target);
            let nextDropdownIndex = currentDropdownIndex + 1;
      
            if (nextDropdownIndex === dropdownInputs.length) {
              setTimeout(() => {
                const allInputs = [...document.querySelectorAll(".input-style")]; 
                let currentIndex = allInputs.indexOf(e.target); 
                let nextIndex = currentIndex + 1; 
            
                if (nextIndex < allInputs.length) {
                  allInputs[nextIndex].focus();
                }
              }, 50);
              return;
            }
      
            dropdownInputs[nextDropdownIndex]?.focus();
            return;
          }
      
          const allInputs = [...document.querySelectorAll(".input-style")];
          let currentIndex = allInputs.indexOf(e.target);
          let nextIndex = currentIndex + 1;
      
          if (nextIndex < allInputs.length) {
            allInputs[nextIndex].focus();
          }
        }
      };


      return (
        <div className="table-container">
          <h2>ΕΛΕΓΧΟΙ ΚΑΙ ΜΕΤΡΗΣΕΙΣ</h2>
          <table className="MetricsTable">
            <tbody>
              {data.map((row, index) => {
                if (index === 0) {
                    return (
                    <Row1 
                    key={row.id}
                    row={row}
                    index={index}
                    selectedButton1={selectedButton1}
                    selectedButton2={selectedButton2}
                    setSelectedButton1={setSelectedButton1}
                    setSelectedButton2={setSelectedButton2}
                    handleChange={handleChange}
                    handleEnterPress={handleEnterPress}
                    />
                    );
                } else if (index === 3) {
                  return (
                    <Row4 
                    key={row.id}
                    row={row}
                    index={index}
                    handleChange={handleChange}
                    handleEnterPress={handleEnterPress}
                    toggleDropdown4={toggleDropdown4}
                    dropdown4Visible={dropdown4Visible}
                    setDropdown4Visible={setDropdown4Visible}
                    duration1BAT={duration1BAT}
                    setDuration1BAT={setDuration2BAT}
                    duration2BAT={duration1BAT}
                    setDuration2BAT={setDuration2BAT}
                    />
                  );
              }else if(index===4 || index===5 || index===6 || index===8){
                return (
                  <Rows5679 
                  key={row.id}
                  row={row}
                  index={index}
                  handleChange={handleChange}
                  handleEnterPress={handleEnterPress}
                  />
                );
              }else if (index === 7) {
                return (
                  <Row8 
                  key={row.id}
                  row={row}
                  index={index}
                  handleChange={handleChange}
                  handleEnterPress={handleEnterPress}
                  />
                );
            }else if (index === 10) {
              return (
                <Row11 
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                toggleDropdown11={toggleDropdown11}
                dropdown11Visible={dropdown11Visible}
                setDropdown11Visible={setDropdown11Visible}
                />
              );
            }else {
                    return (
                    <tr key={row.id} className="table-row" data-row={index === 0 ? "0" : undefined}>
                    <td className="table-cell">{row.id}</td>
                    <td className="table-cell">{row.text}</td>
                    <td className="table-cell">
                        {"input1" in row && (
                        <input
                            type="text"
                            value={row.input1 || ""}
                            className="input-style"
                            onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                        )}
                    </td>
                    <td className="table-cell">
                        {"input2" in row && (
                        <input
                            type="text"
                            value={row.input2 || ""}
                            className="input-style"
                            onKeyDown={(e) => handleEnterPress(e, index, true)}
                        />
                        )}
                    </td>
                    </tr>
                    );
                }
              })}
            </tbody>
          </table>
        </div>
      );
    }

export default ControlMetrics;