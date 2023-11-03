import React from 'react';
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import BodyNavigation from "./components/BodyNavigation/BodyNavigation";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";

const Navigation = () => {
    return (
        <div>
            <HeaderNavigation/>
            <BodyNavigation/>
            <FooterNavigation/>
        </div>
    );
};

export default Navigation;