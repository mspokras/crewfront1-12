import React from 'react';
import PageTitle from "../../shared/components/Title/PageTitle/PageTitle";
import './PageHeader.scss';
import UserAvatar from '../../entities/Customer/components/UserAvatar/UserAvatar';

interface PropTypes {
    title?: string;
}
const PageHeader = (props: PropTypes) => {
    const { title } = props;
    return (
        <div className='page-header'>
            <PageTitle title={title} />
            <UserAvatar/>
        </div>
    );
};

export default PageHeader;