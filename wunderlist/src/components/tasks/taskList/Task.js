import React from "react";
import styled from "styled-components"
function Task({ task, isTaskCompleted}) {
const Li = styled.li` 
`



const DivOfLi = styled.div`
width:100%;
display:flex
`
const Input = styled.input`
margin:10px 10px
`
  return(

    <DivOfLi onClick={() => isTaskCompleted(task.id)}>

      <Input type="checkbox" />

          <Li>
                {
                    task.isCompleted ? <del>{`${task.task}`}</del> : `${task.task}`
                }
          </Li>

    </DivOfLi>
  )
}

export default Task;
