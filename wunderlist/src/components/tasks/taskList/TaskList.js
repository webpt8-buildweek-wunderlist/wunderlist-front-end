import React from 'react'
import Task from "./Task"
import styled from "styled-components"
function TaskList({tasks , setTasks}) {




    const Ul = styled.ul`
      width:100%;
      position: absolute;
      left:0;
      display:flex;
      flex-direction: column;
      list-style:none;
    `

    const isTaskCompleted = taskID => {
        const updtaTask = tasks.map(task => {
            if(task.id === taskID){
                return ({...task, isCompleted: !task.isCompleted})
            } else {
                return task
            }
        })
        setTasks(updtaTask)
    }
    return (
        <Ul>
            {tasks.map((task) => <Task 
                                  task={task} 
                                  key={task.id} 
                                  isTaskCompleted={isTaskCompleted}/>)}
        </Ul>
    )
}

export default TaskList
