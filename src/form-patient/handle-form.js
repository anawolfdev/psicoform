import React, { useState } from "react";
import RegisterPatient from "../components/register-patient";

export default function HandleForm(props) {
  const [data, setData] = useState({});

  const registerData = e => {
    e.stopPropagation();
    e.preventDefault();

    const name = e.target["name"].value;
    const surname = e.target["surname"].value;
    const phone = e.target["phone"].value;
    const email = e.target["email"].value;
    const problem = e.target["problem"].value;

    setData({
      name,
      surname,
      phone,
      email,
      problem
    });
    return false;
  };

  return (
    <>
      <RegisterPatient onSubmit={registerData} values={data}></RegisterPatient>
    </>
  );
}
