import React from 'react';
import FilterPlaces from '../components/FilterPlaces';
import PlaceCardList from '../components/PlaceCardList';
import "../styles/Catalog.css"

const CatalogPage = () => {


  return (
    <div>
      <div className="container">
        <input type="text" placeholder='Поиск' className='search-input' />
        <FilterPlaces />
        <PlaceCardList />
      </div>
    </div>
  );
};

export default CatalogPage;