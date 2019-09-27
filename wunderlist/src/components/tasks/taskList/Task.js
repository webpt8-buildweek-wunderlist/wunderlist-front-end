import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import { Button } from "reactstrap";

const Input = styled.input`
  margin: 10px 10px;
`;
const Span = styled.span`
  margin-right: 10px;
`;

const TaskDiv = styled.div`
width:100%;
display:flex;
justify-content: space-around;
align-items: center;
height:100px;
`
const DivOfLi = styled.div`
width:72%;
background:#fff;
display:flex;
justifiy-contnent:flex-start;
align-items: center;
padding:10px;
border-radius: 20px;
`;
const Li = styled.li`
  background:#fff;
  margin-left:40px;
  font-size:1.2rem
`;

const DivOfBtn = styled.div`
width:17%;
background:#FFF;
padding:5px;
border-radius: 20px;
&:hover{
  background-color: Lavender;
}
`;
function Task({ task, isTaskCompleted , deletTask }) {
  return (
    <TaskDiv>

      <DivOfLi onClick={() => isTaskCompleted(task.id)}>
      <Li>
          {task.isCompleted ? <del>{`${task.task}`}</del> : `${task.task}`}
        </Li>
      </DivOfLi>
      <DivOfBtn>
      <Button outline color="info">
           <Link to={`to_do_list/${task.id}`}>Edit</Link>
      </Button>
      </DivOfBtn>
      <DivOfBtn>
      <Button outline color="danger" onClick={() =>deletTask(task.id)}>
           Delete
      </Button>
      </DivOfBtn>
    </TaskDiv>
  );
}

export default Task;
