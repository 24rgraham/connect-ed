import React from "react";
import './style.css'

function Signup() {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget)
    // const newUser = {
    //     firstName: data.get('newFirstName'),
    //     lastName: data.get('newLastName'),
    //     email: data.get('newLastName'),
    //     password: data.get('newPassword'),
    //     school: data.get('newSchool'), 
    //     city: data.get('newCity'),
    //     state: data.get('newState'),
    //     language: data.get('newLanguage'),
        // This will be for the cloudinary upload widget
    // }
    return (
        <div className="signupContainer">
            <h4>Create A New Account</h4>
            <form className="signUpForm">
                <ul>
                <li><label>First Name
                    <input name="newFirstName" type="text" ></input>
                </label></li>

                <li><label>Last Name
                    <input name='newLastName' type="text" ></input>
                </label></li>

                <li><label>E-mail
                    <input name='newEmail' type="email" placeholder="example@domain.com"></input>
                </label></li>
                <li><label>Password
                    <input name='newPassword' type="password" placeholder="8 or more characters"></input>
                </label></li>
                <li><label>School
                    <input name='newSchool' type="text"></input>
                </label></li>
                <li><label>City
                    <input name='newCity' type="text"></input>
                </label></li>
                <li><label>State
                    <input name='newState'type="text"></input>
                </label></li>
                <li><label>Language
                    <input name='newLanguage' type="text"></input>
                </label></li>
                {/* future home of the cloudinary upload widget */}
                <input type="submit"></input>
            
        </ul>
            </form>
        </div>
    )
};

export default Signup;