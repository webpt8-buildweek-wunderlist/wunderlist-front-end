import React from 'react';

export default function SignUp (){
    return(
    <form>
        <div>
            <label>First Name</label>
            <input type="text" name="firstName" required />
            <label>Last Name</label> 
            <input type="text" name="lastName" required />
        </div>
        <div>
            <label>Email Address</label>
            <input type="email" name="email" required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password1" />
        </div>
        <button type="submit">Sign Up</button>
    </form>
    )
}
