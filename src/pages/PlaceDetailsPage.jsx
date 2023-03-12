import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaceDetails from '../components/PlaceDetails';
import SpecialistList from '../components/SpecialistList';
import { placeContext } from '../contexts/PlaceContextProvider';

const PlaceDetailsPage = () => {
  const { getOrganization } = useContext(placeContext);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    getOrganization(id);
  }, [])


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