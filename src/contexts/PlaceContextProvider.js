import React, { useReducer } from 'react';
import axios from "axios";


export const placeContext = React.createContext();
// export const usePost = useContext(postContext)

const API = "http://34.89.179.75/";

const INIT_STATE = {
  places: [],
  place: [],
  users: [],
  profs: [],
  specs: [],
  spec: []
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
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_PROFS":
      return {
        ...state,
        profs: action.payload,
      };
    case "GET_SPECS":
      return {
        ...state,
        specs: action.payload,
      };
    case "GET_SPEC":
      return {
        ...state,
        spec: action.payload,
      };
    default:
      return state;
  }
}
const PlaceContextProvider = ({ children }) => {
  const [state = INIT_STATE, dispatch] = useReducer(reducer, INIT_STATE);

  async function getOrganizations() {
    try {
      const { data } = await axios(`${API}organization/${window.location.search}/`);
      console.log(data)
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
          Authorization: JSON.parse(localStorage.getItem("token")) || "",
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
      const { data } = await axios(`${API}organization/${id}`);
      console.log(data);

      dispatch({
        type: "GET_PLACE",
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function addSpecialisation(form) {
    try {
      const { data } = await axios.post(`${API}specialization/`, form);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addSpecialist(form) {
    try {
      const { data } = await axios.post(`${API}professional/`, form);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function usersList() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access}` || "",
        }
      }

      const { data } = await axios(`${API}accounts/list/`, config);
      console.log(data);

      dispatch({
        type: "GET_USERS",
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function profList() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access}` || "",
        }
      }

      const { data } = await axios(`${API}specialization/`, config);
      console.log(data);

      dispatch({
        type: "GET_PROFS",
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function specList() {
    try {

      const { data } = await axios(`${API}professional/`);
      console.log(data);

      dispatch({
        type: "GET_SPECS",
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function getSpec(id) {
    try {

      const { data } = await axios(`${API}professional/${id}/`);
      console.log(data);

      dispatch({
        type: "GET_SPEC",
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <placeContext.Provider value={{
      places: state.places,
      place: state.place,
      users: state.users,
      profs: state.profs,
      specs: state.specs,
      spec: state.spec,

      addOrganization,
      getOrganizations,
      getOrganization,
      addSpecialisation,
      addSpecialist,
      usersList,
      profList,
      specList,
      getSpec
    }}>
      {children}
    </placeContext.Provider>
  );
};

export default PlaceContextProvider;