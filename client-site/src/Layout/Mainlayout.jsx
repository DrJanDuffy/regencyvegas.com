import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import RealScoutSearch from '../pages/Shared/RealScout/RealScoutSearch';
import RealScoutAdvancedSearch from '../pages/Shared/RealScout/RealScoutAdvancedSearch';
import RealScoutHomeValue from '../pages/Shared/RealScout/RealScoutHomeValue';
import RealScoutOfficeListings from '../pages/Shared/RealScout/RealScoutOfficeListings';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <RealScoutSearch />
            <RealScoutAdvancedSearch />
            <Outlet />
            <RealScoutHomeValue />
            <RealScoutOfficeListings />
        </div>
    );
};

export default Mainlayout;