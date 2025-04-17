const Filter =({handleShowAll,showAll})=>{
    return(
      <>
      filter show whit: <input value={showAll} onChange={handleShowAll}/>
      </>
    )
  }
export default Filter