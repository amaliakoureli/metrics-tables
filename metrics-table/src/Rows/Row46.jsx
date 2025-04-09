import React, { useState, useRef } from "react";
import "./Row4.css";
function Row46({ row, index, handleChange, handleEnterPress }) {
  return (
    row.id === "" && (
      <>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={4}>
            <b>{row.text}</b>
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text1}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text2}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text3}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text4}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text5}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text6}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text7}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text8}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text9}
          </td>
        </tr>
        <tr>
          <td className="teble-cell column-id"></td>
          <td className="stepsFor28" colSpan={3}>
            {row.text10}
          </td>
        </tr>
      </>
    )
  );
}

export default Row46;
