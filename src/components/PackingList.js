import { useState } from 'react';
import Item from './Item'
const PackingList = ({newItem, onDeleteItem, onToggleItem, onClearAll}) => {
  const [sortBy, setSortBy] = useState('input')

  let sortingItems;
  if(sortBy === 'input'){
     sortingItems = newItem
  }

  if(sortBy === 'DESCRIPTION'){
    sortingItems = newItem.slice().sort((a, b) => (a.userInput.localeCompare(b.userInput)))
  }


  return(
    <>
    <div className="list">
      <ul key={newItem.id}>
        {sortingItems.map((newItem) => {
            return <Item newItem={newItem} key={newItem.id}
                   value={newItem.packed}
                   onDeleteItem={onDeleteItem}
                  onToggleItem ={onToggleItem}
                   />
        })}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input</option>
          <option value='DESCRIPTION'>Sort by A-Z</option>
        </select>
        <button onClick={onClearAll}>Clear all</button>
      </div>

    </div>



  </>
  )
};

export default PackingList;
