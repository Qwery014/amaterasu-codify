import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
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
