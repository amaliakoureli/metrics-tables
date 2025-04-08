import React, { useState } from "react";
import "./Row4.css";

function Row15({
  row,
  index,
  handleEnterPress,
  handleChange,
  input1,
  input2,
  input3,
}) {
  return (
    <>
      <tr
        key={row.id}
        className="table-row"
        data-row={index === 0 ? "0" : undefined}
      >
        <td className="table-cell column-id">{row.id}</td>
        <td className="table-cell column-text" colSpan={2}>
          {row.text}
        </td>
        <td className="table-cell">
          <table>
            <tbody>
              <div className="dropdownInputs-alignment">
                <tr>
                  <td className="table-cell">
                    <input
                      type="text"
                      value={
                        "1 ώρα : " + (input1?.replace("1 ώρα : ", "") ?? "")
                      }
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const prefix = "1 ώρα : ";

                        if (inputValue.startsWith(prefix)) {
                          handleChange(index, "input1", inputValue);
                        } else {
                          handleChange(index, "input1", prefix + inputValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        const prefix = "1 ώρα : ";
                        const cursorPos = e.target.selectionStart;

                        if (
                          (e.key === "Backspace" &&
                            cursorPos <= prefix.length) ||
                          (e.key === "Delete" && cursorPos < prefix.length)
                        ) {
                          e.preventDefault();
                        }
                        handleEnterPress(e, index, true);
                      }}
                      className="controller row15input1"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell">
                    <input
                      type="text"
                      value={
                        "3 ώρες : " + (input2?.replace("3 ώρες : ", "") ?? "")
                      }
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const prefix = "3 ώρες : ";

                        if (inputValue.startsWith(prefix)) {
                          handleChange(index, "input2", inputValue);
                        } else {
                          handleChange(index, "input2", prefix + inputValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        const prefix = "3 ώρες : ";
                        const cursorPos = e.target.selectionStart;

                        if (
                          (e.key === "Backspace" &&
                            cursorPos <= prefix.length) ||
                          (e.key === "Delete" && cursorPos < prefix.length)
                        ) {
                          e.preventDefault();
                        }
                        handleEnterPress(e, index, true);
                      }}
                      className="controller row15input2"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="table-cell">
                    <input
                      type="text"
                      value={
                        "8 ώρες : " + (input3?.replace("8 ώρες : ", "") ?? "")
                      }
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const prefix = "8 ώρες : ";

                        if (inputValue.startsWith(prefix)) {
                          handleChange(index, "input3", inputValue);
                        } else {
                          handleChange(index, "input3", prefix + inputValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        const prefix = "8 ώρες : ";
                        const cursorPos = e.target.selectionStart;

                        if (
                          (e.key === "Backspace" &&
                            cursorPos <= prefix.length) ||
                          (e.key === "Delete" && cursorPos < prefix.length)
                        ) {
                          e.preventDefault();
                        }
                        handleEnterPress(e, index, true);
                      }}
                      className="controller row15input3"
                    />
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

export default Row15;
