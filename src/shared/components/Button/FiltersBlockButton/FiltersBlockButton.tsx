import React from 'react';
import './FiltersBlockButton.scss';
import filterIcon from '../../../../assets/icons/filter-icon.svg'

interface PropTypes {
  onClick: () => void;
}

const FiltersBlockButton = (props: PropTypes) => {
  const { onClick } = props;
  return (
    <button 
      className="filters-block-button"
      onClick={() => onClick()}
    >
      <img className="filters-button-img" src={filterIcon} alt="icon" />
      <div className="filters-button-label">Filter by</div>
    </button>
  );
};

export default FiltersBlockButton;