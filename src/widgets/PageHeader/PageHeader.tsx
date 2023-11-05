import React from 'react';
import PageTitle from "../../shared/components/Title/PageTitle/PageTitle";
import UserAvatar from "../../entities/user/components/UserAvatar/UserAvatar";
import './PageHeader.scss';

const PageHeader = () => {
    return (
        <div className='page-header'>
            <PageTitle title="Dashboard" />
            <UserAvatar/>
        </div>
    );
};

export default PageHeader;