import React from 'react';
import './AddEventPage.css'
import { Link } from 'react-router-dom';
import VolunteerLOGO from '../../logos/Group 1329.png'
const AddEventPage = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <img className="VolunteerLOGO" src={VolunteerLOGO} alt=""/>
                    <pre className="ListLink"><Link to="/admin">Volunteer register list</Link></pre>
                    <h6 className="addEventLink"> <Link to="/addEvent">Add event</Link></h6>
                    </div>
                    <div class="col-md-8">
                      <h6 className="listArea">Add event</h6>
                    </div>
                    <div className="eventPostArea">
                       <pre className="TextAreatitle">Event Title                        Event Date</pre>
                        <input className="inputText" type="text" name="title" id="" placeholder="Enter title"/>
                        <input type="date" name="title" id="" />
                        <pre className="TextAreatitle">Description                          Banner</pre>
                        <input className="inputText" type="text" name="" id="" placeholder="Enter Designation"/>
                        <button className="btn btn-primary">Upload Image</button><br/><br/>
                        <button className="SubmitButton btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEventPage;