import React from 'react';
import PageTitle from "../../shared/components/Title/PageTitle/PageTitle";
import UserAvatar from "../../entities/user/components/UserAvatar/UserAvatar";

const PageHeader = () => {
    return (
        <div>
            <PageTitle>Dashboard</PageTitle>
            <UserAvatar/>
        </div>
    );
};

export default PageHeader;