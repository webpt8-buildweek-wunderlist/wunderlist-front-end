import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components"
import * as yup from "yup"
import {Button } from "reactstrap"



function TaskForm(props) {

  return (
    <Form style={{
      width:"500px",
      margin:"20px",
    }}>
    {props.errors.task && <p className="error">{props.errors.task}</p>}


      <Field type="text" 
      name="task" 
      placeholder="What is your task ?"
      style={{
        'margin-top':'10px',
        padding: "15px",
        width:"80%",
        "font-size":"1rem",
        "border-radius":"10px" 
      }} />

      <Button type="submit" color="primary" style={{
        padding:"15px"
      }} >Submit</Button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      task: values.task || "",
     };
  },
  validationSchema: yup.object().shape({
      task: yup.string().required("Task is required"),

  }),
  handleSubmit: (values , formikBag) => {
    
      values.id = Date.now()
      values.isCompleted = false
    // each task has ^
    formikBag.props.setTasks([...formikBag.props.tasks, values ])
    formikBag.resetForm()
    // axios.post("" , {
    //     "item_name": values.task,
    //     "item_description":
    // })
  }
})(TaskForm);







/**
//  * this is my old code
  import React,{useState} from 'react'
import { withFormik , Form , Field} from "formik";
function TaskForm({setTasks , tasks}) {

    const [inputValues, setInputValues] = useState({
        id: Date.now(),
        task: "",
        isCompleted: false,
    })

    const handleChange = ({target:{name,value}}) =>{
        setInputValues({ ...inputValues,[name]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        setInputValues({...inputValues , id:Date.now()})
        setTasks([...tasks,inputValues])
        resetValue()
    }

    const resetValue = () => {
        setInputValues({...inputValues , task:""})
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" name="task" onChange={handleChange} />
            <button type="submit" onClick={resetValue}>Submit</button>
        </Form>
    )
}

export default TaskForm */
