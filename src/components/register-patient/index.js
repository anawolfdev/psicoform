import React from "react";
import Title from "../title";
import HandleForm from "../../form-patient";

export default function RegisterPatient({
  onSubmit = HandleForm,
  name = "Nombre ",
  surname = "Apellidos ",
  phone = "Teléfono ",
  email = "Email ",
  problem = "Descripción del problema: "
}) {
  return (
    <>
      <Title title={"Registro de Pacientes"}></Title>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          {name}
          <input type="text" name="name" id="name"></input>
        </label>

        <label htmlFor="surname">
          {surname}
          <input type="text" surname="surname" id="surname"></input>
        </label>

        <label htmlFor="phone">
          {phone}
          <input type="text" id="phone"></input>
        </label>

        <label htmlFor="email">
          {email}
          <input type="text" id="email"></input>
        </label>

        <label htmlFor="problem">
          {problem}
          <input type="text" id="problem"></input>
        </label>

        <input type="submit"></input>
      </form>
    </>
  );
}
