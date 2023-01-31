import './App.css';
import { useState} from 'react';

function App() {
  return (
    <>
    <h1 className='title'>Paul's One Thing</h1>
    <MyButton >Add Todo</MyButton>
    <input type="text" placeholder='What needs to get done?'></input>
    <MyButton>Clear</MyButton>
    
    </>
  );
}



function MyButton(props){
  return(
    <>
    <button {...props}></button>
    </>
  )
}


export default App;
