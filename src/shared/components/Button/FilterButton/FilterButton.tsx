import React from 'react';
import './FilterButton.scss';
import classNames from "classnames";

interface PropTypes {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
const FilterButton = (props: PropTypes) => {
    const { children, onClick, className } = props;
    return (
        <div className={classNames("filter-button-container",className)} onClick={onClick}>
            <button className={`filter-button ${className}`}>{children}</button>
        </div>
    );
};

export default FilterButton;