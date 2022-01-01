import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import VehicleStatus from './pages/VehicleStatus';
import AddVehicle from './pages/AddVehicle';
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard';
import {
  HashRouter, Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="add-vehicle" element={<AddVehicle />} />
      <Route path="vehicle-status/:id" element={<VehicleStatus />} />
      <Route path="user-dashboard" element={<UserDashboard />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

