import styled from "styled-components";
import JWLogo from "./icons/josiahwhite.svg";
import { media } from "./shared/Shared";
import { HashRouter, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Experience from "./Pages/Experience";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* main pages */}
        <Route path="#/" exact component={Home} />
        <Route path="#/portfolio" exact component={Portfolio} />
        <Route path="#/experience" exact component={Experience} />
        <Route path="#/about" exact component={About} />
      </HashRouter>
    </div>
  );
}

export default App;
