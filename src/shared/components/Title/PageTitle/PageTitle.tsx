import React from 'react';
import './PageTitle.scss';

interface PageTitleProps {
    children: React.ReactNode
}
const PageTitle = (props: PageTitleProps) => {
    const { children } = props;
    return (
        <div className='page-title'>
            {children}
        </div>
    );
};

export default PageTitle;