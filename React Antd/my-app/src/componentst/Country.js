import React, { useState } from "react";

const Country = ({ name, capital, populaton, languages, flagUrl }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>populaton {populaton}</p>
      <h3>languages</h3>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={flagUrl} alt="No flag found" height="250" width="350" />
    </div>
  );
};

export default Country
