import { useState } from "react";

const Form = ({onAddItem}) => {
  const [userInput, setUserInput] = useState('');
  const [chooseNumber, setChooseNumber] = useState(1)

  const submitHandler = (event) =>{
    event.preventDefault();

    const newItemList = { userInput, chooseNumber, id: Date.now(),  packed: false }

    onAddItem(newItemList)
    setUserInput('');
    setChooseNumber(1)
  }

  const userInputHandler = (event) => {
    setUserInput(event.target.value)
  }

  const chooseNumberHandler =(event) => {
    setChooseNumber(Number(event.target.value))
  }
  return(
    <>
     <form className="add-form" onSubmit={submitHandler}>
       <h3>What do you need for your trip 🏜️?</h3>
       <select value={chooseNumber} onChange={chooseNumberHandler}>
         {Array.from({length: 20},
            (a, i) => i +1)
            .map(num =>
            <option key={num}>{num}</option>)
          }
       </select>
       <input type='text' placeholder="items" value={userInput} onChange={userInputHandler}></input>
       <button >Add</button>
      </form>
  </>
  )
};

export default Form;
