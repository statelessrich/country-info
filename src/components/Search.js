import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "./CountryContext";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import Country from "./Country";
import { Form } from "react-bootstrap";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

function Search() {
  const [country, setCountry] = useContext(CountryContext);
  const [input, setInput] = useState();

  useEffect(() => {
    if (input && input.length !== 2) {
      return;
    }

    // Use GraphQL to get country data using input.
    client
      .query({
        query: gql`
          {
            country(code: "${input}") {
              continent{
                name
              }
              name
              code
              currency
              native
              languages {
                code
                name
              }
            }
          }
        `
      })
      .then(result => setCountry(result.data.country));
  }, [input, setCountry]);

  const onInput = e => setInput(e.target.value.toUpperCase());

  return (
    <div className="my-5 mx-auto">
      <Form>
        {/* Search field. */}
        <Form.Control
          autoFocus={true}
          className="w-25 mx-auto"
          onChange={onInput}
          type="text"
          placeholder="Enter 2 letter country code e.g. SG"
          maxLength="2"
        />
      </Form>

      {country && <Country />}
    </div>
  );
}

export default Search;
