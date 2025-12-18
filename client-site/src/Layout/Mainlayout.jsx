import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import RealScoutSearch from '../pages/Shared/RealScout/RealScoutSearch';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <RealScoutSearch />
            <Outlet />
        </div>
    );
};

export default Mainlayout;