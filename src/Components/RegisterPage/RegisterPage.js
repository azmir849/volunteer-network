import React from 'react';
import './RegisterPage.css'
import logInLogo from '../../logos/Group 1329.png'

const RegisterPage = () => {
    return (
        <div>
           <div>
                <img className="LogInLogo" src={logInLogo} alt=""/>
            </div>
            <div className="RegisterArea d-flex justify-content-center">
                <div className="RegisterActivityArea">
                    <h3>Register as a Volunteer</h3>
                   <form action="" >
                   <input className="InputForm" type="text" name="name" id="" placeholder="Full Name"/><br/><br/>
                    <input className="InputForm" type="text" name="email" id="" placeholder="Username or Email"/><br/><br/>
                    <input className="InputForm" type="text" name="date" id="" placeholder="Date"/><br/><br/>
                    <input className="InputForm" type="text" name="description" id="" placeholder="Description"/><br/><br/>
                    <input className="InputForm" type="text" name="bookslibrary" id="" placeholder="Organize books at the library"/><br/><br/>
                    <button className="RegisterButton">Registration</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;