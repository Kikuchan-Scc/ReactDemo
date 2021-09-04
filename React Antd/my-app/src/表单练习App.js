import React, { useState, useEffect } from "react";
import Note from "./componentsbook/Note";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    const person = {
      content: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: persons.length + 1,
    };
    setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };

  const noteToShow = showAll
    ? persons
    : persons.filter((person) => person.important);

  const handleSubmit = (event) => {
    setNewName(event.target.value);
  };
  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <form onSubmit={handleForm}>
        <input
          value={newName}
          onChange={handleSubmit}
        /><br/>
        <input
          value={newNumber}
          onChange={handleNumber}
        />
        <button type="submit">save</button>
      </form>  
      <ul>
        {noteToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  );
};

export default App;
