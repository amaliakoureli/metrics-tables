import React, {useState,useRef,useEffect} from "react";
import "./ControlMetrics.css";
import Row1 from "./Row1";
import Row4 from "./Row4";
import Rows5679 from "./Rows5-6-7-9";
import Row8 from "./Row8";
import Row11 from "./Row11";
import Row12 from "./Row12";
import Row13 from "./Row13";
import Row14 from "./Row14";
import Row15 from "./Row15";
import Row18 from "./Row18";
import Row19 from "./Row19";
import Row20 from "./Row20";
import Row21 from "./Row21";
import Row22 from "./Row22";
import Row25 from "./Row25";
import Row28 from "./Row28";
import RowsSingleOk from "./RowsSingleOk";
import Row16 from "./Row16";
import RowsDoubleOk from "./RowsDoubleOk";
import Row31 from "./Row31";
import Row34 from "./Row34";


function ControlMetrics(){
    const [data, setData] = useState([
        { id: 1, text: "Τύπος φωτιστικού (Συνεχούς/Μη συνεχούς)"},
        { id: 2, text: "Πηγή φωτισμού (Αριθμός Led-Διάταξη)", input1: "" },
        { id: 3, text: "Τύπος Led/λάμπα", input1: "" },
        { id: 4, text: "Ρεύμα Φόρτισης - Διάρκεια (Για τάση δικτύου = 1 x ονομαστική τάση δικτύου (110 VAC, 230 VAC, 245 VAC) (Ρεύμα φόρτισης x ώρες φόρτισης ≥ 1.5 x χωρητικότητα μπαταρίας = {middleInput} mA)",middleInput:"", input1: "", input2: "" },
        { id: 5, text: "Τάση εξόδου του κυκλώματος φόρτισης (σε V DC)", input1: "", input2: "", input3: "", input4: ""  },
        { id: 6, text: "Τάση μπαταρίας για ένδειξη αποσύνδεξης (σε V DC)", input1: "", input2: "", input3: "", input4: ""  },
        { id: 7, text: "Ρεύμα Συντήρησης (σε mA DC) (1/5 της ονομαστικής φόρτισης)", input1: "", input2: "", input3: "", input4: ""  },
        { id: 8, text: "Είναι σβηστά τα LED της λάμπας όταν το φωτιστικό φορτίζει;", input1: "", input2: "" },
        { id: 9, text: "Δοκιμή φόρτισης με άδεια μπαταρία (0.7 V)", input1: "", input2: "" , input3: "", input4: "" },
        { id: 10, text: "'Έλεγχος σειριακού UART καταγραφής θερμοκρασίας (Honeywell)", input1: "" },
        { id: 11, text: "'Ρεύμα φωτεινής πηγής για αυτονομίες 1,3,8 ώρες"},
        { id: 12, text: "Εναλλαγή Τάσης 138VAC-195VAC"},
        { id: 13, text: "Αποκοπή Μπαταρίας (μέτρηση με πολύμετρο)"},
        { id: 14, text: "<b>Κατανάλωση από τη μπαταρία στην εφεδρική λειτουργία (σε mA) <br><u> -> Για μπαταρίες Ni-Cd, Ni-Mh, LiFePo4:</u> <br> Imax < (60min:0.4xC5A, 90min:0.51xC5A, 180min:0.25xC5A, 480min:0.1xC5A) <br> <u> -> Για μπαταρία Μολύβδου (Pb):</u> <br> Imax < (60min:0.4xC20A, 90min:0.34xxC20A, 180min:0.17xxC20A) </b>", limit1: "", limit2: "" , limit3: ""},
        { id: 15, text: "Κατανάλωση από τη μπαταρία (ονομαστιή τάση μπαταρίας) στην εφεδρική λειτουργία (σε mA) όταν η τάση του δικτύου είναι 0,6 x μέγιστη τάση λειτουργίας (σε V AC). Η κατανάλωση πρέπει να είναι περίπου ίδια με την κατανάλωση που αναφερεται στην παραπάνω παραγραφο.", input1: "", input2: "" , input3: ""},
        { id: 16, text: "Κατανάλωση Φωτιστικού  στην κανονκή λειτουργια (μέτρηση με YOKOGAWA) με πλήρη διαμόρφωση"},
        { id: 17, text: "V AC =90V. Φωτιστικό μπαίνει στην αποκοπή. Ξυπνάει σε 1' με VAC=220V", input1: "" },
        { id: 18, text: "Τάση τροφοδοσίας μικρολεγκτή (αν υπάρχει) με χρήση wireless module. Όριο: Μέχρι 200mV κάτω από την ονομαστική τάση ...."},
        { id: 19, text: "Έλεγχοι κατα το trickle charge"},
        { id: 20, text: "Φωτεινότητα"},
        { id: 21, text: "Βραχυκύκλωμα LEDοσειράς και απόκριση του φωτιστικού"},
        { id: 22, text: "Κυκλώματα ελέγχου- επικοινωνίας"},
        { id: 23, text: "Δοκιμή κατανάλωση από την μπαταρία στην κατάσταση rest mode ή inhibit. Το ρεύμα πρέπει να είναι <0,0015 x C5Ah(NiCd) ή <25 x 0,000001 x C5aA(NiMh) ή <0.00001 x C20Ah(Pb)", input1:""},
        { id: 24, text: "Δοκιμή ενδεικτικών LED και τις λειτουργίες τους και συγκριση με την εκτυπωση στο πλαστικό", input1:""},
        { id: 25, text: "Θερμικές δοκιμές  υλικών κατά την λειτουργία (και με την χρήση wireless module, αν δεχεται)"},
        { id: 26, text: "Βραχυκύκλωμα φορτιστή (στο φισ μπαταρίας) για 1 λεπτό σε τάση 1.06 x ονομαστική τάση δικτύου και μέτρηση θερμοκρασίας  στο κύκλωμα φόρτισης" , input1:"", input2:""},
        { id: 27, text: "Δοκιμές τοποθέτησης σε όλα τα πλαστικά που θα μπαίνει η πλακέτα", input1:""},
        { id: 28, text: "EMC - Ασφάλεια"},
        { id: 29, text: "Έλεγχος αντοχής σε θερμοθάλαμο (στα όρια της θερμοκρασίας λειτουργίας).(Δες το τέλος του εγγράφου για ναλυτικά βήματα)", input1:""},
        { id: 30, text: "Πρόγραμμα για το ΗΕ-4000 / ΗΕ-3000", input1:""},
        { id: 31, text: "Το προιόν παράγεται με μπαταρία:"},
        { id: 32, text: "'Εχει δυνατότητα Dimming;", input1:"", input2:""},
        { id: 33, text: "Έλεγχος σειράς εκτέλεσης έξυπνων λειτουργιών από το μπουτόν", input1:"", input2:""},
        { id: 34, text: "Έλεγχος ομαλής έναυσης λεντοσειράς", text1:"1H", text2:"3H", text3:"8H", text4:"1H", text5:"3H", text6:"8H"},
        { id: 35, text: "Έλεγχος σφάλματος λεντοσειράς σε τεστ, με και χωρίς L1", input1:"", input2:""},
        { id: 36, text: "Συγκριτικός έλεγχος τεχνικών στοιχείων, λειτουργίας φωτιστικού και τεχνικού εγχειριδίου (αν υπάρχει).", input1:""},
        { id: 37, text: "Έλεγχος αποστάσεων πλακέτας (Creepage-Clearance)", input1:""},
        { id: 38, text: "Έλεγχος ποιότητας φωτιστικού (χωρίς flicker) ", text1:"", text2:"", text3:""},
        { id: 39, text: "Μετρήσεις πικτογραφήματος", input1:"", input2:"", input3:"", input4:"", input5:"", input6:""},
        { id: 40, text: "IP Test", input1:""},
        { id: 41, text: "Dip Switch Test (σε φωτιστικά που έχουν Dip switches)", input1:""},
        { id: "", text: "Απαιτήσεις BSI", text1:""},
        { id: 42, text: "Max open circuit (V LED+ - V LED- σε V DC, χωρλις τη LEDοσειρά πάνω)(Uout(V DC) : (C1 -> C2 & C1,C2 ->GND). Αν δεν έχει C1 ,C2 τότε είναι η Max open circuit voltage)", input1:""},
        { id: 43, text: "tc (θερμόμετρο σμείο της πλακέτας, σε °C)", input1:""},
        { id: 44, text: "Μέγιστη θερμοκρασία στην λεντοσειρά", input1:""},
        { id: 45, text: "EOFp = P LED,emergency/ P LED,normal", input1:""}
      ]);

      const [selectedButton1, setSelectedButton1] = useState(false);
      const [selectedButton2, setSelectedButton2] = useState(false);

      const [duration1BAT, setDuration1BAT] = useState("");
      const [duration2BAT, setDuration2BAT] = useState("");

      const duration1BATRef = useRef(null);
      const duration2BATRef = useRef(null);      

      const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
      };

      const [dropdown4Visible, setDropdown4Visible] = useState(null);
      const [dropdown11Visible, setDropdown11Visible] = useState(null); 
      const [dropdown12Visible, setDropdown12Visible] = useState(null); 
      const [dropdown13Visible, setDropdown13Visible] = useState(null); 
      const [dropdown14Visible, setDropdown14Visible] = useState(null); 
      const [dropdown16Visible, setDropdown16Visible] = useState(null); 
      const [dropdown18Visible, setDropdown18Visible] = useState(null); 
      const [dropdown19Visible, setDropdown19Visible] = useState(null); 
      const [dropdown20Visible, setDropdown20Visible] = useState(null); 
      const [dropdown21Visible, setDropdown21Visible] = useState(null); 
      const [dropdown22Visible, setDropdown22Visible] = useState(null); 
      const [dropdown25Visible, setDropdown25Visible] = useState(null); 
      const [dropdown28Visible, setDropdown28Visible] = useState(null); 
      const [dropdown31Visible, setDropdown31Visible] = useState(null); 
      const [dropdown34Visible, setDropdown34Visible] = useState(null); 

      const toggleDropdown4 = (index) => {
        setDropdown4Visible(dropdown4Visible === index ? null : index);
    };

      useEffect(() => {
        if (dropdown4Visible === 4) {
          setTimeout(() => {
            const dropdownInputs = [...document.querySelectorAll(".dropdown4-inline-input, .input-style")];
            if (dropdownInputs.length > 0) {
              dropdownInputs[0].focus(); 
            }
          }, 50);
        }
      }, [dropdown4Visible]);
      

 
      const toggleDropdown11 = (index) => {
        if (dropdown11Visible === index) {
          setDropdown11Visible(null); 
        } else {
          setDropdown11Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown11-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown12 = (index) => {
        if (dropdown12Visible === index) {
          setDropdown12Visible(null); 
        } else {
          setDropdown12Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown12-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };
      
      const toggleDropdown13 = (index) => {
        if (dropdown13Visible === index) {
          setDropdown13Visible(null); 
        } else {
          setDropdown13Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown13-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown14 = (index) => {
        if (dropdown14Visible === index) {
          setDropdown14Visible(null); 
        } else {
          setDropdown14Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown14-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const firstDropdown16InputRef = useRef(null);
      useEffect(() => {
          if (dropdown16Visible === 15 && firstDropdown16InputRef.current) {
              firstDropdown16InputRef.current.focus();
          }
      }, [dropdown16Visible]);
  
      const toggleDropdown16 = (index) => {
          setDropdown16Visible((prev) => (prev === index ? null : index));
      };

      const toggleDropdown18 = (index) => {
        if (dropdown18Visible === index) {
          setDropdown18Visible(null); 
        } else {
          setDropdown18Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown18-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown19 = (index) => {
        if (dropdown19Visible === index) {
          setDropdown19Visible(null); 
        } else {
          setDropdown19Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown19-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown20 = (index) => {
        if (dropdown20Visible === index) {
          setDropdown20Visible(null); 
        } else {
          setDropdown20Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown20-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown21 = (index) => {
        if (dropdown21Visible === index) {
          setDropdown21Visible(null); 
        } else {
          setDropdown21Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown21-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };
      
      const toggleDropdown22 = (index) => {
        if (dropdown22Visible === index) {
          setDropdown22Visible(null); 
        } else {
          setDropdown22Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown22-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown25 = (index) => {
        if (dropdown25Visible === index) {
          setDropdown25Visible(null); 
        } else {
          setDropdown25Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown25-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const toggleDropdown28 = (index) => {
        if (dropdown28Visible === index) {
          setDropdown28Visible(null); 
        } else {
          setDropdown28Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown28-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };
      const toggleDropdown31 = (index) => {
        if (dropdown31Visible === index) {
          setDropdown31Visible(null); 
        } else {
          setDropdown31Visible(index);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown31-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        }
      };

      const firstDropdownInputRef = useRef(null);
      useEffect(() => {
          if (dropdown34Visible === 33 && firstDropdownInputRef.current) {
              firstDropdownInputRef.current.focus();
          }
      }, [dropdown34Visible]);
  
      const toggleDropdown34 = (index) => {
          setDropdown34Visible((prev) => (prev === index ? null : index));
      };
      
      const handleEnterPress = (e, index, isInput = false, dropdownType = null) => {
        if (e.key === 'Enter') {
          e.preventDefault();
      
          if (e.target.id === "duration1BAT") {
            duration2BATRef.current?.focus();
            return;
          }
      
          if (e.target.id === "duration2BAT") {
            const allInputs = [...document.querySelectorAll(".input-style")];
            const currentIndex = allInputs.indexOf(e.target);
            const nextIndex = currentIndex + 1;
            if (nextIndex < allInputs.length) {
              allInputs[nextIndex].focus();
            }
            return;
          }
          if (e.target.classList.contains("dropdown4-inline-input")) {
            toggleDropdown4(index);

            setTimeout(() => {
                const firstMiddleInput2 = document.querySelector(".dropdown4-middleInput2");
                if (firstMiddleInput2) firstMiddleInput2.focus();
            }, 50);

            return;
        }
          if (index === 9 && dropdown11Visible !== 10) {
            toggleDropdown11(10);

            setTimeout(() => {
              const firstInput = document.querySelector(".dropdown11-input1");
              if (firstInput) firstInput.focus();
            }, 100);

            return;
          }

          if (dropdownType === "dropdown4") {
            const dropdown4Inputs = [...document.querySelectorAll(".dropdown4-middleInput2, .dropdown4-input1, .dropdown4-input2, .dropdown4-input3, .dropdown4-input4")];
            let currentDropdownIndex = dropdown4Inputs.indexOf(e.target);
            let nextDropdownIndex = currentDropdownIndex + 1;
        
            if (nextDropdownIndex >= dropdown4Inputs.length) {
                const allInputs = [...document.querySelectorAll(".input-style")];
                const currentIndex = allInputs.indexOf(e.target);
                const nextIndex = currentIndex + 1;
                if (nextIndex < allInputs.length) {
                    allInputs[nextIndex].focus();
                }
            } else {
                dropdown4Inputs[nextDropdownIndex]?.focus();
            }
            return;
        }
        
      
          if (dropdownType === "dropdown11") {
            const isLastInput = e.target.id === "dropdown11-last";
          
            if (isLastInput) {
              toggleDropdown12(11);
              setTimeout(() => {
                const firstInput = document.querySelector(".dropdown12-input1");
                if (firstInput) firstInput.focus();
              }, 100);
            } else {
              // Move to next input manually (optional fallback behavior)
              const dropdown11Inputs = [
                ...document.querySelectorAll(".dropdown11-input1, .dropdown11-input2")
              ];
              const currentIndex = dropdown11Inputs.indexOf(e.target);
              dropdown11Inputs[currentIndex + 1]?.focus();
            }
          
            return;
          }
      

          if (dropdownType === "dropdown12") {
            const isLastInput = e.target.id === "dropdown12-last";
          
            if (isLastInput) {
              toggleDropdown13(12);
              setTimeout(() => {
                const firstInput = document.querySelector(".dropdown13-input1");
                if (firstInput) firstInput.focus();
              }, 100);
            } else {
              const dropdown12Inputs = [
                ...document.querySelectorAll(".dropdown12-input1, .dropdown12-input2")
              ];
              const currentIndex = dropdown12Inputs.indexOf(e.target);
              dropdown12Inputs[currentIndex + 1]?.focus();
            }
          
            return;
          }

          if (dropdownType === "dropdown13") {
            const dropdown13Inputs = [...document.querySelectorAll(".dropdown13-input1, .dropdown13-text3")];
            let currentDropdownIndex = dropdown13Inputs.indexOf(e.target);
            let nextDropdownIndex = currentDropdownIndex + 1;
      
            if (nextDropdownIndex >= dropdown13Inputs.length) {
              const allInputs = [...document.querySelectorAll(".input-style")];
              const currentIndex = allInputs.indexOf(e.target);
              const nextIndex = currentIndex + 1;
              if (nextIndex < allInputs.length) {
                allInputs[nextIndex].focus();
              }
            } else {
              dropdown13Inputs[nextDropdownIndex]?.focus();
            }
            return;
          }
          if (e.target.id === "limit3") {
            toggleDropdown14(13);
            setTimeout(() => {
              const firstMiddleInput = document.querySelector(".first-middle-input");
              if (firstMiddleInput) {
                  firstMiddleInput.focus();
              }
          }, 50);
            return;
            
          }

          if (dropdownType === "dropdown14") {
            const dropdown14Inputs = [...document.querySelectorAll(".dropdown14-inline-input, .dropdown14-input1, .dropdown14-input2")];
            let currentDropdownIndex = dropdown14Inputs.indexOf(e.target);
            let nextDropdownIndex = currentDropdownIndex + 1;
        
            if (nextDropdownIndex < dropdown14Inputs.length) {
                dropdown14Inputs[nextDropdownIndex]?.focus();
            } else {
                setTimeout(() => {
                    const allRows = [...document.querySelectorAll(".table-row")];
                    let currentRow = e.target.closest(".table-row"); 
                    let currentRowIndex = allRows.indexOf(currentRow); 
                    if (currentRowIndex !== -1 && currentRowIndex + 1 < allRows.length) {
                        let nextRow = allRows[currentRowIndex + 1]; 
                        
                        if (nextRow) {
                            const nextRowInputs = [...nextRow.querySelectorAll(".input-style, .dropdown14-inline-input, .dropdown14-input1, .dropdown14-input2")];
                            if (nextRowInputs.length > 0) {
                                nextRowInputs[0].focus(); 
                            }
                        }
                    }
                }, 50);
            }
            return;
        }      

        const isLastInputInRow15 = index === 14 && e.target.classList.contains("input3");

        if (isLastInputInRow15) {
            toggleDropdown16(15);
            return;
        }
        
        if (index === 16 && dropdown18Visible !== 17) {
          toggleDropdown18(17);
    
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown18-input1, .dropdown18-input2");
            if (firstInput) firstInput.focus();
          }, 100);
    
          return;
        }
      if (dropdownType === "dropdown18") {
        const isLastInput = e.target.id === "dropdown18-last";
      
        if (isLastInput) {
          toggleDropdown19(18);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown19-input1");
            if (firstInput) firstInput.focus();
          }, 100);
        } else {
          const dropdown18Inputs = [
            ...document.querySelectorAll(".dropdown18-input1, .dropdown18-input2")
          ];
          const currentIndex = dropdown18Inputs.indexOf(e.target);
          dropdown18Inputs[currentIndex + 1]?.focus();
        }
      
        return;
      }

      if (dropdownType === "dropdown19") {
        const isLastInput = e.target.id === "dropdown19-last";
      
        if (isLastInput) {
          toggleDropdown20(19);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown20-input1");
            if (firstInput) firstInput.focus();
          }, 100);
        } else {
          const dropdown19Inputs = [
            ...document.querySelectorAll(".dropdown19-input1, .dropdown19-input2, .dropdown19-input3, .dropdown19-input4")
          ];
          const currentIndex = dropdown19Inputs.indexOf(e.target);
          dropdown19Inputs[currentIndex + 1]?.focus();
        }
      
        return;
      }

      if (dropdownType === "dropdown20") {
        const isLastInput = e.target.id === "dropdown20-last";
      
        if (isLastInput) {
          toggleDropdown21(20);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown21-input1");
            if (firstInput) firstInput.focus();
          }, 100);
        } else {
          const dropdown20Inputs = [
            ...document.querySelectorAll(".dropdown20-input1, .dropdown20-input2, .dropdown20-input3")
          ];
          const currentIndex = dropdown20Inputs.indexOf(e.target);
          dropdown20Inputs[currentIndex + 1]?.focus();
        }
      
        return;
      }

      if (dropdownType === "dropdown21") {
        const isLastInput = e.target.id === "dropdown21-last";
      
        if (isLastInput) {
          toggleDropdown22(21);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown22-input1");
            if (firstInput) firstInput.focus();
          }, 100);
        } else {
          const dropdown21Inputs = [
            ...document.querySelectorAll(".dropdown21-input1")
          ];
          const currentIndex = dropdown21Inputs.indexOf(e.target);
          dropdown21Inputs[currentIndex + 1]?.focus();
        }
      
        return;
      }

      
    if (index === 23 && dropdown25Visible !== 24) {
      toggleDropdown25(24);

      setTimeout(() => {
        const firstInput = document.querySelector(".dropdown25-input1, .dropdown25-input2");
        if (firstInput) firstInput.focus();
      }, 100);

      return;
    }

    if (index === 26 && dropdown28Visible !== 27) {
      toggleDropdown28(27);

      setTimeout(() => {
        const firstInput = document.querySelector(".dropdown28-input1, .dropdown28-input2");
        if (firstInput) firstInput.focus();
      }, 100);

      return;
    }
    
    if (index === 29 && dropdown31Visible !== 30) {
      toggleDropdown31(30);

      setTimeout(() => {
        const firstInput = document.querySelector(".dropdown31-input1");
        if (firstInput) firstInput.focus();
      }, 100);

      return;
    }

    const isLastInputInRow33 = index === 32 && e.target.classList.contains("input2");

    if (isLastInputInRow33) {
        toggleDropdown34(33);
        return;
    }

        if (e.target.id === "limit3") {
          const firstMiddleInput = document.querySelector(".first-middle-input");
          
          console.log("Πατήθηκε Enter στο limit3!");
          console.log("Βρέθηκε πρώτο middleInput:", firstMiddleInput);
          
          if (firstMiddleInput) {
              firstMiddleInput.focus();
              console.log("Το focus δόθηκε στο πρώτο middleInput!");
          } else {
              console.log("⚠ Δεν βρέθηκε πρώτο middleInput!");
          }
          return;
      }

          if (dropdownType === "dropdown4") {
            const dropdown4Inputs = [...document.querySelectorAll(".dropdown4-input1, .dropdown4-input2")];
            let currentDropdownIndex = dropdown4Inputs.indexOf(e.target);
            let nextDropdownIndex = currentDropdownIndex + 1;
      
            if (nextDropdownIndex >= dropdown4Inputs.length) {
              const allInputs = [...document.querySelectorAll(".input-style")];
              const currentIndex = allInputs.indexOf(e.target);
              const nextIndex = currentIndex + 1;
              if (nextIndex < allInputs.length) {
                allInputs[nextIndex].focus();
              }
            } else {
              dropdown4Inputs[nextDropdownIndex]?.focus();
            }
            return;
          }         


          const allInputs = [...document.querySelectorAll(".input-style")];
          const currentIndex = allInputs.indexOf(e.target);
          const nextIndex = currentIndex + 1;
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
                    setDuration1BAT={setDuration1BAT}
                    duration2BAT={duration2BAT}
                    setDuration2BAT={setDuration2BAT}
                    duration1BATRef={duration1BATRef}
                    duration2BATRef={duration2BATRef}
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
            }else if (index === 11) {
              return (
                <Row12
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                toggleDropdown12={toggleDropdown12}
                dropdown12Visible={dropdown12Visible}
                setDropdown12Visible={setDropdown12Visible}
                />
              );
            }else if (index === 12) {
              return (
                <Row13
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                toggleDropdown13={toggleDropdown13}
                dropdown13Visible={dropdown13Visible}
                setDropdown13Visible={setDropdown13Visible}
                />
              );
            }else if (index === 13) {
              return (
                <Row14
                key={row.id}
                row={row}
                index={index}
                limit1={row.limit1}
                limit2={row.limit2}
                limit3={row.limit3}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                toggleDropdown14={toggleDropdown14}
                dropdown14Visible={dropdown14Visible}
                setDropdown14Visible={setDropdown14Visible}
                />
              );
            }
            else if (index === 14) {
              return (
                <Row15
                key={row.id}
                row={row}
                index={index}
                input1={row.input1}
                input2={row.input2}
                input3={row.input3}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                />
              );
            }else if (index === 15) {
              return (
                <Row16
                key={row.id}
                row={row}
                index={index}
                toggleDropdown16={ toggleDropdown16}
                dropdown16Visible={ dropdown16Visible} 
                setDropdown16Visible={ setDropdown16Visible}
                handleEnterPress={handleEnterPress}
                firstDropdown16InputRef={firstDropdown16InputRef}
                />
              );
            }else if (index === 17) {
              return (
                <Row18
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown18={toggleDropdown18}
                dropdown18Visible={dropdown18Visible}
                setDropdown18Visible={setDropdown18Visible}
                />
              );
            }
            else if (index === 18) {
              return (
                <Row19
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                toggleDropdown19={toggleDropdown19}
                dropdown19Visible={dropdown19Visible}
                setDropdown19Visible={setDropdown19Visible}
                />
              );
            }else if (index === 19) {
              return (
                <Row20
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown20={toggleDropdown20}
                dropdown20Visible={dropdown20Visible}
                setDropdown20Visible={setDropdown20Visible}
                />
              );
            }else if (index === 20) {
              return (
                <Row21
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown21={toggleDropdown21}
                dropdown21Visible={dropdown21Visible}
                setDropdown21Visible={setDropdown21Visible}
                />
              );
            }else if (index === 21) {
              return (
                <Row22
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown22={toggleDropdown22}
                dropdown22Visible={dropdown22Visible}
                setDropdown22Visible={setDropdown22Visible}
                />
              );
            }else if (index === 24) {
              return (
                <Row25
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown25={toggleDropdown25}
                dropdown25Visible={dropdown25Visible}
                setDropdown25Visible={setDropdown25Visible}
                />
              );
            }else if (index === 27) {
              return (
                <Row28
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown28={toggleDropdown28}
                dropdown28Visible={dropdown28Visible}
                setDropdown28Visible={setDropdown28Visible}
                />
              );
            }else if(index===23 || index===26 || index===28 || index===29|| index===35|| index===36 || index===39 || index===40 ){
              return (
                <RowsSingleOk
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                />
              );
            }else if(index===32 || index===34){
              return (
                <RowsDoubleOk
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
                />
              );
            }else if (index === 30) {
              return (
                <Row31
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown31={toggleDropdown31}
                dropdown31Visible={dropdown31Visible}
                setDropdown31Visible={setDropdown31Visible}
                />
              );
            }else if (index === 33) {
              return (
                <Row34
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown34={toggleDropdown34}
                dropdown34Visible={dropdown34Visible}
                setDropdown34Visible={setDropdown34Visible}
                firstDropdownInputRef={firstDropdownInputRef}
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