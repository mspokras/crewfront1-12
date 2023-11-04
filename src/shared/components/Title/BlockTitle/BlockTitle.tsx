import React from 'react';
import './BlockTitle.scss';

interface BlockTitleProps {
    children: React.ReactNode
}
const BlockTitle = (props: BlockTitleProps) => {
    const { children } = props;
    return (
        <div className='block-title'>
            {children}
        </div>
    );
};

export default BlockTitle;