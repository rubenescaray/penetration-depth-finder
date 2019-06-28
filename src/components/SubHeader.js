import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SubHeader = function() {
  return (
    <ul>
      <li>
        <Link to="/general-data">Datos Generales</Link>
      </li>
      <li>
        <Link to="/invation">Radio de Invasion</Link>
      </li>
      <li>
        <Link to="/penetration">Penetracion</Link>
      </li>
      <li>
        <Link to="/results">Resultados</Link>
      </li>
    </ul>
  );
}

export default SubHeader;