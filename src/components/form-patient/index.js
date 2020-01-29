import React, { useState } from "react";
import RegisterPatient from "../register-patient";
import Results from "../results";

export default function HandleForm(props) {
  const [data, setData] = useState(undefined);

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

  const deleteData = () => {
    setData(undefined);
  };

  return (
    <>
      {!data ? (
        <RegisterPatient onSubmit={registerData}></RegisterPatient>
      ) : (
        <>
          <Results values={data}></Results>
          <button onClick={deleteData}>Volver</button>
        </>
      )}
    </>
  );
}
