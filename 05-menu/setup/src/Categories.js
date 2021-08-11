import React from 'react';

const Categories = ( {filterMenu} ) => {

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => 
        filterMenu('all')}>all
      </button>
      <button className="filter-btn" onClick={() => 
        filterMenu('breakfast')}>breakfast
      </button>
      <button className="filter-btn" onClick={() => 
        filterMenu('lunch')}>lunch
      </button>
      <button className="filter-btn" onClick={() => 
        filterMenu('shakes')}>shakes
      </button>
    </div>
  );
};

export default Categories;
