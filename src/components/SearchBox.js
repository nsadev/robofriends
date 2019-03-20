import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 mb4 ba b--blue bg-washed-blue'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;