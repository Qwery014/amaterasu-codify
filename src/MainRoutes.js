import React from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import SpecialistPage from "./pages/SpecialistPage";
import Profilepage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage"



const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {

      link: "/catalog",
      element: <CatalogPage />,
      id: 2,
    },
    {
      link: "/place/:id",
      element: <PlaceDetailsPage />,
      id: 3,
    },
    {
      link: "/spec/:id",
      element: <SpecialistPage />,
      id: 4,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 5,
    },
    {
      link: '/profile',
      element: <Profilepage/>,
      id: 6
    },
    {
      link: '/register',
      element: <RegisterPage/>,
      id: 7
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
