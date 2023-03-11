import React from 'react';
import "../styles/PlaceDetails.css";

const PlaceDetails = () => {
  return (
    <div className="place-details">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="place-info">
        <div className="place-title">
          Больница
        </div>
        <div className="place-description">
          Описание
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;