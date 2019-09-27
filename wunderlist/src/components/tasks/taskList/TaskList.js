import React from "react";
import Task from "./Task";
import styled from "styled-components";

function TaskList({ tasks, setTasks }) {
  const Ul = styled.ol`
    width: 60%;
    margin: 0 auto;
  `;

  const UlDiv = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    background-color: Lavender;
  `;

  const isTaskCompleted = taskID => {
    const updtaTask = tasks.map(task => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(updtaTask);
  };
  const deletTask = () => {
    const updtaTasks = tasks.filter(task => !task.isCompleted);
    setTasks(updtaTasks);
  };
  return (
    <UlDiv>
      <Ul>
        {tasks.map((task, idx) => (
          <Task
            task={task}
            key={task.id}
            isTaskCompleted={isTaskCompleted}
            deletTask={deletTask}
          />
        ))}
      </Ul>
    </UlDiv>
  );
}

export default TaskList;
