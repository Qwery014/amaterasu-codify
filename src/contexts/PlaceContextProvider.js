import React from 'react';
import axios from "axios";


export const placeContext = React.createContext();
// export const usePost = useContext(postContext)

const INIT_STATE = {
  places: [],
  place: []
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PLACES":
      return {
        ...state,
        places: action.payload,
      };
    case "GET_PLACE":
      return {
        ...state,
        place: action.payload,
      };
    default:
      return state;
  }
}
const PlaceContextProvider = () => {
  return (
    <>

    </>
  );
};

export default PlaceContextProvider;