import React, { useContext } from 'react';
import { placeContext } from '../contexts/PlaceContextProvider';
import "../styles/PlaceDetails.css";

const PlaceDetails = () => {

  const { place } = useContext(placeContext);

  return (
    <div className="place-details">
      <img
        src=""
        alt=""
      />
      <div className="place-info">
        <div className="place-title">
          Название: {place.name}
        </div>
        <div className="place-description">
          Описание: {place.description}
        </div>
        <div className="place-address">
          Адрес: {place.address}
        </div>
        <a className="place-number" href={`tel: ${place.phone_number}`}>
          Телефон: {place.phone_number}
        </a>
      </div>
    </div>
  );
};

export default PlaceDetails;