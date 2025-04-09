import React, { useState, useRef, useEffect } from "react";
import "./ControlMetrics.css";
import Row1 from "./Rows/Row1";
import Row4 from "./Rows/Row4";
import Rows5679 from "./Rows/Rows5-6-7-9";
import SingleInput from "./Rows/SingleInput";
import Row11 from "./Rows/Row11";
import Row12 from "./Rows/Row12";
import Row13 from "./Rows/Row13";
import Row14 from "./Rows/Row14";
import Row15 from "./Rows/Row15";
import Row18 from "./Rows/Row18";
import Row19 from "./Rows/Row19";
import Row20 from "./Rows/Row20";
import Row21 from "./Rows/Row21";
import Row22 from "./Rows/Row22";
import Row25 from "./Rows/Row25";
import Row26 from "./Rows/Row26";
import Row28 from "./Rows/Row28";
import SingleSelect from "./Rows/SingleSelect";
import Row16 from "./Rows/Row16";
import DoubleSelect from "./Rows/DoubleSelect";
import Row31 from "./Rows/Row31";
import Row34 from "./Rows/Row34";
import Row38 from "./Rows/Row38";
import Row39 from "./Rows/Row39";
import Row45 from "./Rows/Row45";
import Row46 from "./Rows/Row46";
import Row47 from "./Rows/Row47";
import MainTable from "./TablesData/MainTable";
import Row42 from "./Rows/Row42";

