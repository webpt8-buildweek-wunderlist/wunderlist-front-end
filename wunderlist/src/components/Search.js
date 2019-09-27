import React, {useState, useEffect} from 'react';
import './NavBar.css';
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import { Input, Menu } from 'semantic-ui-react'

export default function Search ({ isSubmitting}){

  const [task, setTask] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = event => {
    setTask(event.target.value);
    console.log(task);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log (task);
    let userID = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    axios
      .get(`https://wunderlist-2-0.herokuapp.com/api/users/${userID}/items?item_name=${task}`, { 
        headers: {
          authorization: token
        }
      })
      .then(res => {

        setResults(res.data.toDoItems);
        console.log("res.data", res.data)
      })
      .catch(err => {
        console.log("Try to fix your code");
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <Menu.Item>
          <Input
            onChange={handleInputChange}
            placeholder="Search for your task"
            value={task}
            name="name"
            className="input"
            id = "SearchBar"
          />
          <button type="submit" disabled={isSubmitting}>Search</button>
        </Menu.Item>
        </form>
      </div>
      {results.length > 0 && (
        <div >
          {results.map(task => {
            return (
              <p>{task.item_name}</p>
            );
          })}
        </div>
      )}
    </div>
  );


  // ________________________________more or less

  // const [task, setTask] = useState('')

  // const handleInputChange = e => {
  //   setTask(e.target.value)
  // }

  // useEffect(() => {
  //   axios
  //     .get ("https://wunderlist-2-0.herokuapp.com/api/users/:user_id/items")
  //     .then (res => {
  //       if (task.toString() === res.item_name.toString()){
  //         return res.item_name;
  //       } else {
  //         return "No such task";
  //       }
  //     })
  //     .catch (err => {
  //       console.log ("Try to fix your code")
  //     })
  // }, [])

  // return (
  //   <section>
  //     <form onSubmit={() => onSearch(task)}>
  //       <Menu.Item>
  //         <Input
  //           name='task'
  //           className="input"
  //           id = "SearchBar"
  //           placeholder="Search for your task"
  //           value={task}
  //           onChange={handleInputChange}
  //         />
  //         <button type="submit" disabled={isSubmitting}>
  //          Search
  //         </button>
  //       </Menu.Item>
  //     </form>
  //   </section>
  // )
}