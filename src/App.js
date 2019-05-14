import React from "react";
import Search from "./components/Search";
import { CountryProvider } from "./components/CountryContext";
import { Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <CountryProvider>
      <Jumbotron className="m-5 text-center App">
        <FontAwesomeIcon icon={faGlobeAmericas} size="3x" className="my-2" />
        <h1>Country Info</h1>
        <Search />
      </Jumbotron>
    </CountryProvider>
  );
}

export default App;