function ControlMetrics() {
  const [data, setData] = useState(MainTable);

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
  const [dropdown38Visible, setDropdown38Visible] = useState(null);

  const toggleDropdown4 = (index) => {
    setDropdown4Visible(dropdown4Visible === index ? null : index);
  };

  useEffect(() => {
    if (dropdown4Visible === 4) {
      setTimeout(() => {
        const dropdownInputs = [
          ...document.querySelectorAll(".dropdown4-middleInput, .controller"),
        ];
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
        const firstInput = document.querySelector(
          ".dropdown14-firstMiddleInput"
        );
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

  const firstDropdown34InputRef = useRef(null);
  useEffect(() => {
    if (dropdown34Visible === 33 && firstDropdown34InputRef.current) {
      firstDropdown34InputRef.current.focus();
    }
  }, [dropdown34Visible]);

  const toggleDropdown34 = (index) => {
    setDropdown34Visible((prev) => (prev === index ? null : index));
  };

  const firstDropdown38InputRef = useRef(null);
  useEffect(() => {
    if (dropdown38Visible === 37 && firstDropdown38InputRef.current) {
      firstDropdown38InputRef.current.focus();
    }
  }, [dropdown38Visible]);

  const toggleDropdown38 = (index) => {
    setDropdown38Visible((prev) => (prev === index ? null : index));
  };

  const handleEnterPress = (e, index, isInput = false, dropdownType = null) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (e.target.id === "duration1BAT") {
        duration2BATRef.current?.focus();
        return;
      }

      if (e.target.id === "duration2BAT") {
        const allInputs = [...document.querySelectorAll(".controller")];
        const currentIndex = allInputs.indexOf(e.target);
        const nextIndex = currentIndex + 1;
        if (nextIndex < allInputs.length) {
          allInputs[nextIndex].focus();
        }
        return;
      }
      if (e.target.classList.contains("dropdown4-middleInput")) {
        toggleDropdown4(index);

        setTimeout(() => {
          const firstMiddleInput2 = document.querySelector(
            ".dropdown4-middleInput2"
          );
          if (firstMiddleInput2) firstMiddleInput2.focus();
        }, 50);

        return;
      }
      if (index === 9 && dropdown11Visible !== 10) {
        toggleDropdown11(10);

        setTimeout(() => {
          const firstInput = document.querySelector(".dropdown11-input1");
          if (firstInput) firstInput.focus();
        }, 50);

        return;
      }

      if (dropdownType === "dropdown4") {
        const dropdown4Inputs = [
          ...document.querySelectorAll(
            ".dropdown4-middleInput2, .dropdown4-input1, .dropdown4-input2, .dropdown4-input3, .dropdown4-input4"
          ),
        ];
        let currentDropdownIndex = dropdown4Inputs.indexOf(e.target);
        let nextDropdownIndex = currentDropdownIndex + 1;

        if (nextDropdownIndex >= dropdown4Inputs.length) {
          const allInputs = [...document.querySelectorAll(".controller")];
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
          }, 50);
        } else {
          const dropdown11Inputs = [
            ...document.querySelectorAll(
              ".dropdown11-input1, .dropdown11-input2, .single-dropdown11-input1"
            ),
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
          }, 50);
        } else {
          const dropdown12Inputs = [
            ...document.querySelectorAll(
              ".dropdown12-input1, .dropdown12-input2"
            ),
          ];
          const currentIndex = dropdown12Inputs.indexOf(e.target);
          dropdown12Inputs[currentIndex + 1]?.focus();
        }

        return;
      }

      if (dropdownType === "dropdown13") {
        const dropdown13Inputs = [
          ...document.querySelectorAll(".dropdown13-input1, .dropdown13-text3"),
        ];
        let currentDropdownIndex = dropdown13Inputs.indexOf(e.target);
        let nextDropdownIndex = currentDropdownIndex + 1;

        if (nextDropdownIndex >= dropdown13Inputs.length) {
          const allInputs = [...document.querySelectorAll(".controller")];
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
          const firstMiddleInput = document.querySelector(
            ".dropdown14-firstMiddleInput"
          );
          if (firstMiddleInput) {
            firstMiddleInput.focus();
          }
        }, 50);
        return;
      }

      if (dropdownType === "dropdown14") {
        const dropdown14Inputs = [
          ...document.querySelectorAll(
            ".dropdown14-middleInput, .dropdown14-input1, .dropdown14-input2"
          ),
        ];
        let currentDropdownIndex = dropdown14Inputs.indexOf(e.target);
        let nextDropdownIndex = currentDropdownIndex + 1;

        if (nextDropdownIndex < dropdown14Inputs.length) {
          dropdown14Inputs[nextDropdownIndex]?.focus();
        } else {
          setTimeout(() => {
            const allRows = [...document.querySelectorAll(".table-row")];
            let currentRow = e.target.closest(".table-row");
            let currentRowIndex = allRows.indexOf(currentRow);
            if (
              currentRowIndex !== -1 &&
              currentRowIndex + 1 < allRows.length
            ) {
              let nextRow = allRows[currentRowIndex + 1];

              if (nextRow) {
                const nextRowInputs = [
                  ...nextRow.querySelectorAll(
                    ".controller, .dropdown14-middleInput, .dropdown14-input1, .dropdown14-input2"
                  ),
                ];
                if (nextRowInputs.length > 0) {
                  nextRowInputs[0].focus();
                }
              }
            }
          }, 50);
        }
        return;
      }

      const isLastInputInRow15 =
        index === 14 && e.target.classList.contains("row15input3");

      if (isLastInputInRow15) {
        toggleDropdown16(15);
        return;
      }

      if (e.target.classList.contains("row18-middleInput")) {
        toggleDropdown18(17);
        return;
      }

      if (dropdownType === "dropdown18") {
        const isLastInput = e.target.id === "dropdown18-last";

        if (isLastInput) {
          toggleDropdown19(18);
          setTimeout(() => {
            const firstInput = document.querySelector(".dropdown19-input1");
            if (firstInput) firstInput.focus();
          }, 50);
        } else {
          const dropdown18Inputs = [
            ...document.querySelectorAll(
              ".dropdown18-input1, .dropdown18-input2"
            ),
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
          }, 50);
        } else {
          const dropdown19Inputs = [
            ...document.querySelectorAll(
              ".dropdown19-input1, .dropdown19-input2,.dropdown19-Dinput1, .dropdown19-Dinput2, .dropdown19-Dinput3, .dropdown19-Dinput4"
            ),
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
          }, 50);
        } else {
          const dropdown20Inputs = [
            ...document.querySelectorAll(
              ".dropdown20-input1, .dropdown20-input2, .dropdown20-input3"
            ),
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
            const firstInput = document.querySelector(".dropdown22-Dselect1");
            if (firstInput) firstInput.focus();
          }, 50);
        } else {
          const dropdown21Inputs = [
            ...document.querySelectorAll(".dropdown21-input1"),
          ];
          const currentIndex = dropdown21Inputs.indexOf(e.target);
          dropdown21Inputs[currentIndex + 1]?.focus();
        }

        return;
      }

      if (index === 23 && dropdown25Visible !== 24) {
        toggleDropdown25(24);

        setTimeout(() => {
          const firstInput = document.querySelector(
            ".dropdown25-input1, .dropdown25-input2"
          );
          if (firstInput) firstInput.focus();
        }, 50);

        return;
      }

      if (index === 26 && dropdown28Visible !== 27) {
        toggleDropdown28(27);

        setTimeout(() => {
          const firstInput = document.querySelector(
            ".dropdown28-Dselect1, .dropdown28-Dselect2, .dropdown28-input1"
          );
          if (firstInput) firstInput.focus();
        }, 50);

        return;
      }

      if (index === 29 && dropdown31Visible !== 30) {
        toggleDropdown31(30);

        setTimeout(() => {
          const firstInput = document.querySelector(".dropdown31-input1");
          if (firstInput) firstInput.focus();
        }, 50);

        return;
      }

      const isLastInputInRow33 =
        index === 32 && e.target.classList.contains("input2");

      if (isLastInputInRow33) {
        toggleDropdown34(33);
        return;
      }

      if (index === 36 && dropdown38Visible !== 37) {
        toggleDropdown38(37);

        setTimeout(() => {
          const firstInput = document.querySelector(".dropdown38-input1");
          if (firstInput) firstInput.focus();
        }, 50);

        return;
      }

      const allInputs = [...document.querySelectorAll(".controller")];
      const currentIndex = allInputs.indexOf(e.target);
      const nextIndex = currentIndex + 1;
      if (nextIndex < allInputs.length) {
        allInputs[nextIndex].focus();
      }
    }
  };

  return (
    <div className="MetricsTable">
      <h1>ΕΛΕΓΧΟΙ ΚΑΙ ΜΕΤΡΗΣΕΙΣ</h1>
      <table className="table-border">
        <tbody>
          {data.map((row, index) => {
            return index === 0 ? (
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
            ) : index === 1 ||
              index === 2 ||
              index === 22 ||
              index === 29 ||
              index === 42 ||
              index === 43 ||
              index === 44 ? (
              <SingleInput
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 3 ? (
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
            ) : index === 4 || index === 5 || index === 6 || index === 8 ? (
              <Rows5679
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 10 ? (
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
            ) : index === 11 ? (
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
            ) : index === 12 ? (
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
            ) : index === 13 ? (
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
            ) : index === 14 ? (
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
            ) : index === 15 ? (
              <Row16
                key={row.id}
                row={row}
                index={index}
                toggleDropdown16={toggleDropdown16}
                dropdown16Visible={dropdown16Visible}
                setDropdown16Visible={setDropdown16Visible}
                handleEnterPress={handleEnterPress}
                firstDropdown16InputRef={firstDropdown16InputRef}
              />
            ) : index === 17 ? (
              <Row18
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown18={toggleDropdown18}
                dropdown18Visible={dropdown18Visible}
                setDropdown18Visible={setDropdown18Visible}
              />
            ) : index === 18 ? (
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
            ) : index === 19 ? (
              <Row20
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown20={toggleDropdown20}
                dropdown20Visible={dropdown20Visible}
                setDropdown20Visible={setDropdown20Visible}
              />
            ) : index === 20 ? (
              <Row21
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown21={toggleDropdown21}
                dropdown21Visible={dropdown21Visible}
                setDropdown21Visible={setDropdown21Visible}
              />
            ) : index === 21 ? (
              <Row22
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown22={toggleDropdown22}
                dropdown22Visible={dropdown22Visible}
                setDropdown22Visible={setDropdown22Visible}
              />
            ) : index === 24 ? (
              <Row25
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown25={toggleDropdown25}
                dropdown25Visible={dropdown25Visible}
                setDropdown25Visible={setDropdown25Visible}
              />
            ) : index === 27 ? (
              <Row28
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown28={toggleDropdown28}
                dropdown28Visible={dropdown28Visible}
                setDropdown28Visible={setDropdown28Visible}
              />
            ) : index === 9 ||
              index === 23 ||
              index === 26 ||
              index === 28 ||
              index === 35 ||
              index === 36 ||
              index === 39 ||
              index === 16 ||
              index === 40 ? (
              <SingleSelect
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 7 || index === 31 || index === 32 || index === 34 ? (
              <DoubleSelect
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 30 ? (
              <Row31
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown31={toggleDropdown31}
                dropdown31Visible={dropdown31Visible}
                setDropdown31Visible={setDropdown31Visible}
              />
            ) : index === 33 ? (
              <Row34
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown34={toggleDropdown34}
                dropdown34Visible={dropdown34Visible}
                setDropdown34Visible={setDropdown34Visible}
                firstDropdown34InputRef={firstDropdown34InputRef}
              />
            ) : index === 37 ? (
              <Row38
                key={row.id}
                row={row}
                index={index}
                handleEnterPress={handleEnterPress}
                toggleDropdown38={toggleDropdown38}
                dropdown38Visible={dropdown38Visible}
                setDropdown38Visible={setDropdown38Visible}
                firstDropdown38InputRef={firstDropdown38InputRef}
              />
            ) : index === 38 ? (
              <Row39
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 41 ? (
              <Row42
                key={row.id}
                row={row}
                index={index}
                input1={row.input1}
                select1={row.select1}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 45 ? (
              <Row45
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 46 ? (
              <Row46
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : index === 47 ? (
              <Row47
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            ) : (
              <Row26
                key={row.id}
                row={row}
                index={index}
                handleChange={handleChange}
                handleEnterPress={handleEnterPress}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ControlMetrics;
