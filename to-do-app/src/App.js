import './App.css';
import { useState} from 'react';

function App() {

  function addItem(){
    //Random id setter for each item
    let randomId = Math.floor(Math.random()*1000);

    while(usedIds.includes(randomId)){
      randomId = Math.floor(Math.random()*1000);
    }

    const listItem = {
      id: randomId,
      value: item
    }
    setList(oldList => [...oldList,listItem]);
    console.log(list);
    setItem("")
  }

  const [item,setItem] = useState("");
  const [list,setList] = useState([]);
  const usedIds = [];


  return (
    <>
    <h1 className='title'>Paul's One Thing</h1>
    <MyButton onClick={()=>addItem(item)}>Add Todo</MyButton>
    <InputField onChange = {(e)=> setItem(e.target.value)} value = {item} type="text" placeholder='What needs to get done?'></InputField>
    <MyButton>Clear</MyButton>
    <ul>
      {
        list.map(item => {

  
          return(
              <li key={item.id}>{item.value}</li>

          )
        })
      }
    </ul>
    
    </>
  );
}

function InputField(props){
  return(
  <input {...props}
    >
  
  </input>
  )
}

function MyButton(props){
  return(
    <>
    <button {...props}></button>
    </>
  )
}





export default App;
