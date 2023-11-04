import React from 'react';
import NavHeader from "./components/NavHeader/NavHeader";
import NavMenu from "./components/NavMenu/NavMenu";
import NavFooter from "./components/FooterNavigation/NavFooter";
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className='nav-container'>
            <div className='nav-body'>
                <NavHeader />
                <NavMenu />
            </div>
            <NavFooter />
        </div>
    );
};

export default Navigation;