import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1>Page Not Found!</h1>
            <h2>Go back <Link to={"/"} >Home</Link></h2>
        </div>
    )
}

export default NotFound;