import React from "react";
import './style.css'

function Signup() {
    return (
        <div className="signupContainer">
            <h4>Create A New Account</h4>
            <form>
                <ul>
                <li><label>First Name
                    <input type="text" ></input>
                </label></li>

                <li><label>Last Name
                    <input type="text" ></input>
                </label></li>

                <li><label>E-mail
                    <input type="email" placeholder="example@domain.com"></input>
                </label></li>
                <li><label>Password
                    <input type="password" placeholder="8 or more characters"></input>
                </label></li>
                <li><label>School
                    <input type="text"></input>
                </label></li>
                <li><label>City
                    <input type="text"></input>
                </label></li>
                <label>State
                    <input type="text"></input>
                </label>
                <label>Language
                    <input type="text"></input>
                </label>
                <input type="submit"></input>
            
        </ul>
            </form>
        </div>
    )
};

export default Signup;