import { useState , useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import agendaService from './services/Agenda'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll,setShowAll] = useState('')
  const [Message, setMessage] = useState(null)
  const [typeMenssage,setTypeMenssage] = useState(null)


  const toShow = persons.filter((person)=>person.name.toLowerCase().includes(showAll.toLowerCase()))

const getPersons =()=>{
  agendaService
    .getAll()
    .then((response)=>{
      setPersons(response.data)
    }
  )
}

useEffect(getPersons,[])

  /* maneja el agregado de los contactos */
  const addPerson = (event) => {
    event.preventDefault();
  
    const newPerson = { name: newName, number: newNumber };
  
    // Verificar si la persona ya existe
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );
  
    if (existingPerson) {
      // Verificar si el número es diferente
      if (existingPerson.number !== newPerson.number) {
        if (
          window.confirm(
            `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          // Actualizar el número de la persona existente
          const updatedPerson = { ...existingPerson, number: newPerson.number };
  
          agendaService
            .update(existingPerson.id, updatedPerson)
            .then((response) => {
              setPersons(
                persons.map((person) =>
                  person.id !== existingPerson.id ? person : response.data
                )
              )
              setNewName('')
              setNewNumber('')
              setMessage(`${updatedPerson.name} has been updated`)
              setTypeMenssage('confirm')
              setTimeout(()=>{
                setMessage(null)}
                ,5000)
            })
            .catch((error) => {
              setMessage(`An error occurred while trying to update the data`)
              setTypeMenssage('error')
              setTimeout(()=>{
                setMessage(null)}
                ,5000)
            })
        }
      } else {
        setMessage(`${newPerson.name} is already added to phonebook with the same number.`)
        setTypeMenssage('error')
        setTimeout(()=>{
        setMessage(null)}
        ,5000)

      }
    }else{
    // Crear una nueva persona
    agendaService
      .create(newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        setMessage(`${newPerson.name} has been added`)
        setTypeMenssage('confirm')
      })
      .catch((error) => {
        setMessage(`Something went wrong when trying to add a person`)
        setTypeMenssage('error')
        setTimeout(()=>{
          setMessage(null)}
          ,5000)
      })
    }
  }

  const deletPerson=(id,name)=>{
    if(confirm(`delete ${name} ?`)){
      agendaService
      .delet(id)
      .then(setPersons(persons.filter(person=>person.id !== id)))
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
      <Notification message ={Message} typeMenssage={typeMenssage}/>
      <Filter showAll={showAll} handleShowAll={handleShowAll}/>
      <h2>Add Person</h2>
      <PersonForm addPerson={addPerson} 
      handleNewName={handleNewName} 
      handleNewNumber={handleNewNumber} 
      newName={newName}
      newNumber={newNumber}
      />
      <h2>Numbers</h2>
        <Persons toShow={toShow} deletPerson={deletPerson}/>
    </div>
  )
}

export default App
