import React from 'react';
import './Text.scss'

interface TextProps {
    label: string
}
const Text = (props: TextProps) => {
    const { label } = props;
    return (
        <h1 className='text'>
            {label}
        </h1>
    );
};

export default Text;