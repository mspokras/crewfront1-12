import React from 'react';
import PageHeader from "../../widgets/PageHeader/PageHeader";
import Navigation from "../../widgets/Navigation/Navigation";

interface TemplatePageProps {
    children: React.ReactNode
}
const TemplatePage = (props: TemplatePageProps) => {
    const {children} = props
    return (
        <div>
            <Navigation/>
            <PageHeader/>
            {children}
        </div>
    );
};

export default TemplatePage;