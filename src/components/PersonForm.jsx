const PersonForm =({addPerson,newName,newNumber,handleNewNumber,handleNewName})=>{
  return(
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
  )
}

export default PersonForm