import React from "react";
import Botones from "./Botones";

const studentName = "Kelly Brito Mejia";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
  return (
    <div>
      <h1>Aprendiendo React</h1>
      <h3>{studentName}</h3>
      <ul>
        {/* // skill es el valor que estoy iterando le puedo poner cualquier nombre
        , //li es como si fuera la viñeta en excell. //map ejecuta la funcion o
        el callback (que va por parametro) y renderiza */}
        {techSkills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
