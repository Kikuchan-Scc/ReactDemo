import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import Persons from "./components/Persons";
import personServer from "./services/restCountriesBook";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);
  const [filter, setFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");

  const [filterPerson, setFilterPerson] = useState(persons);

  useEffect(() => {
    personServer.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  });

  const addPerson = (e) => {
    e.preventDefault();
    const personArray = persons.map((e) => e.name);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (personArray.includes(`${personObject}`)) {
      const oldPerson = persons.filter((e) => e.name === newName);
      const _id = oldPerson.map((e) => e.id)[0];
      const result = window.confirm(
        `${newName} is already added to phonebook replace the old number with a new one?`
      );
      if (result) {
        personServer
          .update(_id, personObject)
          .then((returnPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === returnPerson ? returnPerson : person
              )
            );
            setMessage({
              text: `Edited ${returnPerson.name}`,
              type: "success",
            });
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          })
          .catch((error) => {
            setMessage({
              text: error.response.data.error,
              type: "error",
            });
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          });
        setNewName("");
        setNewNumber("");
      }
    } else {
      personServer
        .create(personObject)
        .then((returnPerson) => {
          setPersons(persons.concat(returnPerson));
          setMessage({
            text: `Added ${returnPerson.name}`,
            type: "success",
          });
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        })
        .catch((error) => {
          setMessage({
            text: error.response.data.error,
            type: "error",
          });
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        });
      setNewName("");
      setNewNumber("");
    }
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
    setFilterPerson(
      persons.filter(
        (person) =>
          person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      )
    );
  };

  const handleName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const addPersonData = {
    newNumber,
    newName,
    handleName,
    handleNumber,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={filter} onChange={handleFilter} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} data={addPersonData} />
      <h2>Number</h2>
      {filter === "" ? (
        <Persons
          filterPersons={persons}
          setPersons={setPersons}
          setMessage={setMessage}
        />
      ) : (
        <Persons
          filterPersons={filterPerson}
          setPersons={setPersons}
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default App;
