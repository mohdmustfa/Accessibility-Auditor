import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import favicon from "./assets/favicon.png";
import AppRoutes from "./components/routes/AppRouts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);