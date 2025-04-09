import React, { useState } from "react";
import "./assets/styles/ControlMetrics.css";

function Check1() {
  const [check1, setCheck1] = useState([
    { checked: "", approved: "", received: "", date: "" },
  ]);

  const handleChange = (e, field, index) => {
    const { value } = e.target;

    if (field === "date" && value && !isValidDate(value)) {
      alert("Η ημερομηνία δεν είναι έγκυρη!");
      return;
    }

    const updatedCheck1 = [...check1];
    updatedCheck1[index] = {
      ...updatedCheck1[index],
      [field]: value,
    };
    setCheck1(updatedCheck1);
  };

  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regex);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ΕΛΕΧΘΗΚΕ</th>
            <th>ΕΓΡΙΘΗΚΕ</th>
            <th>ΠΑΡΕΛΗΦΘΗ</th>
            <th>ΗΜΕΡΟΜΗΝΙΑ</th>
          </tr>
        </thead>
        <tbody>
          {check1.map((row, index) => (
            <tr
              key={index}
              className="table-row"
              data-row={index === 0 ? "0" : undefined}
            >
              <td className="table-cell">
                <input
                  type="text"
                  value={row.checked}
                  className="input-style"
                  onChange={(e) => handleChange(e, "checked", index)}
                />
              </td>
              <td className="table-cell">
                <input
                  type="text"
                  value={row.approved}
                  className="input-style"
                  onChange={(e) => handleChange(e, "approved", index)}
                />
              </td>
              <td className="table-cell">
                <input
                  type="text"
                  value={row.received}
                  className="input-style"
                  onChange={(e) => handleChange(e, "received", index)}
                />
              </td>
              <td className="table-cell">
                <input
                  type="date"
                  value={row.date}
                  className="input-style"
                  onChange={(e) => handleChange(e, "date", index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Check1;
