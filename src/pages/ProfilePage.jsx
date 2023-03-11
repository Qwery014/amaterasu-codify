import React from 'react';
import Application from '../components/Application';
import Profile from '../components/Profile';

const Profilepage = (props) => {
    return (
        <div>
            <Profile/>
            <Application/>
        </div>
    );
};

export default Profilepage;