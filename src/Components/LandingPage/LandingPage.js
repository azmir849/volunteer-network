import React from 'react';
import LandingPageCards from '../LandingPageCards/LandingPageCards';
import LandingPageHeader from '../LandingPageHeader/LandingPageHeader';

const LandingPage = () => {
    return (
        <div>
            <LandingPageHeader></LandingPageHeader>
            <LandingPageCards></LandingPageCards>
        </div>
    );
};

export default LandingPage;