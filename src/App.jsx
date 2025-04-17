import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll,setShowAll] = useState('')
  const toShow = persons.filter((person)=>person.name.toLowerCase().includes(showAll.toLowerCase()))

  /* maneja el agregado de los contactos */
  const addPerson=(event)=> {
    event.preventDefault()
    const newPerson={name: newName, number: newNumber, id:(persons.length + 1)}
    if(persons.some((person)=> person.name.toLowerCase() === newPerson.name.toLowerCase())){
      alert(`${newPerson.name} is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }
  /* reflejan los cambios de los diferentes campos respectivos */
  const handleNewName=(event)=>{
    setNewName(event.target.value)
  }
  const handleNewNumber=(event)=>{
    setNewNumber(event.target.value)
  }
  const handleShowAll=(event)=>{
    setShowAll(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showAll={showAll} handleShowAll={handleShowAll}/>
      <PersonForm addPerson={addPerson} 
      handleNewName={handleNewName} 
      handleNewNumber={handleNewNumber} 
      newName={newName}
      newNumber={newNumber}
      />
      <h2>Numbers</h2>
        <Persons toShow={toShow}/>
    </div>
  )
}

export default App
