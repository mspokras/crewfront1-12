import React from 'react';
import Avatar from "../../../../shared/components/Avatar/Avatar";
import './UserAvatar.scss';
import { Link } from 'react-router-dom';

const UserAvatar = () => {
    return (
        <div className='user-avatar'>
            <Link to="/settings">
                <Avatar/>
            </Link>
        </div>
    );
};

export default UserAvatar;