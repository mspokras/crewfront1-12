import React from 'react';
import './FilterButton.scss';
import classNames from "classnames";

interface PropTypes {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}
const FilterButton = (props: PropTypes) => {
    const { title, onClick, isActive } = props;
    return (
        <div className={classNames("filter-button-container", { 'active': isActive })} onClick={onClick}>
            <button className={`filter-button ${isActive ? 'active' : ''}`}>{title}</button>
        </div>
    );
};

export default FilterButton;