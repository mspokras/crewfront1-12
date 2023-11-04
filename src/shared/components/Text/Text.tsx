import React from 'react';
import './Text.scss'

interface TextProps {
    children: React.ReactNode
}
const Text = (props: TextProps) => {
    const { children } = props;
    return (
        <h1 className='text'>
            {children}
        </h1>
    );
};

export default Text;