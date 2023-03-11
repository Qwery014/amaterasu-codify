import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profilepage from "./pages/ProfilePage";


const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: 'Profile',
      element: <Profilepage/>,
      id: 2
    },
  ]


  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
