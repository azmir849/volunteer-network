import React from 'react';
import './VolunteerActivity.css'
import { useHistory } from 'react-router-dom';

const VolunteerActivity = ({activity}) => {
    const history =useHistory();
    const handleCard=()=>{
        history.push('/login');
    }
    return (
        <div className="col-md-3 card-deck">
            <div class="card">
                <img onClick={handleCard} src={require(`../../images/${activity.pictureUrl}`)} alt=""/>
                <div class="card-footer">
                <h6 class="d-flex justify-content-center footerText">{activity.name}</h6>
                </div>
            </div>
        </div>
    );
};

export default VolunteerActivity;