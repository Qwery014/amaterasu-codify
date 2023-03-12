import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PlaceDetails from '../components/PlaceDetails';
import SpecialistList from '../components/SpecialistList';

const PlaceDetailsPage = () => {

  const { id } = useSearchParams();

  


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