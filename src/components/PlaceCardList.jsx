import React, { useContext } from 'react';
import { placeContext } from '../contexts/PlaceContextProvider';
import PlaceCardItem from './PlaceCardItem';

const PlaceCardList = () => {

  const { places } = useContext(placeContext)
  return (
    <div className='catalog-places'>
      {
        places?.map(place => <PlaceCardItem place={place} />)
      }

    </div>
  );
};

export default PlaceCardList;