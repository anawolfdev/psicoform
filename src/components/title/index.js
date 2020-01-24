import React from "react";

export default function Title({
  title = "Formulario de registro de pacientes"
}) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
