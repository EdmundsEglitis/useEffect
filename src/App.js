import { useEffect, useState } from "react";
import ToDo from './ToDo.js';

function App() {
  const [todo, setTodo] = useState({});


  useEffect(()=>{
    async function getToDo(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json();
      setTodo(data);
      }
  getToDo();
  }, []);
  return (
    <>
      
      <h1>hi</h1>
      <ToDo {...todo}/>
    </>
  );
}

export default App;
