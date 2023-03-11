import React from 'react';
import PlaceDetails from '../components/PlaceDetails';
import SpecialistList from '../components/SpecialistList';

const PlaceDetailsPage = () => {

  return (
    <div>
      <div className='container'>
        <PlaceDetails />
        <SpecialistList />
      </div>
    </div>
  );
};

export default PlaceDetailsPage;