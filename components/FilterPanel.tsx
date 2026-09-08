import React from 'react';
import { useRouter } from 'next/router';

const FilterPanel = () => {
  const router = useRouter();

  const handleFilterChange = (filter: string) => {
    // Logic to handle filter changes
    console.log(filter);
  };

  return (
    <div className="flex space-x-4">
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="set">Set</option>
        <option value="rarity">Rarity</option>
        
      </select>
    </div>
  );
};

export default FilterPanel;