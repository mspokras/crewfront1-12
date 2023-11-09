import React from 'react';
import './PageTitle.scss';

interface PageTitleProps {
    title?: string
}
const PageTitle = (props: PageTitleProps) => {
    const { title } = props;
    return (
        <div className='page-title'>
            {title}
        </div>
    );
};

export default PageTitle;