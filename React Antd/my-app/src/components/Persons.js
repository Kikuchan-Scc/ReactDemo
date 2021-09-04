import React from "react";
import personServer from '../services/restCountriesBook'

const Persons = ({filterPersons, setPersons, setMessage}) => {
  const isDelete = (person) => {
    const result = window.confirm(`Delete ${person.name}`);
    if(result) {
      personServer.deleted(person.id).then((response) => {
        setPersons(filterPersons.filter(item => item !== person));
        setMessage({
          text: `${person.name} has removed`,
          type: "success",
        });
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      })
      .catch((error) => {
        setMessage({
          text: `${person.name} was already removed from server`,
        });
        setTimeout(() => {
          setMessage(null);
        }, 3000)
      })
    }
  };

  return filterPersons.map((e) => (
    <p>
      {e.name} {e.number} <button onClick={() => isDelete(e)}>delete</button>
    </p>
  ));
};

export default Persons
