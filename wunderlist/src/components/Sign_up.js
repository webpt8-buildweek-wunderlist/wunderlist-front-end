import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import { Link} from "react-router-dom";


export default function SignUp (){


//Custom Hooks for Sign Up Functionality 
    const useSignUpForm = (cb) => {
        
        const [Inputs, setInputs] = useState({});

        

        //Preventing the default (page refreshing)
        const handleSubmit = (event, values, { setStatus }) => {
            if (event) {
                event.preventDefault();
                
                axios
                    .post('https://wunderlist-2-0.herokuapp.com/api/users/register', values)
                    .then((res) => {
                        setStatus(res.data)
                    })
                    .catch((err) => {
                        console.log('Error:', err)
                    })
            }
            cb();
        }
        
        //Handling event when user gives Input
        const handleInputChange = (event) => {
            event.persist();
            setInputs(Inputs => ({...Inputs, [event.target.name]: event.target.value}));
        }
        return {
            handleSubmit,
            handleInputChange,
            Inputs
        };
    }

const signup = () => {
    alert (`User Created!
            Name: ${Inputs.firstName} ${Inputs.lastName}
            Email: ${Inputs.email}`);
}
 
const {Inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

    return(
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label for="exampleEmail">First Name</Label>
            <Input type="text" name="firstName" onChange={handleInputChange} value={Inputs.firstName} required />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Last Name</Label> 
            <Input type="text" name="lastName" onChange={handleInputChange} value={Inputs.lastName} required />
        </FormGroup>

        <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="text" name="username" onChange={handleInputChange} value={Inputs.username} required />
        </FormGroup>

        <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input type="email" name="email" onChange={handleInputChange} value={Inputs.email} required />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input type="password" name="password1" onChange={handleInputChange} value={Inputs.password1} />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Re-enter Password</Label>
            <Input type="password" name="password2" onChange={handleInputChange} value={Inputs.password2} />
        </FormGroup>
        <FormGroup>
        <Button color="secondary" type="submit">Sign Up</Button>
        </FormGroup>
        <FormGroup>
            <Link to='/'><Button color="secondary" type="submit">Log In</Button></Link>
        </FormGroup>
    </Form>
    )
}
