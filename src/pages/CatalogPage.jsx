import React, { useContext, useEffect } from 'react';
import FilterPlaces from '../components/FilterPlaces';
import PlaceCardList from '../components/PlaceCardList';
import { placeContext } from '../contexts/PlaceContextProvider';
import "../styles/Catalog.css"

const CatalogPage = () => {

  const { getOrganizations } = useContext(placeContext);

  useEffect(() => {
    getOrganizations();
  }, [])

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