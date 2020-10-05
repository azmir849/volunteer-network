import React from 'react';
import './LogInPage.css'
import logInLogo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';

const LogInPage = () => {
    return (
        <div>
            <div>
                <img className="LogInLogo" src={logInLogo} alt=""/>
            </div>
            <div className="LogInArea">
                <div className="LogInActivityArea">
                    <h3>Login With</h3>
                    <button className="LoginButton btn-warning">Continue with Google</button>
                    <pre>Don't have an account? <Link to="/register">Create an account</Link></pre>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;