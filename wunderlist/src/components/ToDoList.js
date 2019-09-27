import React,{useState , useEffect} from 'react';
import TaskForm from "./tasks/taskForm/TaskForm"
import TaskList from "./tasks/taskList/TaskList"
import {Route } from "react-router-dom"
import Description from "./tasks/taskList/Description"


export default function ToDoList (){

    const [tasks,setTasks] = useState([])
console.log(tasks)
    // check the local storage and adds up the values to tasks
    useEffect(() => {
        if(tasks.length === 0){
            if(localStorage.getItem("tasks")){
                setTasks(JSON.parse(localStorage.getItem("tasks")))
            }
        }
    } , [])

// convert tasks into strings 
    useEffect(() => {
        if(localStorage.getItem("tasks") &&  JSON.parse(localStorage.getItem('tasks').length !== tasks.length)){
            localStorage.setItem('tasks', JSON.stringify(tasks))
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    } , [tasks])
    console.log(tasks)

   return(
        <div>
            <TaskForm tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks}  setTasks={setTasks}/>
            <Route exact path="/to_do_list/:id" redner={props => <Description {...props} tasks={tasks} />} />
            </div>
    )
}