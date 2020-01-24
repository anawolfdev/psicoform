import React from "react";
import Title from "../components/title";
import RegisterPatient from "../components/register-patient";

export default function HandleForm(props) {
  const registerData = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    return false;
  };
  return (
    <>
      <Title title={"Registro de Pacientes"}></Title>
      <RegisterPatient onSubmit={registerData}></RegisterPatient>
    </>
  );
}
