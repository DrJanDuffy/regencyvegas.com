import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import RealScoutSearch from '../pages/Shared/RealScout/RealScoutSearch';
import RealScoutOfficeListings from '../pages/Shared/RealScout/RealScoutOfficeListings';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <RealScoutSearch />
            <Outlet />
            <RealScoutOfficeListings />
        </div>
    );
};

export default Mainlayout;