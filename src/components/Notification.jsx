const Notification = ({ message,typeMenssage}) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={typeMenssage}>
        {message}
      </div>
    )
  }
export default Notification