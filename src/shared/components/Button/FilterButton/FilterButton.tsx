import React from 'react';
import './FilterButton.scss';

interface propTypes {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
const FilterButton = (props: propTypes) => {
    const { children, onClick, className } = props;
    return (
        <div className={`filter-button-container ${className}`} onClick={onClick}>
            <button className={`filter-button ${className}`}>{children}</button>
        </div>
    );
};

export default FilterButton;