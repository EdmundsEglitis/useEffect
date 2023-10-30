import ToDo from './ToDo.js';
function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: "koma",
    completed: true, 
};
  return (
    <>
      <h1>hi</h1>
      <ToDo {...todo}/>
    </>
  );
}

export default App;
