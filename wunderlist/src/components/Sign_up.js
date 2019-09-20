import React, { useState } from 'react';

export default function SignUp (){

//Custom Hooks for Sign Up Functionality 
    const useSignUpForm = (cb) => {
        const [inputs, setInputs] = useState({});

        const handleSubmit = (event) => {
            if (event) {
                event.preventDefault();
            }
            cb();
        }
        
        const handleInputChange = (event) => {
            event.persist();
            setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        }
        return {
            handleSubmit,
            handleInputChange,
            inputs
        };
    }

const signup = () => {
    alert (`User Created!
            Name: ${inputs.firstName} ${inputs.lastName}
            Email: ${inputs.email}`);
}
 
const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

    return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
            <label>Last Name</label> 
            <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
        </div>
        <div>
            <label>Email Address</label>
            <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1} />
        </div>
        <div>
            <label>Re-enter Password</label>
            <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2} />
        </div>
        <button type="submit">Sign Up</button>
    </form>
    )
}
