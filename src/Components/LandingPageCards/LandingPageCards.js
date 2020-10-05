import React from 'react';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';
import './LandingPageCards.css'

const volunteerActivity =[
    {
        name: 'Child Support',
        pictureUrl:'childSupport.png'
    },
    {
        name: 'Refuge Shelter',
        pictureUrl:'refuseShelter.png'
    },
    {
        name: 'Food Charity',
        pictureUrl:'foodCharity.png'
    },
    {
        name: 'Host a clothing swap',
        pictureUrl:'clothSwap.png'
    },
    {
        name: 'Host a river clean-up',
        pictureUrl:'riverClean.png'
    },
    {
        name: 'Clean water for children',
        pictureUrl:'cleanWater.png'
    },
    {
        name: 'Good education',
        pictureUrl:'goodEducation.png'
    },
    {
        name: 'New books for children',
        pictureUrl:'newBooks.png'
    },
    {
        name: 'Host a study group',
        pictureUrl:'studyGroup.png'
    },
    {
        name: 'Build a birdhouses for your neighbors',
        pictureUrl:'birdHouse.png'
    },
    {
        name: 'Organize books at the library',
        pictureUrl:'libraryBooks.png'
    },
    {
        name: 'Give a seminar on driving safety',
        pictureUrl:'driveSafety.png'
    },
    {
        name: 'Give free music lessons',
        pictureUrl:'musicLessons.png'
    },
    {
        name: 'Teach people how to register to vote',
        pictureUrl:'voteRegister.png'
    },
    {
        name: 'Clean up your local park',
        pictureUrl:'clearnPark.png'
    },
    {
        name: 'Give IT helps to local adults',
        pictureUrl:'ITHelp.png'
    },
    {
        name: 'Foster a shelter animal',
        pictureUrl:'animalShelter.png'
    },
    {
        name: 'Babysit during PTA meetings',
        pictureUrl:'babySit.png'
    },
    {
        name: 'Collects stuffed animals',
        pictureUrl:'stuffedAnimals.png'
    },
    {
        name: 'Collect school supplies',
        pictureUrl:'schoolSuffiles.png'
    },
]

const LandingPageCards = () => {
    return (
        <div className="Cards row">
            {
               volunteerActivity.map(activity =><VolunteerActivity activity={activity}></VolunteerActivity>)
            }
        </div>
    );
};

export default LandingPageCards;