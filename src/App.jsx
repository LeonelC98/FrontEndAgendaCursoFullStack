import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson=(event)=> {
    event.preventDefault()
    const newPerson={name: newName}
    if(persons.some((person)=> person.name.toLowerCase() ===newPerson.name.toLowerCase())){
      alert(`${newPerson.name} ya existe en la agenda`)
    }else{
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  const handleNewName=(event)=>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(persons =><p key={persons.name}>{persons.name}</p>)}
    </div>
  )
}

export default App
