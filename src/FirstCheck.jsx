import React, { useState } from "react";
import "./assets/styles/FirstCheck.css";

function FirstCheck() {
  const [check1, setCheck1] = useState([
    { checked: "", approved: "", received: "", date: "" },
  ]);

  const handleChange = (e, field, index) => {
    const { value } = e.target;

    const updatedCheck1 = [...check1];
    updatedCheck1[index] = {
      ...updatedCheck1[index],
      [field]: value,
    };
    setCheck1(updatedCheck1);
  };

  return (
    <div className="table-container border-[2px] min-w-[600px] border-black ml-[100px] mr-[100px] mb-[50px] mt-[50px]">
      <table className="table-fixed w-full">
        <tbody>
          {check1.map((row, index) => (
            <div>
              <div className="grid grid-cols-4 gap-x-4 px-4 pt-[10px] pb-[10px] bg-[#afc7d9]">
                <div className="flex flex-col items-center">
                  <td className="font-bold mb-1">ΕΛΕΧΘΗΚΕ</td>
                </div>
                <div className="flex flex-col items-center">
                  <td className="font-bold mb-1 ">ΕΓΡΙΘΗΚΕ</td>
                </div>
                <div className="flex flex-col items-center">
                  <td className="font-bold mb-1">ΠΑΡΕΛΗΦΘΗ</td>
                </div>
                <div className="flex flex-col items-center">
                  <td className="font-bold mb-1">ΗΜΕΡΟΜΗΝΙΑ</td>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-x-4 px-4 pt-[10px] pb-[10px] ">
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    value={check1[0].checked}
                    onChange={(e) => handleChange(e, "checked", 0)}
                    className="w-full border-[2px] border-[#ccc] rounded-sm text-center h-[36px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    value={check1[0].approved}
                    onChange={(e) => handleChange(e, "approved", 0)}
                    className="w-full border-[2px] border-[#ccc] rounded-sm text-center h-[36px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    value={check1[0].received}
                    onChange={(e) => handleChange(e, "received", 0)}
                    className="w-full border-[2px] border-[#ccc] rounded-sm text-center h-[36px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="date"
                    value={check1[0].date}
                    onChange={(e) => handleChange(e, "date", 0)}
                    className="w-full border-[2px] border-[#ccc] rounded-sm h-[36px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FirstCheck;
