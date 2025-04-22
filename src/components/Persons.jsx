const Persons =({toShow,deletPerson})=>{

    return(
      toShow.map(persons =><p key={persons.id}>
        {persons.name} {persons.number} 
        <button type="button" onClick={()=>deletPerson(persons.id,persons.name)}>delete</button>
      </p>)
    )
  }

export default Persons