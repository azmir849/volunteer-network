import React, { useState } from 'react';
import './RegisterPage.css'
import { useHistory } from 'react-router-dom';
import logInLogo from '../../logos/Group 1329.png'

const RegisterPage = () => {
    const history =useHistory();
    const [user ,setUser] = useState({
        name:'',
        email:'',
        date:'',
        description:'',
        books:""
    });
    const handleBlur =(event)=>{
        const newUserInfo ={...user};
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
    }
    const handleRegister =() =>{
        const newUserInfo ={...user};
        fetch('https://dry-meadow-25422.herokuapp.com/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newUserInfo)
            
        })
        window.alert("Account created suuccessfully. Press Ok To Login");
        history.push('/login');
    }
    return (
        <div>
           <div>
                <img className="LogInLogo" src={logInLogo} alt=""/>
            </div>
            <div className="RegisterArea d-flex justify-content-center">
                <div className="RegisterActivityArea">
                    <h3>Register as a Volunteer</h3>
                   <form action="/register" method="POST">
                   <input onBlur={handleBlur} className="InputForm" type="text" name="name" id="" placeholder="Full Name" required/><br/><br/>
                    <input onBlur={handleBlur} className="InputForm" type="text" name="email" id="" placeholder="Username or Email" required/><br/><br/>
                    <input onBlur={handleBlur} className="InputForm" type="text" name="date" id="" placeholder="Date: dd/mm/yyyy" required/><br/><br/>
                    <input onBlur={handleBlur} className="InputForm" type="text" name="description" id="" placeholder="Description" required/><br/><br/>
                    <input onBlur={handleBlur} className="InputForm" type="text" name="books" id="" placeholder="Organize books at the library"required/><br/><br/>
                    <input onClick={handleRegister} className="submit-btn RegisterButton" type="submit" value="Register"/>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;