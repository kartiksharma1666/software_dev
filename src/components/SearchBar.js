import React, { useState } from 'react';
import { themeColors } from '../theme';
import { LocationIcon, SearchIcon } from '../assets/WelcomeScreenImage';

const SearchBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(props.location);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setDropdownOpen(false);
  };

  return (
    <div className={`relative flex flex-row items-center space-x-2 w-full ${props.classname} px-12`}>
      <div
        onClick={toggleDropdown}
        className="flex flex-row justify-center bg-secondary py-1 rounded-full text-tertiary w-2/5 lg:w-fit px-2 lg:px-3 py-1 lg:py-2 cursor-pointer"
      >
        <LocationIcon className="w-6 lg:w-8 h-4 lg:h-5 mt-1 lg:mt-0" color={themeColors.lightAccent} />
        <span className="inline mr-1 font-semibold mr-3">{selectedLocation}</span>
      </div>

      {dropdownOpen && (
        <div className="absolute top-12 left-0 bg-white border border-secondary rounded-md shadow-lg w-full lg:w-2/5">
          <ul>
            {['Delhi', 'Edinburgh', 'Ranchi'].map((location) => (
              <li
                key={location}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLocationChange(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        // onSubmit={handleSearchSubmit} 
        className="flex w-full py-1 px-2 order-last rounded-full bg-tertiary border-2 rounded-2xl border-secondary"
      >
        <input
          type="text"
          // value={searchQuery}
          // onChange={handleSearchInputChange}
          placeholder="  Search"
          autoFocus={false}
          className="flex-grow bg-tertiary w-full placeholder-color custom-input" // Modified class to take up remaining space
        />
        <button type="submit" className="flex text-primary">
          <SearchIcon className="w-6 h-4 mt-1" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
