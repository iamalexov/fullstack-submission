import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' }
  ])
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      important: Math.random() < 0.5,
      id: String(persons.length + 1),

    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }


  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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

        <div >
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>



      <h2>Numbers</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show{showAll}
        </button>
      </div>
      <div>




        {personsToShow.map(person =>
          <h2 key={person.name}>{person.name} {person.number}</h2>
        )}


      </div>

      {/* {newName !== '' &&
        <p>{newName}</p>} */}

    </div>
  )
}

export default App