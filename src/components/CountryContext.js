import React, { useState } from "react";

const CountryContext = React.createContext();

const CountryProvider = props => {
  const [country, setCountry] = useState();

  return (
    <CountryContext.Provider value={[country, setCountry]}>
      {props.children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
