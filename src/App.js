import { useEffect, useState } from "react";
import ToDo from './ToDo.js';
import Comment from './Comment.js';
import Post from './Posts.js';
import User from './User.js';

function App() {
  const [todo, setTodo] = useState({});
const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getToDo(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json();
      setTodo(data);
      }
  getToDo();
  setLoading(false)
  }, []);
  return (
    <div>
      { loading ? <p>loading!!!!!!!!!</p> : <User {...User}/> }
    </div>
    //{ loading ? <p>loading!!!!!!!!!</p> : <Post {...Post}/> }
    //{ loading ? <p>loading!!!!!!!!!</p> : <Post {...Post}/> }
    //{ loading ? <p>text loading</p> : <ToDo {...todo}/>}
    //{ loading ? <p>loading!!!!!!!!!</p> : <Comment {...Comment}/> }
  );
}

export default App;
