import { useState } from "react";

function ToDos() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e)=>{ setToDo(e.target.value)};
  const onSubmit = (e)=>{ 
    e.preventDefault();
    if (toDo === null) {
      return;
    }
    
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); // onSubmit - 
  };
  return (
    <div>
      <h1>MY To Dos ({toDos.length})</h1>
       <form onSubmit={onSubmit}>
         <input onChange={onChange} value={toDo} type="text" placeholder="어떤 내용을 작성 하실건가요?"></input>
         <button>Add To Do</button>
       </form>
      <hr/>
      <ul>
        {toDos.map((row, i)=> (<li key={i}>{row}</li>))}
      </ul>
    </div>
  );
}

export default ToDos;
