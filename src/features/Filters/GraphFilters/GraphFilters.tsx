import React, { useState } from 'react';
import FilterButton from "../../../shared/components/Button/FilterButton/FilterButton";
import './GraphFilters.scss';

interface PropTypes {
    filters: string[]
}

const GraphFilters = ({ filters }: PropTypes) => {
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);

    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
    };

    return (
        <div className='graph-filters'>
            {filters.map((filter)=>(
                <FilterButton 
                    key={filter} 
                    title={filter}
                    onClick={() => handleFilterClick(filter)}
                    isActive={filter === selectedFilter}
                />
            ))}
        </div>
    );
};

export default GraphFilters;