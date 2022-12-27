import { useState } from "react" 
import Head from "./components/head/head"
import Main from "./components/main/main"
import { iTask } from "./interface"



function App() {
  const [task,setTask] = useState("")
  const [days,setDays] = useState("")
  const [todoList,settodoList] = useState <iTask[]>([])

  return (
    <div >
      <Head task={task} setTask={setTask} days={days} setDays={setDays} todoList={todoList} settodoList={settodoList}/>
      <Main todoList={todoList} settodoList={settodoList} />

          
        
    </div>
  );
}

export default App;
