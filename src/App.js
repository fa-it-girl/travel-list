
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stat from './components/Stat';

function App() {
  const [newItems, setNewItems] = useState([''])

  const addNewItemHandler =(item) => {
      setNewItems((items) =>[...items, item])
  }

  const deleteItemHandler = (id) => {
     setNewItems(items=>items.filter((item)=>
      item.id !== id
     ))
  }

  function handleToggleItem(id) {
    setNewItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const clearAllHandler = (items) => {
    const confirmed = window.confirm('Are you sure to delete all?')
    if(confirmed) setNewItems([])
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={addNewItemHandler}/>
      <PackingList newItem={newItems}
        onDeleteItem={deleteItemHandler}
        onToggleItem={handleToggleItem}
        onClearAll={clearAllHandler}
        />
      <Stat newItem ={newItems}/>

    </div>
  );
}

export default App;
