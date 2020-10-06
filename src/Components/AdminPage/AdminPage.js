import React from 'react';
import './AdminPage.css'
import VolunteerLOGO from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
const AdminPage = () => {
    const loadAllUsers=()=>{
        fetch('http://localhost:5000/registerUser')
        .then(res => res.json())
        .then(users =>{
            console.log(users);
           const container =  document.getElementById('users');
           users.forEach(user => {
               const p = document.createElement('p');
                p.innerHTML = `${user.name}  ${user.email}  ${user.date}  ${user.description}
                <button onClick={deleteUser}>Delete</button>
                `;  
                container.appendChild(p);  
           });
         })
        }
     loadAllUsers();
     const deleteUser =(event, id)=>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                event.target.parentNode.style.display="none";
            }
        })
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
                      <h6 className="listArea">Volunteer register list</h6>
                      <div className="InfoTitleArea">
                         <pre className="InfoTitle">Name              Email ID          Registration date          Volunteer list           Action </pre>
                      </div>
                        <div className="RegisterUsers" id="users">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;