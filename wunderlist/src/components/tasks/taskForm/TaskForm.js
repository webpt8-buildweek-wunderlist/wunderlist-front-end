import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as yup from "yup";
import { Button, Input, Label } from "reactstrap";
import axios from "axios";

const TaxtAreaDiv = styled.div`
  width: 100%;
`;
function TaskForm(props) {
  return (
    <Form
      style={{
        width: "800px",
        margin: "20px"
      }}
    >
      {props.errors.task && <p className="error">{props.errors.task}</p>}

      <Field
        type="text"
        name="task"
        placeholder="What is your task ?"
        style={{
          "margin-top": "10px",
          padding: "15px",
          width: "80%",
          "font-size": "1rem",
          "border-radius": "10px"
        }}
      />

      <TaxtAreaDiv>
        <Field
          style={{
            width: "80%",
            padding: "10px"
          }}
          component="textarea"
          name="decriprtion"
          placeholder="decriprtion for your task"
        />
      </TaxtAreaDiv>

      <Button
        type="submit"
        color="primary"
        style={{
          padding: "15px"
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      task: values.task || "",
      decriprtion: values.decriprtion || ""
    };
  },
  validationSchema: yup.object().shape({
    task: yup.string().required("Task is required"),
    description: yup.string()
  }),

  handleSubmit: async (values, formikBag) => {
    values.id = Date.now();
    values.isCompleted = false;
    // each task has ^
    formikBag.props.setTasks([...formikBag.props.tasks, values]);
    formikBag.resetForm();
    try {
      await axiosCall(values);
    } catch (e) {
      console.log(e.message);
    }
  }
})(TaskForm);

const axiosCall = value => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: token
  };
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  axios
    .post(
      `https://wunderlist-2-0.herokuapp.com/api/users/${userId}/items`,
      {
        item_name: `${value.task}`,
        item_description: `${value.description}`
      },
      {
        headers: headers
      }
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("Error:", err);
    });
};

// const handleSubmit = async event => {
//   if (event) {
//       event.preventDefault();
//       console.log(props);
// ​
//       try {
//           await axiosCall();
//       } catch (e) {
//           console.log(e.message)
//       }

//   }
// }
