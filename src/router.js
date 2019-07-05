import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Aplication from './views/Aplication';
import About from './views/About';
import GeneralData from './views/GeneralData';
import Invation from './views/Invation';
import Penetration from './views/Penetration';
import Results from './views/Results';
import { Tabs, Tab } from 'react-bootstrap';
import logo from './assets/logo.jpg';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/contacto" component={About} />
        <Route path="/aplication" component={Aplication} />
        <Route exact path="/general-data" component={GeneralData} />
        <Route path="/invation" component={Invation} />
        <Route path="/penetration" component={Penetration} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <div>
      <img src={logo} class="Logo" />
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Inicio">
          <Home />
        </Tab>
        <Tab eventKey="app" title="Aplicación">
          <Aplication />
        </Tab>
        <Tab eventKey="about" title="Contacto">
          <About />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;