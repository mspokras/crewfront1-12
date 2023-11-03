import React from 'react';
import avatarTemplate from '../../../assets/images/avatar-template.jpg';
import './Avatar.scss';

const Avatar = () => {
    return (
        <div className="avatar">
            <img src={avatarTemplate} alt="" />
        </div>
    );
};

export default Avatar;