import React from 'react';
import { createBrowserRouter, Router } from 'react-router';
import Root from '../Root/Root';
import Home from '../AllPages/Home/Home';
import Auth from '../AllPages/Security/Auth';
import Login from '../AllPages/Security/Login';
import Register from '../AllPages/Security/Register';
import AllServices from '../AllPages/OthersPages/AllServices';
import DetailsPage from '../AllPages/OthersPages/DetailsPage/DetailsPage';
import Profile from '../AllPages/OthersPages/Profile';
import PrivateRoute from '../PrivateRoute/PrivateROute';
import Forgot from '../AllPages/Security/Forgot';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path:'/all-services', Component: AllServices },
      { path: '/all-services/:skillId', element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>},
      { path: '/profile', Component: Profile },

    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      { 
        path: '/auth/login',
        Component: Login,
       },
      { 
        path: '/auth/Register',
        Component: Register,
      },
      {
        path: '/auth/forgot',
        Component: Forgot,
      }
    ],
  }
]);

export default router;