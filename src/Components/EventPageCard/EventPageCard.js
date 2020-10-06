import React from 'react';
import './EventPageCard.css'
import extraVolunteer from '../../images/extraVolunteer.png'

const EventPageCard = () => {
    return (
        <div className="eventCards row">
             <div class="card mb-3 cardSize">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={extraVolunteer} class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Humanity More</h5>
                        <p class="card-text">29 sep,2020</p>
                        <button className="cancelButton">Cancel</button>
                     </div>
                 </div>
                </div>
            </div>
            <div class="card mb-3 cardSize">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={extraVolunteer} class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Humanity More</h5>
                        <p class="card-text">29 sep,2020</p>
                        <button className="cancelButton">Cancel</button>
                     </div>
                 </div>
                </div>
            </div>
            <div class="card mb-3 cardSize">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={extraVolunteer} class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Humanity More</h5>
                        <p class="card-text">29 sep,2020</p>
                        <button className="cancelButton">Cancel</button>
                     </div>
                 </div>
                </div>
            </div>
            <div class="card mb-3 cardSize">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={extraVolunteer} class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Humanity More</h5>
                        <p class="card-text">29 sep,2020</p>
                        <button className="cancelButton">Cancel</button>
                     </div>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default EventPageCard;