const Stat = ({newItem}) => {
  if (newItem.length === 0){
    return(
      <footer className="stats">
      <em >Start to add items</em>
      </footer>
    )
  }
  const itemlenght = newItem.length

  return(
    <>
    <footer className="stats">
      <em>You have {itemlenght} items in your list</em>
    </footer>
  </>
  )
};

export default Stat;
