import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      important: Math.random() < 0.5,
      id: String(persons.length + 1),
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.important === true)
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div >
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
       <button onClick={() => setShowAll(!showAll)}>
        show{showAll }
       </button>
      </div>

      {personsToShow.map(person =>
        <h2 key={person.name}>{person.name}</h2>
      )}

      {/* {newName !== '' &&
        <p>{newName}</p>} */}

    </div>
  )
}

export default App