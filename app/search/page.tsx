import React from 'react';
import FilterPanel from '../../components/FilterPanel';
import SearchBar from '../../components/SearchBar';

const SearchPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search & Add Cards</h1>
      <SearchBar />
      <FilterPanel />
      <button className="mt-4 btn">Camera</button>
    </div>
  );
};

export default SearchPage;