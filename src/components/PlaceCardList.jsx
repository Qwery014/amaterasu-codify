import React, { useContext } from 'react';
import { placeContext } from '../contexts/PlaceContextProvider';
import PlaceCardItem from './PlaceCardItem';

const PlaceCardList = ({ search }) => {

  const { places } = useContext(placeContext)
  // console.log(window.location.search);
  // (window.location.search === `?q=`)

  function search1(place) {

    for (let i = 0; i < search.length; i++) {
      if (place.name.split("")[i] === search.split("")[i]) {
        return <PlaceCardItem place={place} />
      } else {
        return null
      }
    }
  }

  return (
    <div className='catalog-places'>
      {
        places?.map(place => search.length == 0 ? <PlaceCardItem place={place} /> : search1(place))
      }

    </div>
  );
};

export default PlaceCardList;