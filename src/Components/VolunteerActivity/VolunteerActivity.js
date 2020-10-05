import React from 'react';
import './VolunteerActivity.css'
 import img from '../../images/childSupport.png'

const VolunteerActivity = ({activity}) => {
    return (
        <div className="col-md-3 card-deck">
            <div class="card">
                <img src={require(`../../images/${activity.pictureUrl}`)} alt=""/>
                <div class="card-footer">
                <h6 class="d-flex justify-content-center footerText">{activity.name}</h6>
                </div>
            </div>
        </div>
    );
};

export default VolunteerActivity;