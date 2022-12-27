import React,{ChangeEvent, useState}from 'react'
import { iTask } from '../../interface';
import './head.css'




interface HeadPorps {task:string;setTask:Function;days:string;setDays:Function;todoList:iTask[];settodoList:Function}

function Head(props:HeadPorps) {
    const{task,setTask,days,setDays,todoList,settodoList}= props
    
    const handleChange = function (event:ChangeEvent<HTMLInputElement>){
       if(event.target.id=='task'){
        setTask(event.target.value)
    } else{
        setDays(event.target.value)
    }
    }
    const submit = function(){
        if(task==''){alert('請輸入任務');return}
        else if(days==""){alert('請輸入天數');return}
        settodoList([...todoList,{task:task,days:days}]);setTask("");setDays("");
    }

  return (
    <div className="header" >
      <div className="input">
        <input type="text"   id='task' placeholder='請輸入任務' value={task} onChange={handleChange}  required></input>
        <input type='text' id='days' placeholder='任務天數'   value={days} onChange={handleChange}  required min='1'></input>
      </div>
        
      <button className="submit" onClick={submit}>提交</button>
    </div>
  )
}

export default Head