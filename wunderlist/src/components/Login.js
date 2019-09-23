import React, { useState } from 'react';
import { Button, FormGroup, Form, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Login (){
    const useLoginForm = (cb) => {
        const [Inputs, setValues] = useState({});
    
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        cb();
    }

    const handleInputChange = (event) => {
        event.persist();
        setValues(Inputs => ({...Inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        Inputs
    };
}

const login = () => {
    alert (`Logged in Successful!
            Name: ${Inputs.firstName} ${Inputs.lastName}
            Email: ${Inputs.email}`);
}

const {Inputs, handleInputChange, handleSubmit} = useLoginForm(login);

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input type="email" name="email" onChange={handleInputChange} value={Inputs.email} required />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input type="password" name="password1" onChange={handleInputChange} value={Inputs.password1} />
        </FormGroup>
        <FormGroup>
            <Button color="secondary" type="submit">Log In</Button>
        </FormGroup>
        <FormGroup>
            <Link to='/signup'><Button color="secondary" type="submit">Sign Up</Button></Link>
        </FormGroup>
        </Form>
    )
}