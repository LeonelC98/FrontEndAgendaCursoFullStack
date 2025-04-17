import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson=(event)=> {
    event.preventDefault()
    const newPerson={name: newName, number: newNumber, id:(persons.length + 1)}
    if(persons.some((person)=> person.name.toLowerCase() === newPerson.name.toLowerCase())){
      alert(`${newPerson.name} ya existe en la agenda`)
    }else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewName=(event)=>{
    setNewName(event.target.value)
  }

  const handleNewNumber=(event)=>{
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(persons =><p key={persons.id}>{persons.name} {persons.number}</p>)}
    </div>
  )
}

export default App
