import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PorCEP from './components/PorCEP.js'

//react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/por_CEP",
    element: <PorCEP/>
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);