import React from "react";

export default function Results({ values = {} }) {
  return (
    <>
      <ul>
        <li>{values.name}</li>
        <li>{values.surname}</li>
        <li>{values.phone}</li>
        <li>{values.email}</li>
        <li>{values.problem}</li>
      </ul>
    </>
  );
}
