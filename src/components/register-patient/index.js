import React from "react";
const noop = () => {};

export default function RegisterPatient({ onSubmit = noop, name = "nombre" }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nombre">
        {name}
        <input type="text" id="nombre"></input>
        <input type="submit"></input>
      </label>
    </form>
  );
}
