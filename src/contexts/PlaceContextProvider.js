import React, { useReducer } from 'react';
import axios from "axios";


export const placeContext = React.createContext();
// export const usePost = useContext(postContext)

const API = "http://34.89.179.75/";

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
const PlaceContextProvider = ({ children }) => {
  const [state = INIT_STATE, dispatch] = useReducer(reducer, INIT_STATE);

  async function getOrganizations() {
    try {
      const { data } = await axios(`${API}organization/`);

      dispatch({
        type: "GET_PLACES",
        payload: data,
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function addOrganization(organization) {
    try {
      const config = {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4NTY3MDQwLCJpYXQiOjE2Nzg1NTk4NDAsImp0aSI6ImE5NDYxYjY4ZTI4YjRkYTM4ZjkyMzk0ZTA3NzgxMGI1IiwidXNlcl9pZCI6NX0.UXqGRU__YH9hN7UUkB5nY5hGXkdN04vPx8BdtUmJbRA",
        }
      }

      const { data } = await axios.post(`${API}organization/`, organization, config);
      console.log(data);
      getOrganizations()
    } catch (error) {
      console.log(error);
    }
  }

  async function getOrganization(id) {
    try {
      const { data } = `${API}organization/${id}`;
      console.log(data)

      dispatch({
        type: "GET_PLACE",
        payload: data,
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <placeContext.Provider value={{
      places: state.places,
      place: state.place,
      addOrganization,
      getOrganizations
    }}>
      {children}
    </placeContext.Provider>
  );
};

export default PlaceContextProvider;