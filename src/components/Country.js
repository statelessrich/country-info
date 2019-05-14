import React, { useContext, useState } from "react";
import { CountryContext } from "./CountryContext";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

function Country() {
  const [country] = useContext(CountryContext);
  const [continentIcons] = useState({
    Asia: faGlobeAsia,
    Europe: faGlobeEurope,
    Oceania: faGlobeAsia,
    "North America": faGlobeAmericas,
    "South America": faGlobeAmericas,
    Africa: faGlobeAfrica
  });

  function getContinentIcon() {
    return continentIcons[country.continent.name];
  }

  function getCurrencies() {
    const currencies = country.currency.split(",");
    return currencies.map(currency => <div key={currency}>{currency}</div>);
  }

  function getNative() {
    if (country.native !== country.name) {
      return country.native;
    } else {
      return null;
    }
  }

  function getLanguages() {
    return country.languages.map(language => (
      <div key={language.code}>
        {language.name} ({language.code})
      </div>
    ));
  }

  return (
    <div className="my-5">
      <Container>
        <Row className="info-container">
          {/* Continent icon. */}
          <Col xs={3} className="text-right my-4">
            <FontAwesomeIcon
              icon={getContinentIcon()}
              size="4x"
              className="my-2"
            />
          </Col>

          {/* Name. */}
          <Col xs={3} className="text-left">
            <Row>
              <Col>
                <h1 className="display-1">{country.code}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{country.name}</h2>
                <h3>{getNative()}</h3>
              </Col>
            </Row>
          </Col>

          {/* Currency. */}
          <Col xs={3} className="container d-flex h-100 text-left mt-3">
            <Row className="justify-content-center">
              <Col>
                <Row>
                  <h3 className="font-weight-normal">currency</h3>
                </Row>
                <Row>
                  <h3>{getCurrencies()}</h3>
                </Row>
              </Col>
            </Row>
          </Col>

          {/* Languages. */}
          <Col className="container d-flex h-100 text-left mt-3">
            <Row className="justify-content-center">
              <Col>
                <Row>
                  <h3 className="font-weight-normal">languages</h3>
                </Row>
                <Row>
                  <h3>{getLanguages()}</h3>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Country;
