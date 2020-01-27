import React from "react";
import RegisterPatient from "../components/register-patient";

export default function HandleForm(props) {
  const registerData = e => {
    e.stopPropagation();
    e.preventDefault();
    const name = e.target["name"].value;
    const surname = e.target["surname"].value;
    const phone = e.target["phone"].value;
    const email = e.target["email"].value;
    const problem = e.target["problem"].value;

    console.log("name: " + name);
    console.log("surname: " + surname);
    console.log("phone: " + phone);
    console.log("email: " + email);
    console.log("problem" + problem);
    console.log("%O", e.target);
    return false;
  };

  return (
    <>
      <RegisterPatient onSubmit={registerData}></RegisterPatient>
    </>
  );
}
