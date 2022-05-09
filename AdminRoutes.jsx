import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHomePage from './AdminHomePage';
import AdminLoginPage from './AdminLoginPage';

const AdminRoutes = () => {

    return <Routes>
        <Route path='/login'  element={<AdminLoginPage />} />
        <Route path='/'  element={<AdminHomePage />} />
    </Routes>
};

export default AdminRoutes;