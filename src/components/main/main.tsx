import React from 'react'
import { iTask } from '../../interface';
import "./main.css"




interface MainPorps {todoList:iTask[];settodoList:Function}

function Main(props:MainPorps) {
    const{todoList,settodoList}=props
    const deleteTask = function(task:string){settodoList(todoList.filter(obj=>{return obj.task!=task}))}
    return(
        <div className='container'>
            {
              todoList.map((obj)=>{return(
                <div key={obj.task} className="taskAndDeletebutton">
                  <div className="taskList">
                    <div className='task'>{obj.task}</div>
                    <div className='days'>{obj.days}天</div>
                  </div>
                  <button className='delete' onClick={()=>{deleteTask(obj.task)}} name={obj.task}>刪除</button>
                </div>  
              )})
            }
        </div>
    )
  
}

export default Main