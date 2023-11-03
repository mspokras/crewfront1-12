import React from 'react';
import PageTitle from "../../shared/components/Title/PageTitle";
import UserAvatar from "../../entities/user/components/UserAvatar/UserAvatar";

const PageHeader = () => {
    return (
        <div>
            <PageTitle/>
            <UserAvatar/>
        </div>
    );
};

export default PageHeader;