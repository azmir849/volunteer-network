import React from 'react';
import './EventPage.css'
import volunteerLogo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import EventPageCard from '../../EventPageCard/EventPageCard';

const EventPage = () => {
    return (
        <div>
           <div>
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
                    
                </ul>
              </nav>
              <h4 className="UserName">Sufi Ahamed</h4>
            </div>
            <EventPageCard></EventPageCard>
        </div>
    );
};

export default EventPage;