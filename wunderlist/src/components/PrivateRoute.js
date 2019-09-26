import React from "react";
import {Redirect, Route} from "react-router-dom";

export default function PrivateRoute(props) {
    const {component: Component, ...rest} = props
    return(
        <Route {...rest} render={() => {
            const token = localStorage.getItem('token')
            
            return token ? <Component /> : <Redirect to="/" />
        }} />
    )
}

// export const PrivateRoute = ({ component: Component, ...rest}) => (
//     <Route
//         {...rest}
//         render = {props =>
//             localStorage.getItem("token") ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to = {{
//                         pathname: "/user",
//                         state: { from: props.location}
//                     }}
//                 />
//             )
//         }
//     />
// );
