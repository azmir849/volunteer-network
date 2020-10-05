import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageHeader.css'
import volunteerLogo from '../../logos/Group 1329.png'
import backgroundImg from '../../HeaderImg/image 1.png'

const LandingPageHeader = () => {
    return (
            <div>
                <img className="BackgroundImg" src={backgroundImg} alt=""/>
                <img className="VolunteerLogo" src={volunteerLogo} alt=""/>
               <nav className="nav navMenuArea">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="Register-btn btn-primary" to="/register">Register</Link>
                    </li>
                    <li>
                        <Link className="Admin-btn btn-secondary" to="/admin">Admin</Link>
                    </li>
                </ul>
              </nav>
              <div className="d-flex justify-content-center headerTitle">
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <form className="form-inline my-2 my-lg-0 inputForm">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search..." aria-label="Search"/>
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
              </div>
            </div>
    );
};

export default LandingPageHeader;