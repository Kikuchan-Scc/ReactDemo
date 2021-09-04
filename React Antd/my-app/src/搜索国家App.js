import React, { useEffect, useState } from "react";
import FilterCountries from "./componentst/FilterCountries";
import Countries from "./componentst/Countries";
import getAll from "./components例子/restCountries";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  useEffect(() => {
    getAll().then(response => setCountries(response));
  },[])

  return (
    <div>
      <FilterCountries
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}
      />
      <Countries countries={countries} newSearch={newSearch} />
    </div>
  );
};

export default App;
