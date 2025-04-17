const Persons =({toShow})=>{
    return(
      toShow.map(persons =><p key={persons.id}>{persons.name} {persons.number}</p>)
    )
  }

export default Persons