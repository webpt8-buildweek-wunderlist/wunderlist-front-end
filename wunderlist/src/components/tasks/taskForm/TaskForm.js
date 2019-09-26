import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"




function TaskForm(props) {

  return (
    <Form>
    {props.errors.task && <p className="error">{props.errors.task}</p>}


      <Field type="text" 
      name="task" 
      placeholder="What is your task?" />

      <button type="submit">Submit</button>
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
      task: yup.string().required()
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
