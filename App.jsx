import React from 'react';
import RegisterForm from './pages/UserRegisterPage';
import AdminRoutes from './pages/AdminRoutes';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import ExamsCreatePage from './pages/ExamsCreatePage';
import UserLoginPage from './pages/UserLoginPage';
import ExamsDisplayPage from './pages/ExamsDisplayPage';
import ExamsHistoryPage from './pages/ExamsHistoryPage';
import QuestionsPage from './pages/QuestionsPage';
import AdminHomePage from './pages/AdminHomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/admin/*' element={<AdminRoutes />} />
          <Route path='/user/login' element={<UserLoginPage />} />
          <Route path="/" element={<RegisterForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}; 

export default App;