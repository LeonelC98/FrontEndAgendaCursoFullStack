import { useState , useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll,setShowAll] = useState('')
  const toShow = persons.filter((person)=>person.name.toLowerCase().includes(showAll.toLowerCase()))

const getPersons =()=>{
axios.get('http://localhost:3001/persons').then((response)=>setPersons(response.data))
}

useEffect(getPersons,[])

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
