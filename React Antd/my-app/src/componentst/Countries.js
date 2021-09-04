import React, { useState } from "react";
import Country from "./Country";
import CountrySimple from "./CountrySimple";

const Countries = ({ countries, newSearch }) => {
  const [showCountry, setShowCountry] = useState();
  const show = (event) => {
    const cont = countries.filter((country) =>
      country.name.includes(event.target.value)
    );
    setShowCountry(cont[0]);
  };

  const entries = countries.filter((country) =>
    country.name.toUpperCase().includes(newSearch.toUpperCase())
  );

  if (entries.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (showCountry !== undefined) {
    return (
      <ul>
        {countries
          .filter((country) =>
            country.name.toUpperCase().includes(newSearch.toUpperCase())
          )
          .map((country) => (
            <Country
              key={showCountry.name}
              name={showCountry.name}
              capital={showCountry.capital}
              populaton={showCountry.capital}
              languages={showCountry.languages}
              flagUrl={showCountry.flagUrl}
            />
          ))}
      </ul>
    );
  }

  if (entries.length > 1) {
    return (
      <ul>
        {countries
          .filter((country) =>
            country.name.toUpperCase().includes(newSearch.toUpperCase())
          )
          .map((country) => (
            <CountrySimple
              key={country.name}
              name={country.name}
              country={country}
              show={show}
            />
          ))}
      </ul>
    );
  }

  return (
    <ul>
      {countries
        .filter((country) =>
          country.name.toUpperCase().includes(newSearch.toUpperCase())
        )
        .map((country) => (
          <Country
            key={country.name}
            name={country.name}
            capital={country.capital}
            populaton={country.capital}
            languages={country.languages}
            flagUrl={country.flag}
          />
        ))}
    </ul>
  );
};

export default Countries;