import React from 'react';
import PageHeader from "../../widgets/PageHeader/PageHeader";
import Navigation from "../../widgets/Navigation/Navigation";
import './TemplatePage.scss';

interface TemplatePageProps {
    children: React.ReactNode
}
const TemplatePage = (props: TemplatePageProps) => {
    const {children} = props
    return (
        <div className='template-page'>
            <Navigation/>
            <div className='page-container'>
                <PageHeader/>
                {children}
            </div>
        </div>
    );
};

export default TemplatePage;