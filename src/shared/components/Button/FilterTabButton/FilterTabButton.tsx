import React from 'react';
import './FilterTabButton.scss';
import classNames from "classnames";

interface PropTypes {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}
const FilterTabButton = (props: PropTypes) => {
    const { title, onClick, isActive } = props;
    return (
        <div className={classNames("filter-button-container", { 'active': isActive })} onClick={onClick}>
            <button className={classNames("filter-button", { 'active': isActive })}>{title}</button>
        </div>
    );
};

export default FilterTabButton;