import React, { useState } from 'react';
import './AddEventPage.css'
import { Link } from 'react-router-dom';
import VolunteerLOGO from '../../logos/Group 1329.png'
const AddEventPage = () => {
    const [event ,setEvent] = useState({
        title:'',
        date:'',
        description:''
    });
    const handleBlur =(event)=>{
        const newEventInfo ={...event};
        newEventInfo[event.target.name] = event.target.value;
        setEvent(newEventInfo);
    }

    const handleEvent =() =>{
        const newEventInfo ={...event};
        fetch('https://dry-meadow-25422.herokuapp.com/event',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newEventInfo)
            
        })
        window.alert("Event added successfully");
    }

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
                    <form action="/event" method="POST">
                       <pre className="TextAreatitle">Event Title                        Event Date</pre>
                        <input onBlur={handleBlur} className="inputText" type="text" name="title" id="" placeholder="Enter title"/>
                        <input onBlur={handleBlur} type="date" name="title" id="" />
                        <pre className="TextAreatitle">Description                          Banner</pre>
                        <input onBlur={handleBlur} className="inputText" type="text" name="" id="" placeholder="Enter Designation"/>
                        <button className="btn btn-primary">Upload Image</button><br/><br/>
                        <button  onClick={handleEvent} className="SubmitButton btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEventPage;