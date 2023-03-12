import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterPlaces from '../components/FilterPlaces';
import PlaceCardList from '../components/PlaceCardList';
import { placeContext } from '../contexts/PlaceContextProvider';
import "../styles/Catalog.css"

const CatalogPage = () => {

  const { getOrganizations } = useContext(placeContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  console.log(search);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getOrganizations()

  }, [searchParams]);




  return (
    <div>
      <div className="container">
        <input type="text" placeholder='Поиск' className='search-input' value={search} onInput={(e) => setSearch(e.target.value)} />
        <FilterPlaces />
        <PlaceCardList search={search} />
      </div>
    </div>
  );
};

export default CatalogPage;