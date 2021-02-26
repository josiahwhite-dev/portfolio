import styled from "styled-components";
import JWLogo from "./icons/josiahwhite.svg";
import { media } from "./shared/Shared";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Experience from "./Pages/Experience";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        {/* main pages */}
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}

export default App;
