import React, { useState } from "react";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;

  const axiosCall = () => {
    const headers = {
      "Content-Type": "application/json"
    };
    axios
      .post(
        "https://wunderlist-2-0.herokuapp.com/api/users/login",
        {
          username: `${username}`,
          password: `${password}`
        },
        {
          headers: headers
        }
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user.id);
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  const handleSubmit = async event => {
    if (event) {
      event.preventDefault();
      console.log(props);

      try {
        await axiosCall();
        history.push("/user");
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input type="email" name="email" onChange={handleInputChange} value={Inputs.email} required />
            </FormGroup> */}
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input
          type="text"
          name="username"
          onChange={event => setUsername(event.target.value)}
          value={username}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Password</Label>
        <Input
          type="password"
          name="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
      </FormGroup>
      <FormGroup>
        <Button color="secondary" type="submit">
          Log In
        </Button>
      </FormGroup>
      <FormGroup>
        <Link to="/signup">
          <Button color="secondary" type="submit">
            Sign Up
          </Button>
        </Link>
      </FormGroup>
    </Form>
  );
}

export default withRouter(Login);

// export default function Login (){
//     const useLoginForm = (cb) => {
//         const [Inputs, setValues] = useState({});

//     const handleSubmit = (event, values, { setStatus }) => {
//         if (event) {
//             event.preventDefault();
//             axios
//                     .post('https://wunderlist-2-0.herokuapp.com/api/users/login', values)
//                     .then((res) => {
//                         console.log(res);
//                         // localStorage.getItem("token");
//                         setStatus(res.data)
//                     })
//                     .catch((err) => {
//                         console.log('Error:', err)
//                     })
//         }
//         cb();
//     }

//     const handleInputChange = (event) => {
//         event.persist();
//         setValues(Inputs => ({...Inputs, [event.target.name]: event.target.value}));
//     }
//     return {
//         handleSubmit,
//         handleInputChange,
//         Inputs
//     };
// }

// const login = () => {
//     alert (`Logged in Successful!
//             Name: ${Inputs.firstName} ${Inputs.lastName}
//             Email: ${Inputs.email}`);
// }

// const {Inputs, handleInputChange, handleSubmit} = useLoginForm(login);

//     return(
//         <Form onSubmit={handleSubmit}>
//             {/* <FormGroup>
//             <Label for="exampleEmail">Email Address</Label>
//             <Input type="email" name="email" onChange={handleInputChange} value={Inputs.email} required />
//             </FormGroup> */}
//             <FormGroup>
//             <Label for="exampleEmail">Username</Label>
//             <Input type="text" name="username" onChange={handleInputChange} value={Inputs.username} required />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="exampleEmail">Password</Label>
//                 <Input type="password" name="password1" onChange={handleInputChange} value={Inputs.password1} />
//             </FormGroup>
//             <NavLink to="/user">
//             <FormGroup>
//                 <Button color="secondary" type="submit">Log In</Button>
//             </FormGroup>
//             </NavLink>

//             <FormGroup>
//                 <Link to='/signup'><Button color="secondary" type="submit">Sign Up</Button></Link>
//             </FormGroup>
//         </Form>
//     )
// }
