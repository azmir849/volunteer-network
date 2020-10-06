import React, { useContext, useState } from 'react';
import './LogInPage.css'
import logInLogo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const LogInPage = () => {
    const history =useHistory();
    const[user,setUser] = useState({
        isSignedIn:false,
        name:''
    })
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn= ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(result=> {
            const{displayName} = result.user;
            const signedInUser ={
                isSignedIn:true,
                name:displayName
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.push('/event');
          }).catch(error=> {
            console.log(error);
            console.log(error.message);
          });
    }
    return (
        <div>
            <div>
                <img className="LogInLogo" src={logInLogo} alt=""/>
            </div>
            <div className="LogInArea">
                <div className="LogInActivityArea">
                    <h3>Login With</h3>
                    <button onClick={handleSignIn} className="LoginButton btn-warning">Continue with Google</button>
                    <pre>Don't have an account? <Link to="/register">Create an account</Link></pre>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;